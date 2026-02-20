// ============================================
// BrightLearn AI - Application Logic
// ============================================

// Job Categories Data for 12th Fail/Pass
const jobCategoriesData = {
    "private-sector": {
        category_name: "Private Sector Jobs",
        jobs: [
            { name: "Delivery Executive", companies: "Swiggy, Zomato, Amazon, Flipkart" },
            { name: "Warehouse Assistant", companies: "Amazon, Flipkart, Myntra" },
            { name: "Packing Staff", companies: "Amazon, FedEx, DTDC" },
            { name: "Helper / Store Helper", companies: "Retail Stores, Supermarkets" },
            { name: "Office Boy / Office Assistant", companies: "Corporate Offices" },
            { name: "Housekeeping Staff", companies: "Hotels, Malls, Offices" },
            { name: "Security Guard", companies: "Residential Complexes, Malls" },
            { name: "Peon", companies: "Government Offices, Schools" },
            { name: "Factory Worker", companies: "Manufacturing Units" },
            { name: "Construction Worker", companies: "Construction Sites" },
            { name: "Electrician Helper", companies: "Electrical Contractors" },
            { name: "Mechanic Helper", companies: "Vehicle Service Centers" },
            { name: "Car Washer", companies: "Car Showrooms, Service Centers" },
            { name: "Bike Mechanic Assistant", companies: "Bike Service Centers" },
            { name: "Loading & Unloading Staff", companies: "Godowns, Warehouses" },
            { name: "Hotel Waiter / Steward", companies: "Hotels, Restaurants" },
            { name: "Kitchen Helper", companies: "Hotels, Canteens" },
            { name: "Cleaner", companies: "Mall / Office / Hospital" },
            { name: "Driver", companies: "With valid license" },
            { name: "Courier Delivery Staff", companies: "FedEx, DTDC, BlueDart" }
        ]
    },
    "sales-support": {
        category_name: "Sales & Support Jobs",
        jobs: [
            { name: "Telecaller", companies: "BPO, KPO, Marketing Firms" },
            { name: "Field Sales Executive", companies: "FMCG, Real Estate" },
            { name: "Retail Sales Associate", companies: "Showrooms, Malls" },
            { name: "Promoter", companies: "Mall / Events" },
            { name: "Customer Service Support", companies: "With Basic English" }
        ]
    },
    "skill-based": {
        category_name: "Skill-Based Jobs",
        jobs: [
            { name: "Plumber", companies: "Self-employed / Companies" },
            { name: "Electrician", companies: "After short training" },
            { name: "AC Technician", companies: "Service Centers" },
            { name: "Mobile Repair Technician", companies: "Service Centers" },
            { name: "Computer Repair Technician", companies: "Service Centers" },
            { name: "Tailor", companies: "Fashion Houses / Self" },
            { name: "Beautician", companies: "Salons / Self" },
            { name: "Barber", companies: "Salons / Self" },
            { name: "Photographer Assistant", companies: "Studios" },
            { name: "Printing Shop Operator", companies: "Printing Press" }
        ]
    },
    "government": {
        category_name: "Government Jobs",
        jobs: [
            { name: "Railway Group D", companies: "Some posts allow 10th" },
            { name: "Police Constable", companies: "10th/12th depending on state" },
            { name: "Home Guard", companies: "State Government" },
            { name: "Army Soldier", companies: "Minimum 10th/12th" },
            { name: "Forest Guard", companies: "State-wise exam" }
        ]
    },
    "self-employment": {
        category_name: "Self-Employment",
        jobs: [
            { name: "Small Grocery Shop", companies: "Self-owned" },
            { name: "Street Food Stall", companies: "Self-owned" },
            { name: "Tea Stall", companies: "Self-owned" },
            { name: "Freelance Delivery Partner", companies: "Part-time" },
            { name: "Online Reselling", companies: "Meesho / Flipkart" },
            { name: "YouTube Content Creator", companies: "Self-owned" },
            { name: "Car Washing Business", companies: "Self-owned" },
            { name: "Mobile Repair Shop", companies: "Self-owned" },
            { name: "Poultry Farming", companies: "Self-owned" },
            { name: "Dairy Farming", companies: "Self-owned" }
        ]
    }
};

