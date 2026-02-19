/**
 * LakshyaSetu AI - Career Intelligence Engine
 * Core AI modules for career guidance and analysis
 */

class CareerIntelligenceEngine {
    constructor() {
        this.rolesData = null;
        this.skillsData = null;
        this.examsData = null;
        this.coursesData = null;
        this.interviewData = null;
        this.motivationData = null;
        this.initializeData();
    }

    async initializeData() {
        try {
            // Load datasets
            this.rolesData = await this.loadDataset('../datasets/roles_master_dataset.json');
            this.skillsData = await this.loadDataset('../datasets/skills_master_dataset.json');
            this.examsData = await this.loadDataset('../datasets/exam_information_dataset.json');
            this.coursesData = await this.loadDataset('../datasets/courses_dataset.json');
            this.interviewData = await this.loadDataset('../datasets/interview_question_bank.json');
            this.motivationData = await this.loadDataset('../datasets/motivation_dataset.json');
        } catch (error) {
            console.error('Error loading datasets:', error);
        }
    }

    async loadDataset(path) {
        try {
            const response = await fetch(path);
            return await response.json();
        } catch (error) {
            console.error(`Error loading dataset ${path}:`, error);
            return null;
        }
    }

    /**
     * Career Role Matching Engine
     * Matches user skills with role requirements
     */
    async matchCareerRoles(userSkills, userInterests, educationLevel, preferredSector) {
        if (!this.rolesData || !this.skillsData) {
            return { error: "Datasets not loaded" };
        }

        const userSkillSet = new Set(userSkills.map(s => s.toLowerCase()));
        const roleMatches = [];

        for (const role of this.rolesData.roles) {
            const matchScore = this.calculateRoleMatch(role, userSkillSet, userInterests, educationLevel, preferredSector);
            if (matchScore.score > 0) {
                roleMatches.push({
                    role_name: role.role_name,
                    match_percentage: Math.round(matchScore.score * 100),
                    why_this_role_fits: matchScore.reasoning,
                    required_skills: role.required_skills.map(rs => rs.skill),
                    salary_range: role.salary_range,
                    industry_demand_score: role.industry_demand_score,
                    category: role.category,
                    education_required: role.education_required,
                    growth_potential: role.growth_potential
                });
            }
        }

        // Sort by match percentage and return top 5
        return roleMatches.sort((a, b) => b.match_percentage - a.match_percentage).slice(0, 5);
    }

    calculateRoleMatch(role, userSkillSet, userInterests, educationLevel, preferredSector) {
        let score = 0;
        let reasoning = [];

        // Skill overlap matching with weighted importance
        let totalWeight = 0;
        let matchedWeight = 0;

        for (const reqSkill of role.required_skills) {
            totalWeight += reqSkill.importance;
            if (userSkillSet.has(reqSkill.skill.toLowerCase())) {
                matchedWeight += reqSkill.importance;
                reasoning.push(`Has ${reqSkill.skill} skill`);
            }
        }

        const skillScore = totalWeight > 0 ? matchedWeight / totalWeight : 0;
        score += skillScore * 0.7; // 70% weight to skills

        // Interest matching
        if (userInterests && userInterests.length > 0) {
            const interestMatch = this.matchInterests(role.category, userInterests);
            score += interestMatch * 0.2; // 20% weight to interests
            if (interestMatch > 0.5) {
                reasoning.push(`Aligns with interests in ${role.category}`);
            }
        }

        // Education level matching
        const educationMatch = this.matchEducation(role.education_required, educationLevel);
        score += educationMatch * 0.1; // 10% weight to education

        // Sector preference
        if (preferredSector && role.category.toLowerCase().includes(preferredSector.toLowerCase())) {
            score += 0.1;
            reasoning.push(`Matches preferred sector: ${preferredSector}`);
        }

        // Cap score at 1.0
        score = Math.min(score, 1.0);

        return {
            score,
            reasoning: reasoning.join('; ')
        };
    }

    matchInterests(roleCategory, userInterests) {
        const categoryKeywords = roleCategory.toLowerCase().split(' ');
        const interestKeywords = userInterests.map(i => i.toLowerCase());
        
        let matches = 0;
        for (const keyword of categoryKeywords) {
            for (const interest of interestKeywords) {
                if (interest.includes(keyword) || keyword.includes(interest)) {
                    matches++;
                    break;
                }
            }
        }
        
        return matches / Math.max(categoryKeywords.length, 1);
    }