// Embedded datasets for standalone functionality
const rolesData = [
    {
        id: 1,
        role_name: "Software Developer",
        category: "Technology",
        required_skills: [
            { skill: "Programming", importance: 0.9 },
            { skill: "Problem Solving", importance: 0.85 },
            { skill: "Data Structures", importance: 0.8 },
            { skill: "Algorithms", importance: 0.8 },
            { skill: "Version Control", importance: 0.7 },
            { skill: "Database Management", importance: 0.6 },
            { skill: "Web Development", importance: 0.7 }
        ],
        salary_range: { entry_level: "₹4-8 LPA", mid_level: "₹8-15 LPA", senior_level: "₹15-30+ LPA" },
        industry_demand_score: 9.2,
        education_required: "Bachelor's in Computer Science",
        growth_potential: "High"
    },
    {
        id: 2,
        role_name: "Data Scientist",
        category: "Technology",
        required_skills: [
            { skill: "Python", importance: 0.9 },
            { skill: "Statistics", importance: 0.85 },
            { skill: "Machine Learning", importance: 0.9 },
            { skill: "Data Analysis", importance: 0.85 },
            { skill: "SQL", importance: 0.8 },
            { skill: "Data Visualization", importance: 0.7 },
            { skill: "Mathematics", importance: 0.8 }
        ],
        salary_range: { entry_level: "₹6-12 LPA", mid_level: "₹12-25 LPA", senior_level: "₹25-50+ LPA" },
        industry_demand_score: 9.5,
        education_required: "Bachelor's/Master's in Data Science",
        growth_potential: "Very High"
    },
    {
        id: 3,
        role_name: "Digital Marketing Specialist",
        category: "Marketing",
        required_skills: [
            { skill: "SEO", importance: 0.8 },
            { skill: "Content Marketing", importance: 0.85 },
            { skill: "Social Media Marketing", importance: 0.8 },
            { skill: "Analytics", importance: 0.75 },
            { skill: "Copywriting", importance: 0.7 },
            { skill: "Email Marketing", importance: 0.6 },
            { skill: "PPC Advertising", importance: 0.7 }
        ],
        salary_range: { entry_level: "₹3-6 LPA", mid_level: "₹6-12 LPA", senior_level: "₹12-25+ LPA" },
        industry_demand_score: 8.5,
        education_required: "Bachelor's in Marketing",
        growth_potential: "High"
    },
    {
        id: 4,
        role_name: "Civil Engineer",
        category: "Engineering",
        required_skills: [
            { skill: "AutoCAD", importance: 0.85 },
            { skill: "Structural Analysis", importance: 0.9 },
            { skill: "Project Management", importance: 0.8 },
            { skill: "Construction Management", importance: 0.8 },
            { skill: "Mathematics", importance: 0.85 },
            { skill: "Physics", importance: 0.7 },
            { skill: "Building Codes", importance: 0.75 }
        ],
        salary_range: { entry_level: "₹3-6 LPA", mid_level: "₹6-15 LPA", senior_level: "₹15-35+ LPA" },
        industry_demand_score: 7.8,
        education_required: "Bachelor's in Civil Engineering",
        growth_potential: "Medium"
    },
    {
        id: 5,
        role_name: "Financial Analyst",
        category: "Finance",
        required_skills: [
            { skill: "Financial Analysis", importance: 0.9 },
            { skill: "Excel", importance: 0.85 },
            { skill: "Accounting", importance: 0.8 },
            { skill: "Financial Modeling", importance: 0.85 },
            { skill: "Statistics", importance: 0.7 },
            { skill: "Business Acumen", importance: 0.75 },
            { skill: "Communication", importance: 0.7 }
        ],
        salary_range: { entry_level: "₹4-8 LPA", mid_level: "₹8-18 LPA", senior_level: "₹18-40+ LPA" },
        industry_demand_score: 8.2,
        education_required: "Bachelor's in Finance",
        growth_potential: "High"
    },
    {
        id: 6,
        role_name: "UX/UI Designer",
        category: "Design",
        required_skills: [
            { skill: "Design Principles", importance: 0.9 },
            { skill: "Figma", importance: 0.85 },
            { skill: "User Research", importance: 0.8 },
            { skill: "Prototyping", importance: 0.85 },
            { skill: "Adobe Creative Suite", importance: 0.75 },
            { skill: "HTML/CSS", importance: 0.6 },
            { skill: "Communication", importance: 0.7 }
        ],
        salary_range: { entry_level: "₹3-7 LPA", mid_level: "₹7-15 LPA", senior_level: "₹15-30+ LPA" },
        industry_demand_score: 8.8,
        education_required: "Bachelor's in Design",
        growth_potential: "High"
    },
    {
        id: 7,
        role_name: "Mechanical Engineer",
        category: "Engineering",
        required_skills: [
            { skill: "CAD Software", importance: 0.9 },
            { skill: "Thermodynamics", importance: 0.85 },
            { skill: "Manufacturing Processes", importance: 0.8 },
            { skill: "Project Management", importance: 0.75 },
            { skill: "Mathematics", importance: 0.85 },
            { skill: "Physics", importance: 0.8 },
            { skill: "Problem Solving", importance: 0.8 }
        ],
        salary_range: { entry_level: "₹3-6 LPA", mid_level: "₹6-15 LPA", senior_level: "₹15-35+ LPA" },
        industry_demand_score: 7.5,
        education_required: "Bachelor's in Mechanical Engineering",
        growth_potential: "Medium"
    },
    {
        id: 8,
        role_name: "Content Writer",
        category: "Creative",
        required_skills: [
            { skill: "Writing", importance: 0.95 },
            { skill: "Editing", importance: 0.85 },
            { skill: "SEO", importance: 0.7 },
            { skill: "Research", importance: 0.8 },
            { skill: "Creativity", importance: 0.85 },
            { skill: "Time Management", importance: 0.7 },
            { skill: "Communication", importance: 0.75 }
        ],
        salary_range: { entry_level: "₹2-5 LPA", mid_level: "₹5-10 LPA", senior_level: "₹10-20+ LPA" },
        industry_demand_score: 7.2,
        education_required: "Bachelor's in English/Journalism",
        growth_potential: "Medium"
    },
    {
        id: 9,
        role_name: "Network Administrator",
        category: "IT Infrastructure",
        required_skills: [
            { skill: "Networking", importance: 0.95 },
            { skill: "Security", importance: 0.85 },
            { skill: "Troubleshooting", importance: 0.9 },
            { skill: "Cisco", importance: 0.8 },
            { skill: "Firewall Management", importance: 0.75 },
            { skill: "Linux", importance: 0.7 },
            { skill: "Documentation", importance: 0.6 }
        ],
        salary_range: { entry_level: "₹3-6 LPA", mid_level: "₹6-12 LPA", senior_level: "₹12-25+ LPA" },
        industry_demand_score: 8.0,
        education_required: "Bachelor's in IT",
        growth_potential: "Medium"
    },
    {
        id: 10,
        role_name: "Business Analyst",
        category: "Business",
        required_skills: [
            { skill: "Business Analysis", importance: 0.9 },
            { skill: "Requirements Gathering", importance: 0.85 },
            { skill: "SQL", importance: 0.75 },
            { skill: "Communication", importance: 0.85 },
            { skill: "Problem Solving", importance: 0.8 },
            { skill: "Documentation", importance: 0.75 },
            { skill: "Stakeholder Management", importance: 0.8 }
        ],
        salary_range: { entry_level: "₹4-8 LPA", mid_level: "₹8-16 LPA", senior_level: "₹16-35+ LPA" },
        industry_demand_score: 8.3,
        education_required: "Bachelor's in Business/IT",
        growth_potential: "High"
    }
];

const coursesData = [
    { id: 1, skill: "Programming", course_name: "Python for Everybody", platform: "Coursera", estimated_duration: "3 months", priority_level: "High", difficulty: "Beginner", cost: "Free / ₹2,500" },
    { id: 2, skill: "Programming", course_name: "Full Stack Web Development", platform: "Udemy", estimated_duration: "6 months", priority_level: "High", difficulty: "Intermediate", cost: "₹3,500-8,000" },
    { id: 3, skill: "Data Structures", course_name: "Data Structures and Algorithms", platform: "Coursera", estimated_duration: "4 months", priority_level: "High", difficulty: "Intermediate", cost: "Free / ₹3,000" },
    { id: 4, skill: "Machine Learning", course_name: "Machine Learning Specialization", platform: "Coursera", estimated_duration: "3 months", priority_level: "High", difficulty: "Intermediate", cost: "Free / ₹3,500" },
    { id: 5, skill: "Data Science", course_name: "Data Science Professional Certificate", platform: "Coursera", estimated_duration: "6 months", priority_level: "High", difficulty: "Intermediate", cost: "Free / ₹4,000" },
    { id: 6, skill: "Web Development", course_name: "The Complete Web Developer Course", platform: "Udemy", estimated_duration: "4 months", priority_level: "Medium", difficulty: "Beginner", cost: "₹3,500-8,000" },
    { id: 7, skill: "Digital Marketing", course_name: "Digital Marketing Specialization", platform: "Coursera", estimated_duration: "4 months", priority_level: "Medium", difficulty: "Beginner", cost: "Free / ₹3,000" },
    { id: 8, skill: "UX/UI Design", course_name: "Google UX Design Professional Certificate", platform: "Coursera", estimated_duration: "6 months", priority_level: "Medium", difficulty: "Beginner", cost: "₹2,000/month" },
    { id: 9, skill: "Cloud Computing", course_name: "AWS Solutions Architect", platform: "Udemy", estimated_duration: "3 months", priority_level: "Medium", difficulty: "Intermediate", cost: "₹3,500-8,000" },
    { id: 10, skill: "Cybersecurity", course_name: "CompTIA Security+ Certification", platform: "Udemy", estimated_duration: "2 months", priority_level: "Medium", difficulty: "Intermediate", cost: "₹3,500-8,000" },
    { id: 11, skill: "Business Analysis", course_name: "Business Analysis Fundamentals", platform: "Udemy", estimated_duration: "2 months", priority_level: "Medium", difficulty: "Beginner", cost: "₹3,500-8,000" },
    { id: 12, skill: "Financial Analysis", course_name: "Financial Modeling and Valuation Analyst", platform: "CFI", estimated_duration: "4 months", priority_level: "Medium", difficulty: "Intermediate", cost: "₹35,000/year" },
    { id: 13, skill: "Project Management", course_name: "PMP Certification Training", platform: "Simplilearn", estimated_duration: "3 months", priority_level: "Medium", difficulty: "Intermediate", cost: "₹15,000-25,000" },
    { id: 14, skill: "AutoCAD", course_name: "AutoCAD 2023 Complete Course", platform: "Udemy", estimated_duration: "2 months", priority_level: "Medium", difficulty: "Beginner", cost: "₹3,500-8,000" },
    { id: 15, skill: "SQL", course_name: "SQL for Data Science", platform: "Coursera", estimated_duration: "1 month", priority_level: "High", difficulty: "Beginner", cost: "Free / ₹2,000" },
    { id: 16, skill: "Excel", course_name: "Excel Skills for Business Specialization", platform: "Coursera", estimated_duration: "3 months", priority_level: "High", difficulty: "Beginner", cost: "Free / ₹3,000" },
    { id: 17, skill: "Communication", course_name: "Communication Skills for Business", platform: "LinkedIn Learning", estimated_duration: "2 months", priority_level: "Medium", difficulty: "Beginner", cost: "₹1,500/month" },
    { id: 18, skill: "Networking", course_name: "CCNA 200-301 Complete Course", platform: "Udemy", estimated_duration: "3 months", priority_level: "Medium", difficulty: "Intermediate", cost: "₹3,500-8,000" },
    { id: 19, skill: "Content Writing", course_name: "Content Writing Certification", platform: "HubSpot Academy", estimated_duration: "1 month", priority_level: "Medium", difficulty: "Beginner", cost: "Free" },
    { id: 20, skill: "Statistics", course_name: "Statistics with Python", platform: "Coursera", estimated_duration: "3 months", priority_level: "High", difficulty: "Intermediate", cost: "Free / ₹3,000" }
];