    matchEducation(requiredEducation, userEducation) {
        if (!userEducation) return 0.5;
        
        const educationLevels = {
            '10+2': 1,
            'diploma': 2,
            'bachelor': 3,
            'master': 4,
            'phd': 5
        };

        const requiredLevel = this.extractEducationLevel(requiredEducation);
        const userLevel = this.extractEducationLevel(userEducation);

        if (userLevel >= requiredLevel) return 1.0;
        if (userLevel >= requiredLevel - 1) return 0.7;
        return 0.3;
    }

    extractEducationLevel(educationText) {
        const text = educationText.toLowerCase();
        if (text.includes('phd') || text.includes('doctorate')) return 5;
        if (text.includes('master') || text.includes('postgraduate')) return 4;
        if (text.includes('bachelor') || text.includes('graduate')) return 3;
        if (text.includes('diploma')) return 2;
        if (text.includes('10+2') || text.includes('12th')) return 1;
        return 2; // default
    }

    /**
     * Skill Gap & Readiness Engine
     * Calculates readiness score and identifies skill gaps
     */
    async analyzeSkillGap(selectedRole, userSkills) {
        if (!this.rolesData || !this.skillsData) {
            return { error: "Datasets not loaded" };
        }

        const role = this.rolesData.roles.find(r => r.role_name === selectedRole);
        if (!role) {
            return { error: "Role not found" };
        }

        const userSkillSet = new Set(userSkills.map(s => s.toLowerCase()));
        const missingSkills = [];
        let totalImportance = 0;
        let matchedImportance = 0;

        for (const reqSkill of role.required_skills) {
            totalImportance += reqSkill.importance;
            if (userSkillSet.has(reqSkill.skill.toLowerCase())) {
                matchedImportance += reqSkill.importance;
            } else {
                const skillInfo = this.skillsData.skills.find(s => s.skill_name === reqSkill.skill);
                missingSkills.push({
                    skill: reqSkill.skill,
                    importance: reqSkill.importance,
                    priority: this.classifyPriority(reqSkill.importance),
                    difficulty: skillInfo ? skillInfo.difficulty_level : "Intermediate",
                    estimated_time: skillInfo ? skillInfo.learning_time_months : 6,
                    category: skillInfo ? skillInfo.category : "Technical"
                });
            }
        }

        const readinessPercentage = totalImportance > 0 ? Math.round((matchedImportance / totalImportance) * 100) : 0;
        const estimatedTimeToReady = this.calculateTimeToReady(missingSkills);

        return {
            overall_readiness_percentage: readinessPercentage,
            missing_skills: missingSkills.sort((a, b) => b.importance - a.importance),
            estimated_time_to_job_ready: estimatedTimeToReady,
            role_details: {
                name: role.role_name,
                category: role.category,
                growth_potential: role.growth_potential
            }
        };
    }

    classifyPriority(importance) {
        if (importance >= 0.8) return "🔴 High Priority";
        if (importance >= 0.6) return "🟡 Medium Priority";
        return "🟢 Low Priority";
    }

    calculateTimeToReady(missingSkills) {
        if (missingSkills.length === 0) return "Job Ready";
        
        const totalTime = missingSkills.reduce((sum, skill) => sum + skill.estimated_time, 0);
        const averageTime = Math.round(totalTime / missingSkills.length);
        
        if (averageTime <= 3) return `${averageTime} months`;
        if (averageTime <= 6) return `${averageTime} months`;
        return `${Math.round(averageTime / 12 * 10) / 10} years`;
    }

    /**
     * Exam Guidance Engine
     * Filters and recommends exams based on eligibility
     */
    async getExamGuidance(userEducation, careerInterests, age = null) {
        if (!this.examsData) {
            return { error: "Exam dataset not loaded" };
        }

        const eligibleExams = [];

        for (const exam of this.examsData.exams) {
            const eligibilityMatch = this.checkEligibility(exam, userEducation, age);
            const careerMatch = this.checkCareerMatch(exam, careerInterests);

            if (eligibilityMatch.eligible && careerMatch.score > 0.3) {
                eligibleExams.push({
                    exam_name: exam.exam_name,
                    conducting_body: exam.conducting_body,
                    eligibility: exam.eligibility,
                    subjects_tested: exam.subjects_tested,
                    difficulty_score: exam.difficulty_score,
                    selection_rate: exam.selection_rate,
                    age_limit: exam.age_limit,
                    official_website: exam.official_website,
                    linked_career_paths: exam.linked_career_paths,
                    exam_type: exam.exam_type,
                    frequency: exam.frequency,
                    application_fee: exam.application_fee,
                    exam_mode: exam.exam_mode,
                    eligibility_match_score: eligibilityMatch.score,
                    career_match_score: careerMatch.score,
                    overall_fit_score: (eligibilityMatch.score + careerMatch.score) / 2
                });
            }
        }

        return eligibleExams.sort((a, b) => b.overall_fit_score - a.overall_fit_score);
    }

    checkEligibility(exam, userEducation, age) {
        let score = 1.0;
        let eligible = true;

        // Education eligibility check
        const educationMatch = this.matchEducation(exam.eligibility, userEducation);
        if (educationMatch < 0.5) {
            eligible = false;
            score = 0;
        } else {
            score *= educationMatch;
        }

        // Age eligibility check (simplified)
        if (age && exam.age_limit && exam.age_limit !== "No upper age limit") {
            // This is a simplified check - in reality, age limits are complex
            score *= 0.9;
        }

        return { eligible, score };
    }

    checkCareerMatch(exam, careerInterests) {
        if (!careerInterests || careerInterests.length === 0) {
            return { score: 0.5 }; // neutral score
        }

        let matches = 0;
        const careerSet = new Set(careerInterests.map(c => c.toLowerCase()));

        for (const career of exam.linked_career_paths) {
            for (const interest of careerSet) {
                if (career.toLowerCase().includes(interest) || interest.includes(career.toLowerCase())) {
                    matches++;
                    break;
                }
            }
        }

        return {
            score: matches / Math.max(exam.linked_career_paths.length, 1)
        };
    }

    /**
     * Learning Roadmap Generator
     * Creates 3-stage learning roadmap for skill gaps
     */
    async generateLearningRoadmap(missingSkills) {
        if (!this.coursesData) {
            return { error: "Courses dataset not loaded" };
        }

        const roadmap = {
            stage_1_foundation: [],
            stage_2_intermediate: [],
            stage_3_advanced: []
        };

        for (const skill of missingSkills) {
            const courses = this.coursesData.courses.filter(c => c.skill === skill.skill);
            
            // Sort by difficulty and priority
            courses.sort((a, b) => {
                const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
                return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
            });

            // Distribute courses across stages
            if (courses.length > 0) {
                // Foundation stage
                const foundationCourse = courses.find(c => c.difficulty === 'Beginner');
                if (foundationCourse) {
                    roadmap.stage_1_foundation.push({
                        skill: skill.skill,
                        course_name: foundationCourse.course_name,
                        platform: foundationCourse.platform,
                        estimated_duration: foundationCourse.estimated_duration,
                        priority_level: foundationCourse.priority_level,
                        difficulty: foundationCourse.difficulty,
                        provider: foundationCourse.provider,
                        cost: foundationCourse.cost
                    });
                }

                // Intermediate stage
                const intermediateCourse = courses.find(c => c.difficulty === 'Intermediate');
                if (intermediateCourse) {
                    roadmap.stage_2_intermediate.push({
                        skill: skill.skill,
                        course_name: intermediateCourse.course_name,
                        platform: intermediateCourse.platform,
                        estimated_duration: intermediateCourse.estimated_duration,
                        priority_level: intermediateCourse.priority_level,
                        difficulty: intermediateCourse.difficulty,
                        provider: intermediateCourse.provider,
                        cost: intermediateCourse.cost
                    });
                }

                // Advanced stage
                const advancedCourse = courses.find(c => c.difficulty === 'Advanced');
                if (advancedCourse) {
                    roadmap.stage_3_advanced.push({
                        skill: skill.skill,
                        course_name: advancedCourse.course_name,
                        platform: advancedCourse.platform,
                        estimated_duration: advancedCourse.estimated_duration,
                        priority_level: advancedCourse.priority_level,
                        difficulty: advancedCourse.difficulty,
                        provider: advancedCourse.provider,
                        cost: advancedCourse.cost
                    });
                }
            }
        }

        return roadmap;
    }