const examsData = [
    { id: 1, exam_name: "JEE Main", conducting_body: "NTA", eligibility: "10+2 with PCM", subjects_tested: ["Physics", "Chemistry", "Mathematics"], difficulty_score: 8.5, selection_rate: 2.5, age_limit: "No upper age limit", official_website: "https://jeemain.nta.nic.in/", linked_career_paths: ["Software Developer", "Mechanical Engineer", "Civil Engineer"], exam_type: "Engineering Entrance", frequency: "Twice a year", application_fee: "₹650", exam_mode: "Computer-based" },
    { id: 2, exam_name: "NEET UG", conducting_body: "NTA", eligibility: "10+2 with PCB", subjects_tested: ["Physics", "Chemistry", "Biology"], difficulty_score: 9.0, selection_rate: 6.0, age_limit: "17-25 years", official_website: "https://neet.nta.nic.in/", linked_career_paths: ["Doctor", "Medical Researcher"], exam_type: "Medical Entrance", frequency: "Once a year", application_fee: "₹1600", exam_mode: "Pen and paper" },
    { id: 3, exam_name: "UPSC Civil Services", conducting_body: "UPSC", eligibility: "Bachelor's degree", subjects_tested: ["General Studies", "Optional Subject", "Essay"], difficulty_score: 9.8, selection_rate: 0.2, age_limit: "21-32 years", official_website: "https://www.upsc.gov.in/", linked_career_paths: ["IAS Officer", "IPS Officer"], exam_type: "Government Services", frequency: "Once a year", application_fee: "₹100", exam_mode: "Pen and paper" },
    { id: 4, exam_name: "CAT", conducting_body: "IIMs", eligibility: "Bachelor's degree with 50% marks", subjects_tested: ["Quantitative Ability", "Data Interpretation", "Logical Reasoning"], difficulty_score: 8.8, selection_rate: 2.0, age_limit: "No upper age limit", official_website: "https://iimcat.ac.in/", linked_career_paths: ["Business Analyst", "Financial Analyst"], exam_type: "Management Entrance", frequency: "Once a year", application_fee: "₹2200", exam_mode: "Computer-based" },
    { id: 5, exam_name: "GATE", conducting_body: "IITs/IISc", eligibility: "Bachelor's in Engineering", subjects_tested: ["Engineering Mathematics", "General Aptitude", "Subject-specific"], difficulty_score: 8.2, selection_rate: 15.0, age_limit: "No upper age limit", official_website: "https://gate2024.iisc.ac.in/", linked_career_paths: ["Software Developer", "Mechanical Engineer"], exam_type: "Postgraduate Entrance", frequency: "Once a year", application_fee: "₹1800", exam_mode: "Computer-based" },
    { id: 6, exam_name: "IBPS PO", conducting_body: "IBPS", eligibility: "Bachelor's degree in any discipline", subjects_tested: ["Reasoning", "Quantitative Aptitude", "English"], difficulty_score: 7.5, selection_rate: 0.8, age_limit: "20-30 years", official_website: "https://www.ibps.in/", linked_career_paths: ["Bank PO", "Bank Manager"], exam_type: "Banking", frequency: "Once a year", application_fee: "₹850", exam_mode: "Computer-based" },
    { id: 7, exam_name: "SSC CGL", conducting_body: "SSC", eligibility: "Bachelor's degree", subjects_tested: ["General Intelligence", "General Awareness", "Quantitative Aptitude"], difficulty_score: 7.8, selection_rate: 3.5, age_limit: "18-27 years", official_website: "https://ssc.nic.in/", linked_career_paths: ["Government Officer", "Tax Assistant"], exam_type: "Government Services", frequency: "Once a year", application_fee: "₹100", exam_mode: "Computer-based" },
    { id: 8, exam_name: "CLAT", conducting_body: "Consortium of NLUs", eligibility: "10+2 with 45% marks", subjects_tested: ["English", "Current Affairs", "Legal Reasoning"], difficulty_score: 8.0, selection_rate: 3.0, age_limit: "No upper age limit", official_website: "https://consortiumofnlus.ac.in/", linked_career_paths: ["Lawyer", "Legal Advisor"], exam_type: "Law Entrance", frequency: "Once a year", application_fee: "₹4000", exam_mode: "Pen and paper" },
    { id: 9, exam_name: "NDA", conducting_body: "UPSC", eligibility: "10+2", subjects_tested: ["Mathematics", "General Ability Test"], difficulty_score: 7.2, selection_rate: 0.5, age_limit: "16.5-19.5 years", official_website: "https://www.upsc.gov.in/", linked_career_paths: ["Army Officer", "Navy Officer"], exam_type: "Defense Services", frequency: "Twice a year", application_fee: "₹100", exam_mode: "Pen and paper" },
    { id: 10, exam_name: "ICAI CA Foundation", conducting_body: "ICAI", eligibility: "10+2", subjects_tested: ["Accounting", "Business Laws", "Mathematics"], difficulty_score: 8.3, selection_rate: 25.0, age_limit: "No upper age limit", official_website: "https://www.icai.org/", linked_career_paths: ["Chartered Accountant", "Financial Analyst"], exam_type: "Professional Course", frequency: "Twice a year", application_fee: "₹1500", exam_mode: "Pen and paper" },
    { id: 11, exam_name: "UGC NET", conducting_body: "NTA", eligibility: "Master's degree with 55% marks", subjects_tested: ["Teaching and Research Aptitude", "Subject-specific"], difficulty_score: 7.9, selection_rate: 6.0, age_limit: "No upper age limit for JRF", official_website: "https://ugcnet.nta.nic.in/", linked_career_paths: ["Assistant Professor", "Research Scholar"], exam_type: "Academic", frequency: "Twice a year", application_fee: "₹1100", exam_mode: "Computer-based" },
    { id: 12, exam_name: "RBI Grade B", conducting_body: "RBI", eligibility: "Bachelor's degree with 60% marks", subjects_tested: ["General Awareness", "English", "Quantitative Aptitude", "Reasoning"], difficulty_score: 9.2, selection_rate: 0.3, age_limit: "21-30 years", official_website: "https://www.rbi.org.in/", linked_career_paths: ["RBI Officer", "Bank Manager"], exam_type: "Banking", frequency: "Once a year", application_fee: "₹850", exam_mode: "Computer-based" },
    { id: 13, exam_name: "CMAT", conducting_body: "NTA", eligibility: "Bachelor's degree", subjects_tested: ["Quantitative Techniques", "Logical Reasoning", "Language Comprehension"], difficulty_score: 6.8, selection_rate: 12.0, age_limit: "No upper age limit", official_website: "https://cmat.nta.nic.in/", linked_career_paths: ["MBA Graduate", "Business Analyst"], exam_type: "Management Entrance", frequency: "Once a year", application_fee: "₹2000", exam_mode: "Computer-based" }
];

const mentorResponses = {
    confused: { title: "It's normal to feel confused", message: "Many successful professionals have been where you are. The fact that you are seeking guidance shows self-awareness.", steps: ["List your interests", "Identify skills you enjoy", "Take the Career Match quiz", "Remember: confusion leads to clarity"] },
    stressed: { title: "Career stress is common", message: "The pressure to figure out your life can feel overwhelming. Remember, career decisions are not permanent.", steps: ["Take deep breaths", "Break concerns into items", "Focus on what you can control", "Consider speaking with a mentor"] },
    demotivated: { title: "Everyone feels demotivated sometimes", message: "A demotivated phase does not define your potential. Small wins build momentum.", steps: ["Recall recent achievements", "Revisit past goals", "Take a break if needed", "Reach out to peers"] },
    overwhelmed: { title: "Lets simplify things", message: "Information overload is real. Focus on one clear next step.", steps: ["Write top 3 concerns", "Pick ONE to focus on", "Set a 25-minute timer", "Celebrate completing that task"] },
    anxious: { title: "Anxiety about the future is natural", message: "Every expert was once a beginner. The career landscape rewards consistent action.", steps: ["Name 3 things you are grateful for", "Focus on 3-6 month skills", "Remember failures are learning", "Take one small action today"] },
    confident: { title: "Your confidence is well-placed", message: "This is the perfect time to push forward and accelerate progress.", steps: ["Set quarterly goals", "Seek new responsibilities", "Build your network", "Consider mentoring others"] }
};

const interviewQuestions = {
    "Technology": {
        technical: [
            { question: "Explain arrays vs linked lists", difficulty: "Intermediate", tip: "Focus on memory allocation and access time" },
            { question: "Time complexity of quicksort?", difficulty: "Advanced", tip: "Explain O(n2) worst case and O(n log n) average" },
            { question: "RESTful APIs and constraints", difficulty: "Intermediate", tip: "Mention client-server and statelessness" }
        ],
        hr: [
            { question: "Tell me about a challenging problem you solved", tip: "Use STAR method" },
            { question: "How do you stay updated with tech trends?", tip: "Mention specific resources" }
        ],
        aptitude: [
            { question: "5 developers complete project in 12 days. 8 developers?", tip: "Inverse proportion calculation" }
        ]
    },
    "Finance": {
        technical: [
            { question: "Explain DCF valuation methodology", difficulty: "Advanced", tip: "Cover cash flows and discount rate" },
            { question: "EBITDA vs Net Income difference", difficulty: "Intermediate", tip: "Explain exclusions in EBITDA" },
            { question: "Liquidity ratios analysis", difficulty: "Intermediate", tip: "Discuss current and quick ratios" }
        ],
        hr: [
            { question: "Why finance career?", tip: "Show passion for analysis" },
            { question: "Deadline meeting experience", tip: "Emphasize time management" }
        ],
        aptitude: [
            { question: "Revenue 50 crores, expenses 35 crores. Profit margin?", tip: "Profit = Revenue - Expenses" }
        ]
    },
    "default": {
        technical: [
            { question: "Describe a project from start to finish", difficulty: "Intermediate", tip: "Focus on your contributions" },
            { question: "Tools and technologies proficient in?", difficulty: "Beginner", tip: "Be honest about skills" },
            { question: "Your problem-solving approach", difficulty: "Intermediate", tip: "Describe systematic approach" }
        ],
        hr: [
            { question: "Tell me about yourself", tip: "Keep professional and relevant" },
            { question: "Strengths and weaknesses", tip: "Show self-improvement efforts" }
        ],
        aptitude: [
            { question: "Train travels 300km in 5 hours. Speed?", tip: "Speed = Distance / Time" }
        ]
    }
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    populateRoleDropdowns();
    setupNavigation();
    setupActionCards();
    setupEmotionButtons();
    setupChatInput();
    console.log('BrightLearn AI initialized successfully');
});

// Navigation System
function setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToSection(this.getAttribute('data-section'));
        });
    });

    document.querySelectorAll('.action-card').forEach(card => {
        card.addEventListener('click', function() {
            navigateToSection(this.getAttribute('data-section'));
        });
    });

    const bannerBtn = document.querySelector('.banner-btn');
    if (bannerBtn) {
        bannerBtn.addEventListener('click', function() {
            navigateToSection('mentor');
        });
    }
}

function navigateToSection(sectionId) {
    document.querySelectorAll('.nav-item').forEach(nav => {
        nav.classList.remove('active');
        if (nav.getAttribute('data-section') === sectionId) {
            nav.classList.add('active');
        }
    });

    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Populate Dropdowns
function populateRoleDropdowns() {
    const dropdowns = ['targetRole', 'roadmapRole', 'interviewRole'];

    dropdowns.forEach(dropdownId => {
        const dropdown = document.getElementById(dropdownId);
        if (dropdown) {
            rolesData.forEach(role => {
                const option = document.createElement('option');
                option.value = role.role_name;
                option.textContent = role.role_name;
                dropdown.appendChild(option);
            });
        }
    });
}

// Action Cards Setup
function setupActionCards() {
    document.querySelectorAll('.action-card').forEach(card => {
        card.addEventListener('click', function() {
            navigateToSection(this.getAttribute('data-section'));
        });
    });
}

// Emotion Buttons Setup
function setupEmotionButtons() {
    document.querySelectorAll('.emotion-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const emotion = this.getAttribute('data-emotion');
            document.querySelectorAll('.emotion-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            if (mentorResponses[emotion]) {
                addBotMessage(mentorResponses[emotion].message);
            }
        });
    });
}

// Chat System
function setupChatInput() {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (message) {
        addUserMessage(message);
        input.value = '';
        setTimeout(() => {
            addBotMessage(generateBotResponse(message));
        }, 1000);
    }
}

function addUserMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.innerHTML = '<div class="message-icon" style="background: var(--bg-card)"><i class="fas fa-user"></i></div><div class="message-content"><p>' + message + '</p></div>';
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addBotMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    messageDiv.innerHTML = '<div class="message-icon"><i class="fas fa-robot"></i></div><div class="message-content"><p>' + message + '</p></div>';
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateBotResponse(message) {
    const lower = message.toLowerCase();
    if (lower.includes('confused')) return mentorResponses.confused.message;
    if (lower.includes('stress')) return mentorResponses.stressed.message;
    if (lower.includes('motivation')) return mentorResponses.demotivated.message;
    if (lower.includes('help')) return 'I would be happy to help! What specific career guidance do you need?';
    if (lower.includes('thank')) return 'You are welcome! Keep moving forward - your career journey is unique.';
    return 'Thank you for sharing. Would you like to explore career options or speak about what is on your mind?';
}