    /**
     * Interview Preparation Engine
     * Provides interview questions and preparation tips
     */
    async getInterviewPreparation(targetRole) {
        if (!this.interviewData) {
            return { error: "Interview dataset not loaded" };
        }

        // Find the best matching role category
        const roleCategory = this.findRoleCategory(targetRole);
        const interviewData = this.interviewData.interview_questions.find(
            iq => iq.role_category.toLowerCase().includes(roleCategory.toLowerCase())
        );

        if (!interviewData) {
            return { error: "No interview data found for this role" };
        }

        return {
            technical_questions: interviewData.technical_questions.slice(0, 3),
            hr_questions: interviewData.hr_questions.slice(0, 2),
            aptitude_question: interviewData.aptitude_question,
            preparation_tips: this.generatePreparationTips(targetRole),
            difficulty_level: this.assessDifficulty(targetRole),
            focus_areas: this.identifyFocusAreas(targetRole)
        };
    }

    findRoleCategory(targetRole) {
        const roleMappings = {
            'software': 'Software Developer',
            'data scientist': 'Data Scientist',
            'business analyst': 'Business Analyst',
            'digital marketing': 'Digital Marketing',
            'financial analyst': 'Financial Analyst'
        };

        const roleLower = targetRole.toLowerCase();
        for (const [key, value] of Object.entries(roleMappings)) {
            if (roleLower.includes(key)) {
                return value;
            }
        }

        return 'Software Developer'; // default
    }

    generatePreparationTips(targetRole) {
        return [
            "Research the company thoroughly and understand their business model",
            "Practice STAR method (Situation, Task, Action, Result) for behavioral questions",
            "Prepare questions to ask the interviewer about the role and company culture",
            "Review your resume and be ready to discuss specific projects and achievements",
            "Practice technical problems relevant to your role",
            "Dress professionally and arrive 10-15 minutes early"
        ];
    }

    assessDifficulty(targetRole) {
        const difficultyMap = {
            'Software Developer': 'Intermediate',
            'Data Scientist': 'Advanced',
            'Business Analyst': 'Intermediate',
            'Digital Marketing': 'Beginner',
            'Financial Analyst': 'Advanced'
        };

        return difficultyMap[targetRole] || 'Intermediate';
    }

    identifyFocusAreas(targetRole) {
        const focusAreas = {
            'Software Developer': ['Problem Solving', 'System Design', 'Code Optimization'],
            'Data Scientist': ['Statistical Analysis', 'Machine Learning', 'Data Visualization'],
            'Business Analyst': ['Requirements Gathering', 'Process Analysis', 'Communication'],
            'Digital Marketing': ['Campaign Strategy', 'Analytics', 'Content Creation'],
            'Financial Analyst': ['Financial Modeling', 'Market Analysis', 'Risk Assessment']
        };

        return focusAreas[targetRole] || ['Technical Skills', 'Communication', 'Problem Solving'];
    }

    /**
     * AI Career Mentor Mode
     * Provides motivational guidance and support
     */
    async getMentorship(userMessage, userProfile = {}) {
        if (!this.motivationData) {
            return { error: "Motivation dataset not loaded" };
        }

        const messageLower = userMessage.toLowerCase();
        
        // Find matching trigger phrases
        for (const motivation of this.motivationData.motivation_responses) {
            for (const trigger of motivation.trigger_phrases) {
                if (messageLower.includes(trigger)) {
                    return {
                        title: motivation.title,
                        content: motivation.content,
                        action_steps: motivation.action_steps,
                        encouragement: motivation.encouragement,
                        response_type: motivation.response_type
                    };
                }
            }
        }

        // Default response if no specific trigger found
        return {
            title: "Personalized Career Guidance",
            content: "I'm here to help you navigate your career journey. Let's work together to create a personalized strategy for your success.",
            action_steps: [
                "Assess your current skills and interests",
                "Set clear, achievable career goals",
                "Create a structured learning plan",
                "Build professional network and seek mentorship"
            ],
            encouragement: "Your career journey is unique, and with the right strategy and persistence, you can achieve your goals.",
            response_type: "general_guidance"
        };
    }

    /**
     * Role Suggestion Mode
     * Proactively recommends career paths
     */
    async suggestCareerPaths(userSkills, userInterests, educationLevel) {
        return await this.matchCareerRoles(userSkills, userInterests, educationLevel, '');
    }
}

// Export for use in other modules
window.CareerIntelligenceEngine = CareerIntelligenceEngine;