// Career Role Matching Engine
function matchCareers() {
    const userSkillsInput = document.getElementById('userSkills').value;
    const preferredSector = document.getElementById('preferredSector').value;
    const qualifiedSelect = document.getElementById('qualified');
    const targetCareerSelect = document.getElementById('targetCareer');
    
    const qualifiedValue = qualifiedSelect ? qualifiedSelect.value : '';
    const targetCareerValue = targetCareerSelect ? targetCareerSelect.value : '';

    // If target career is selected, show job categories
    if (targetCareerValue && jobCategoriesData[targetCareerValue]) {
        displayJobCategoryResults(targetCareerValue);
        return;
    }

    // If qualified is "no" (12th fail), show all job categories instead of regular careers
    if (qualifiedValue === "no") {
        displayAllJobCategories();
        return;
    }

    // If no skills entered, show all job categories
    if (!userSkillsInput.trim()) {
        displayAllJobCategories();
        return;
    }

    const userSkills = userSkillsInput.split(',').map(s => s.trim().toLowerCase()).filter(s => s);

    const matchedRoles = rolesData.map(role => {
        let matchScore = 0;
        let totalWeight = 0;

        role.required_skills.forEach(reqSkill => {
            totalWeight += reqSkill.importance;
            const hasSkill = userSkills.some(us =>
                reqSkill.skill.toLowerCase().includes(us) ||
                us.includes(reqSkill.skill.toLowerCase())
            );
            if (hasSkill) matchScore += reqSkill.importance;
        });

        const matchPercentage = totalWeight > 0 ? Math.round((matchScore / totalWeight) * 100) : 0;

        return {
            ...role,
            matchPercentage,
            matchedSkills: role.required_skills.filter(req =>
                userSkills.some(us =>
                    req.skill.toLowerCase().includes(us) ||
                    us.includes(req.skill.toLowerCase())
                )
            ).map(r => r.skill)
        };
    });

    let filteredRoles = matchedRoles;
    if (preferredSector) {
        filteredRoles = matchedRoles.filter(role =>
            role.category.toLowerCase() === preferredSector.toLowerCase()
        );
    }

    filteredRoles.sort((a, b) => b.matchPercentage - a.matchPercentage);
    displayCareerResults(filteredRoles.slice(0, 5), userSkills);
}

function displayJobCategoryResults(targetCareerKey) {
    const container = document.getElementById('careerResults');
    if (!container) return;

    const category = jobCategoriesData[targetCareerKey];
    if (!category) return;

    let html = '<h2><i class="fas fa-briefcase"></i> ' + category.category_name + '</h2>';
    
    category.jobs.forEach((job, index) => {
        html += '<div class="role-card" style="animation-delay:' + (index * 0.05) + 's">' +
            '<div class="role-card-header">' +
            '<div class="role-card-title"><h3>' + job.name + '</h3></div>' +
            '<div class="match-percentage"><span class="match-label">Available</span></div>' +
            '</div>' +
            '<p class="role-description">Companies: <strong>' + job.companies + '</strong></p>' +
            '</div>';
    });

    container.innerHTML = html;
}

function displayAllJobCategories() {
    const container = document.getElementById('careerResults');
    if (!container) return;

    let html = '<h2><i class="fas fa-briefcase"></i> Available Job Opportunities</h2>';
    
    const categoriesToShow = ['private-sector', 'sales-support', 'skill-based', 'government', 'self-employment'];
    
    categoriesToShow.forEach(catKey => {
        const category = jobCategoriesData[catKey];
        if (!category) return;

        html += '<div style="margin-bottom: 30px;">';
        html += '<h3 style="color: var(--accent-primary); margin-bottom: 15px;"><i class="fas fa-' + getCategoryIcon(catKey) + '"></i> ' + category.category_name + '</h3>';
        
        category.jobs.forEach((job, index) => {
            html += '<div class="role-card" style="margin-bottom: 10px; animation-delay:' + (index * 0.02) + 's">' +
                '<div class="role-card-header">' +
                '<div class="role-card-title"><h4>' + job.name + '</h4></div>' +
                '</div>' +
                '<p class="role-description" style="font-size: 0.9rem;">Companies: <strong>' + job.companies + '</strong></p>' +
                '</div>';
        });
        
        html += '</div>';
    });

    container.innerHTML = html;
}

function getCategoryIcon(categoryKey) {
    const icons = {
        'private-sector': 'truck',
        'sales-support': 'headset',
        'skill-based': 'tools',
        'government': 'landmark',
        'self-employment': 'store'
    };
    return icons[categoryKey] || 'briefcase';
}

function displayCareerResults(matchedRoles, userSkills) {
    const container = document.getElementById('careerResults');

    if (matchedRoles.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-search"></i><h3>No matching careers found</h3><p>Try adding more skills or a different sector.</p></div>';
        return;
    }

    let html = '<h2><i class="fas fa-trophy"></i> Your Top Career Matches</h2>';

    matchedRoles.forEach((role, index) => {
        const demandLevel = role.industry_demand_score >= 8.5 ? 'high' : role.industry_demand_score >= 7.5 ? 'medium' : 'low';

        html += '<div class="role-card" style="animation-delay:' + (index * 0.1) + 's">' +
            '<div class="role-card-header">' +
            '<div class="role-card-title"><h3>' + role.role_name + '</h3><span class="role-badge ' + demandLevel + '">' + role.growth_potential + ' Growth</span></div>' +
            '<div class="match-percentage"><span class="match-number">' + role.matchPercentage + '%</span><span class="match-label">Match</span></div>' +
            '</div>' +
            '<p class="role-description">This role matches your skills because you have: <strong>' + (role.matchedSkills.join(', ') || 'foundational knowledge') + '</strong>.</p>' +
            '<div class="role-details">' +
            '<div class="detail-item"><span class="detail-label">Required Skills</span><span class="detail-value">' + role.required_skills.map(s => s.skill).slice(0, 4).join(', ') + '...</span></div>' +
            '<div class="detail-item"><span class="detail-label">Entry Salary</span><span class="detail-value salary">' + role.salary_range.entry_level + '</span></div>' +
            '<div class="detail-item"><span class="detail-label">Industry Demand</span><span class="detail-value demand">' + role.industry_demand_score + '/10</span></div>' +
            '<div class="detail-item"><span class="detail-label">Education</span><span class="detail-value">' + role.education_required.split(' in ')[0] + '</span></div>' +
            '</div></div>';
    });

    container.innerHTML = html;
}

// Skill Gap & Readiness Engine
function analyzeSkillGap() {
    const targetRoleName = document.getElementById('targetRole').value;
    const currentSkillsInput = document.getElementById('currentSkills').value;

    if (!targetRoleName) {
        alert('Please select a target role.');
        return;
    }

    if (!currentSkillsInput.trim()) {
        alert('Please enter your current skills.');
        return;
    }

    const currentSkills = currentSkillsInput.split(',').map(s => s.trim().toLowerCase()).filter(s => s);
    const role = rolesData.find(r => r.role_name === targetRoleName);
    if (!role) return;

    const skillAnalysis = role.required_skills.map(reqSkill => {
        const hasSkill = currentSkills.some(cs =>
            reqSkill.skill.toLowerCase().includes(cs) ||
            cs.includes(reqSkill.skill.toLowerCase())
        );

        return {
            skill: reqSkill.skill,
            importance: reqSkill.importance,
            acquired: hasSkill,
            priority: reqSkill.importance >= 0.85 ? 'high' : reqSkill.importance >= 0.7 ? 'medium' : 'low'
        };
    });

    const acquiredSkills = skillAnalysis.filter(s => s.acquired);
    const missingSkills = skillAnalysis.filter(s => !s.acquired);
    const readinessPercentage = Math.round((acquiredSkills.length / skillAnalysis.length) * 100);

    displaySkillGapResults(role, skillAnalysis, readinessPercentage, acquiredSkills.length, missingSkills.length);
}

function displaySkillGapResults(role, skillAnalysis, readinessPercentage, acquiredCount, missingCount) {
    const container = document.getElementById('skillGapResults');

    let html = '<div class="skill-gap-card">' +
        '<div class="readiness-header">' +
        '<div class="readiness-score"><div class="score-circle" style="border-top-color:var(--accent-primary)">' + readinessPercentage + '%</div>' +
        '<div><div class="score-label">Job Readiness</div><strong>' + role.role_name + '</strong></div></div>' +
        '<div class="gap-summary">' +
        '<div class="gap-stat"><div class="gap-stat-number" style="color:var(--success)">' + acquiredCount + '</div><div class="gap-stat-label">Skills Acquired</div></div>' +
        '<div class="gap-stat"><div class="gap-stat-number" style="color:var(--danger)">' + missingCount + '</div><div class="gap-stat-label">Skills Missing</div></div>' +
        '</div></div>' +
        '<h3><i class="fas fa-check-circle"></i> Your Acquired Skills</h3><div class="skill-list">';

    skillAnalysis.filter(s => s.acquired).forEach(skill => {
        html += '<div class="skill-item"><div class="skill-item-info"><span class="skill-item-name">' + skill.skill + '</span><span class="skill-priority ' + skill.priority + '">' + skill.priority + '</span></div><span class="skill-status acquired"><i class="fas fa-check"></i> Acquired</span></div>';
    });

    html += '</div><h3 style="margin-top:24px"><i class="fas fa-exclamation-circle"></i> Skills to Develop</h3><div class="skill-list">';

    skillAnalysis.filter(s => !s.acquired).forEach(skill => {
        html += '<div class="skill-item"><div class="skill-item-info"><span class="skill-item-name">' + skill.skill + '</span><span class="skill-priority ' + skill.priority + '">' + skill.priority + '</span></div><span class="skill-status missing"><i class="fas fa-times"></i> Missing</span></div>';
    });

    const highPriorityMissing = skillAnalysis.filter(s => !s.acquired && s.priority === 'high').length;
    const estimatedMonths = highPriorityMissing * 2 + 2;

    html += '</div><div style="margin-top:24px;padding:16px;background:var(--bg-primary);border-radius:var(--radius-md)"><h4><i class="fas fa-clock"></i> Estimated Time to Job-Ready</h4><p>Based on your skill gaps, approximately <strong>' + estimatedMonths + ' months</strong> of focused learning should make you job-ready.</p></div></div>';

    container.innerHTML = html;
}

// Exam Guidance Engine
function filterExams() {
    const educationLevel = document.getElementById('examEducation').value;
    const examType = document.getElementById('examType').value;
    const careerPath = document.getElementById('examCareer').value;

    let filteredExams = examsData;

    if (educationLevel) {
        filteredExams = filteredExams.filter(exam => {
            if (educationLevel === "Class 12") return exam.eligibility.includes("10+2");
            if (educationLevel === "Bachelor's") return exam.eligibility.includes("Bachelor") || exam.eligibility.includes("10+2");
            if (educationLevel === "Master's") return exam.eligibility.includes("Master");
            return true;
        });
    }

    if (examType) {
        filteredExams = filteredExams.filter(exam => exam.exam_type === examType);
    }

    if (careerPath) {
        filteredExams = filteredExams.filter(exam =>
            exam.linked_career_paths.some(cp => cp.toLowerCase().includes(careerPath.toLowerCase()))
        );
    }

    displayExamResults(filteredExams);
}

function displayExamResults(exams) {
    const container = document.getElementById('examResults');

    if (exams.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-search"></i><h3>No exams found</h3><p>Try adjusting your filters.</p></div>';
        return;
    }

    let html = '<h2><i class="fas fa-clipboard-list"></i> Matching Exams</h2>';

    exams.forEach(exam => {
        const difficultyLevel = exam.difficulty_score >= 9 ? 'Hard' : exam.difficulty_score >= 7.5 ? 'Moderate' : 'Easy';

        html += '<div class="exam-card">' +
            '<div class="exam-header">' +
            '<div class="exam-title"><h3>' + exam.exam_name + '</h3><span class="exam-type-badge">' + exam.exam_type + '</span></div>' +
            '<span class="role-badge ' + (difficultyLevel === 'Hard' ? 'low' : difficultyLevel === 'Moderate' ? 'medium' : 'high') + '">' + difficultyLevel + '</span>' +
            '</div>' +
            '<div class="exam-body">' +
            '<div class="exam-detail"><span class="exam-detail-label">Conducting Body</span><span class="exam-detail-value">' + exam.conducting_body + '</span></div>' +
            '<div class="exam-detail"><span class="exam-detail-label">Eligibility</span><span class="exam-detail-value">' + exam.eligibility.split(',')[0] + '</span></div>' +
            '<div class="exam-detail"><span class="exam-detail-label">Difficulty</span><span class="exam-detail-value">' + exam.difficulty_score + '/10</span></div>' +
            '<div class="exam-detail"><span class="exam-detail-label">Selection Rate</span><span class="exam-detail-value">' + exam.selection_rate + '%</span></div>' +
            '</div>' +
            '<div class="exam-links"><a href="' + exam.official_website + '" target="_blank" class="exam-link"><i class="fas fa-globe"></i> Official Website</a></div>' +
            '</div>';
    });

    container.innerHTML = html;
}

// Learning Roadmap Generator
function generateRoadmap() {
    const roleName = document.getElementById('roadmapRole').value;
    const currentLevel = document.getElementById('currentLevel').value;

    if (!roleName) {
        alert('Please select a role.');
        return;
    }

    const role = rolesData.find(r => r.role_name === roleName);
    if (!role) return;

    const roleSkills = role.required_skills.map(s => s.skill);
    const relevantCourses = coursesData.filter(c =>
        roleSkills.some(rs =>
            c.skill.toLowerCase().includes(rs.toLowerCase()) ||
            rs.toLowerCase().includes(c.skill.toLowerCase())
        )
    );

    const highPriority = relevantCourses.filter(c => c.priority_level === 'High').slice(0, 3);
    const mediumPriority = relevantCourses.filter(c => c.priority_level === 'Medium').slice(0, 3);

    displayRoadmap(role, highPriority, mediumPriority);
}

function displayRoadmap(role, highPriority, mediumPriority) {
    const container = document.getElementById('roadmapResults');

    let html = '<div class="roadmap-container">' +
        '<div class="roadmap-stage">' +
        '<div class="stage-header"><div class="stage-number">1</div>' +
        '<div><div class="stage-title">Foundation Stage</div><div class="stage-subtitle">Build core skills in 1-2 months</div></div></div>' +
        '<div class="course-list">';

    highPriority.forEach(course => {
        html += '<div class="course-card"><div class="course-icon"><i class="fas fa-book"></i></div>' +
            '<div class="course-info"><div class="course-name">' + course.course_name + '</div>' +
            '<div class="course-meta"><span><i class="fas fa-play-circle"></i> ' + course.platform + '</span>' +
            '<span><i class="fas fa-clock"></i> ' + course.estimated_duration + '</span></div></div>' +
            '<span class="course-priority" style="background:rgba(239,68,68,0.2);color:var(--danger)">High</span></div>';
    });

    html += '</div></div>' +
        '<div class="roadmap-stage">' +
        '<div class="stage-header"><div class="stage-number">2</div>' +
        '<div><div class="stage-title">Intermediate Stage</div><div class="stage-subtitle">Deepen knowledge in 2-3 months</div></div></div>' +
        '<div class="course-list">';

    mediumPriority.forEach(course => {
        html += '<div class="course-card"><div class="course-icon"><i class="fas fa-book"></i></div>' +
            '<div class="course-info"><div class="course-name">' + course.course_name + '</div>' +
            '<div class="course-meta"><span><i class="fas fa-play-circle"></i> ' + course.platform + '</span>' +
            '<span><i class="fas fa-clock"></i> ' + course.estimated_duration + '</span></div></div>' +
            '<span class="course-priority" style="background:rgba(245,158,11,0.2);color:var(--warning)">Medium</span></div>';
    });

    html += '</div></div>' +
        '<div class="roadmap-stage">' +
        '<div class="stage-header"><div class="stage-number">3</div>' +
        '<div><div class="stage-title">Advanced Stage</div><div class="stage-subtitle">Master and specialize in 1-2 months</div></div></div>' +
        '<div class="course-list">' +
        '<div class="course-card"><div class="course-icon"><i class="fas fa-briefcase"></i></div>' +
        '<div class="course-info"><div class="course-name">Build Real-World Projects</div>' +
        '<div class="course-meta"><span><i class="fas fa-code"></i> Portfolio</span>' +
        '<span><i class="fas fa-clock"></i> Ongoing</span></div></div>' +
        '<span class="course-priority" style="background:rgba(16,185,129,0.2);color:var(--success)">Advanced</span></div>' +
        '</div></div></div>';

    container.innerHTML = html;
}

// Interview Preparation
function prepareInterview() {
    const roleName = document.getElementById('interviewRole').value;
    const experienceLevel = document.getElementById('experienceLevel').value;

    if (!roleName) {
        alert('Please select a role.');
        return;
    }

    const role = rolesData.find(r => r.role_name === roleName);
    const category = role ? role.category : 'default';
    const questions = interviewQuestions[category] || interviewQuestions['default'];

    displayInterviewQuestions(roleName, questions);
}

function displayInterviewQuestions(roleName, questions) {
    const container = document.getElementById('interviewResults');

    let html = '<div class="interview-section"><h3><i class="fas fa-laptop-code"></i> Technical Questions (' + questions.technical.length + ')</h3>';

    questions.technical.forEach((q, i) => {
        html += '<div class="question-card"><span class="question-label">Q' + (i + 1) + ' ' + (q.difficulty || '') + '</span>' +
            '<div class="question-text">' + q.question + '</div>' +
            '<div class="question-tip"><i class="fas fa-lightbulb"></i> ' + q.tip + '</div></div>';
    });

    html += '</div><div class="interview-section"><h3><i class="fas fa-users"></i> HR Questions (' + questions.hr.length + ')</h3>';

    questions.hr.forEach((q, i) => {
        html += '<div class="question-card"><span class="question-label">HR Q' + (i + 1) + '</span>' +
            '<div class="question-text">' + q.question + '</div>' +
            '<div class="question-tip"><i class="fas fa-lightbulb"></i> ' + q.tip + '</div></div>';
    });

    html += '</div><div class="interview-section"><h3><i class="fas fa-calculator"></i> Aptitude Question</h3>';

    questions.aptitude.forEach(q => {
        html += '<div class="question-card"><span class="question-label">Aptitude</span>' +
            '<div class="question-text">' + q.question + '</div>' +
            '<div class="question-tip"><i class="fas fa-lightbulb"></i> ' + q.tip + '</div></div>';
    });

    html += '</div>';

    container.innerHTML = html;
}
