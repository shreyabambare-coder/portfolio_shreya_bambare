import type { Project, Achievement, ExperienceItem, Certification, JourneyMilestone, SkillCategory } from '../types';

export const personalInfo = {
  name: "Shreya Hanmant Bambare",
  shortName: "Shreya Bambare",
  headline: "Building technology. Solving problems. Creating impact.",
  role: "Computer Engineering Undergraduate & Software Developer",
  university: "D. Y. Patil Education Society (Deemed to be University)",
  college: "School of Engineering and Management",
  graduationYear: "2029",
  sgpa: "8.78 / 10 (First Semester)",
  email: "workwithshreya007@gmail.com",
  github: "https://github.com/shreyabambare-coder",
  linkedin: "https://www.linkedin.com/in/shreya-bambare-44338830a/",
  heroIntro: "I'm a Computer Engineering student passionate about software development, artificial intelligence, cybersecurity, and building technology that solves real-world problems. From developing AI-powered detection systems and digital forensics platforms to creating accessible healthcare and e-commerce applications, I enjoy transforming ideas into functional solutions.",
  aboutIntro: "I'm Shreya Hanmant Bambare, a Computer Engineering undergraduate with a strong interest in software engineering, artificial intelligence, cybersecurity, and innovative product development.\n\nI enjoy exploring different domains of technology, understanding real-world problems, and building practical solutions through programming and collaborative development.\n\nMy journey includes developing web applications, contributing to AI-powered systems, exploring digital forensics, participating in hackathons, and working on projects with social impact.\n\nI believe in continuous learning, experimentation, and turning ideas into meaningful technology."
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: "Code",
    description: "Core languages used for algorithmic problem solving, backend logic, and engineering systems.",
    skills: [
      { name: "Python", note: "Scripting, Automation, AI pipelines & OpenCV" },
      { name: "C", note: "Low-level system concepts, memory management & DSA" },
      { name: "JavaScript", note: "Modern ES6+, interactive web applications & DOM" }
    ]
  },
  {
    name: "Web & Mobile Development",
    icon: "Layout",
    description: "Modern frontend and responsive interface technologies.",
    skills: [
      { name: "HTML5", note: "Semantic structure & accessibility" },
      { name: "CSS3 / Modern CSS", note: "Responsive design, Flexbox, Grid & animations" },
      { name: "JavaScript (ES6+)", note: "Asynchronous programming & modern tooling" },
      { name: "Responsive Web Design", note: "Cross-device fluid layouts" },
      { name: "React", note: "Component architectures & reactive state" },
      { name: "Vite", note: "Fast build tooling and modern frontend bundling" },
      { name: "Flutter", note: "Cross-platform mobile UI development exposure" },
      { name: "FastAPI", note: "High-performance Python API integration" },
      { name: "MySQL", note: "Relational database modeling and queries" }
    ]
  },
  {
    name: "Computer Science Fundamentals",
    icon: "Brain",
    description: "Foundational pillars of software engineering and computational thinking.",
    skills: [
      { name: "Data Structures & Algorithms", note: "Linear and non-linear data structures, searching & sorting" },
      { name: "Object-Oriented Programming", note: "Encapsulation, inheritance, polymorphism & abstraction" },
      { name: "Low-Level Design", note: "Modular component planning, class relationships & architecture" },
      { name: "Computational Thinking", note: "Problem decomposition, pattern recognition & algorithm design" }
    ]
  },
  {
    name: "Developer Tools & Environments",
    icon: "Terminal",
    description: "Industry-standard version control and development environments.",
    skills: [
      { name: "Git", note: "Version control, branching & history tracking" },
      { name: "GitHub", note: "Collaboration, open-source repositories & workflow management" },
      { name: "VS Code", note: "Primary IDE with custom debugging extensions" },
      { name: "Android Studio", note: "Android SDK configuration & virtual device testing" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "marineguard-mcp",
    title: "MarineGuard MCP",
    category: "Artificial Intelligence | Computer Vision | Marine Technology",
    badge: "AI & Computer Vision",
    tagline: "AI-Powered Marine Debris & Sonar Object Detection Platform",
    description: "MarineGuard is an AI-powered marine debris detection platform designed to process underwater data and identify marine debris using computer vision and sonar-based detection techniques.",
    problem: "Marine pollution severely threatens aquatic biodiversity, yet detecting and cataloging submerged debris remains manual, hazardous, and difficult due to low-visibility underwater environments and acoustic noise in sonar datasets.",
    solution: "Engineered a computer-vision pipeline that digests underwater imagery and side-scan sonar data, applying specialized YOLOv8 object detection with confidence thresholding, classification filtering, and structured forensic reporting.",
    keyFeatures: [
      "Underwater dataset ingestion and preprocessing",
      "Side-scan sonar image analysis and noise filtering",
      "YOLOv8-based real-time object detection",
      "Marine debris classification (plastics, nets, metals, hazards)",
      "Dynamic confidence filtering and false-positive suppression",
      "Structured detection results and evidence processing",
      "Comprehensive inspection reporting and CSV/JSON data export"
    ],
    technologies: ["Python", "YOLOv8", "Computer Vision", "OpenCV", "Side-Scan Sonar", "NumPy", "Deep Learning"],
    contribution: "Collaborative technical project contributing to dataset preprocessing, detection pipeline evaluation, and structured results export.",
    recognition: "Selected through college internal Smart India Hackathon (SIH) selection process.",
    highlights: ["Internal SIH Selection", "Sonar & Underwater ML", "YOLOv8 & Sonar Detection"],
    accentColor: "from-cyan-500/20 to-blue-600/20"
  },
  {
    id: "wasp",
    title: "WASP",
    category: "Cybersecurity | Digital Forensics | Digital Investigation",
    badge: "Cybersecurity & Forensics",
    tagline: "Digital Forensics & Incident Response Platform",
    description: "WASP is a digital forensics and incident response platform designed to assist in analyzing digital evidence through automated artifact extraction, forensic timeline generation, anomaly detection, and investigation reporting.",
    problem: "Incident responders and forensic investigators face vast volumes of unstructured disk artifacts, event logs, and file system journals, making manual timeline reconstruction slow and prone to overlooking subtle attacker activity.",
    solution: "Built an automated forensic engine that parses NTFS metadata, file journal updates, and Windows Event logs into a unified, chronological super-timeline with process lineage tracking and Sigma-based rule detection.",
    keyFeatures: [
      "NTFS Master File Table (MFT) record extraction & parsing",
      "Update Sequence Number (USN) Journal chronological analysis",
      "Windows Event Log (EVTX) ingestion and correlation",
      "Universal timestamp normalization across disparate time zones",
      "Forensic super-timeline generation for post-incident reconstruction",
      "Process lineage reconstruction (Parent-Child process tree mapping)",
      "Sigma-based threat detection for malicious activity identification",
      "Evidence integrity verification with cryptographic hashing",
      "Automated investigator report generation"
    ],
    technologies: ["Python", "Digital Forensics", "NTFS MFT Analysis", "Windows Event Logs", "USN Journal", "Sigma Rules", "DFIR"],
    recognition: "Secured Second Position at Walchand College of Engineering Hackathon (2026).",
    githubUrl: "https://github.com/shreyabambare-coder/WASP",
    highlights: ["2nd Position @ Walchand 2026", "NTFS MFT & USN Journal Engine", "Sigma Threat Detection"],
    accentColor: "from-purple-500/20 to-indigo-600/20"
  },
  {
    id: "urjaa",
    title: "URJAA",
    category: "Clean Tech | Smart Energy Management | IoT & Sustainability",
    badge: "IIT Guwahati Shortlisted",
    tagline: "Smart Energy Management & Clean Tech Sustainability Platform",
    description: "URJAA is a clean technology and smart energy management platform engineered to optimize power consumption, monitor electrical distribution, and provide data-driven insights for sustainable power conservation.",
    problem: "Conventional electrical infrastructure lacks real-time telemetry, automated peak-load analysis, and proactive anomaly detection, causing substantial energy wastage and hindered sustainability efforts.",
    solution: "Engineered an intelligent energy optimization and monitoring system combining smart energy tracking, load analytics, and automated reporting to reduce wastage and empower sustainable consumption.",
    keyFeatures: [
      "Real-time power consumption tracking and telemetry logging",
      "Predictive load analytics and peak-demand usage forecasting",
      "Energy conservation insights and anomaly detection for leakage",
      "Intuitive dashboard visualizing electrical metrics and sustainability scoring",
      "Scalable telemetry processing designed for IoT and smart grid integration",
      "Automated energy audit summaries and reporting"
    ],
    technologies: ["Python", "Data Analytics", "IoT Architecture", "Web Dashboard", "REST APIs", "Clean Tech"],
    contribution: "Engineered core modules for energy telemetry modeling, data analytics workflows, and system architecture.",
    recognition: "Shortlisted at the prestigious IIT Guwahati Hackathon (2026).",
    githubUrl: "https://github.com/shreeya239/URJAA",
    highlights: ["IIT Guwahati Shortlisted (2026)", "Smart Energy Management", "Clean Tech Innovation"],
    accentColor: "from-amber-500/20 to-emerald-600/20"
  },
  {
    id: "gentelwell",
    title: "Gentelwell",
    category: "Healthcare Technology | Social Impact | Web Development",
    badge: "Healthcare & Social Impact",
    tagline: "Accessible Women's Healthcare Awareness & Consultation Ecosystem",
    description: "Gentelwell is a digital healthcare initiative focused on improving women's healthcare awareness and accessibility, particularly in rural and underserved communities.",
    problem: "Societal hesitation, geographical isolation, and information barriers frequently delay medical consultation and health awareness for women in underserved and rural areas.",
    solution: "Created an empathetic, barrier-free digital platform that unites educational health awareness, preliminary guidance tools, telemedicine booking, and access to affordable government-subsidized medications.",
    keyFeatures: [
      "Multilingual women's health awareness and preventative education",
      "Interactive symptom assessment and preliminary guidance (preliminary guidance, not medical diagnosis)",
      "Doctor appointment scheduling and calendar management",
      "Secure online video consultations for remote medical access",
      "Safe, moderated community interaction space",
      "Affordable medicine discovery integrated with Jan Aushadhi schemes",
      "One-tap emergency ambulance assistance hotline",
      "Direct directory of verified healthcare professionals and specialists"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Telemedicine", "Jan Aushadhi Integration", "Web APIs"],
    githubUrl: "https://github.com/shreyabambare-coder/Gentelwell",
    highlights: ["Social Impact Initiative", "Preliminary Guidance Engine", "Jan Aushadhi Medicine Discovery"],
    accentColor: "from-rose-500/20 to-violet-600/20"
  },
  {
    id: "phyto",
    title: "Phyto",
    category: "Full-Stack Development | E-Commerce | AI",
    badge: "Full-Stack & E-Commerce",
    tagline: "Botanical Commerce Ecosystem & AI-Powered Plant Care",
    description: "Phyto is a botanical e-commerce ecosystem designed to connect local nurseries and verified growers with urban and semi-urban customers.",
    problem: "Local botanical nurseries struggle with digital visibility and logistics, while plant enthusiasts often lack personalized recommendations suited to their micro-climate, sunlight, and living spaces.",
    solution: "Constructed an omnichannel botanical commerce platform pairing an intuitive React/Vite web storefront and Flutter mobile client with a high-speed FastAPI backend and AI-driven plant recommendation engine.",
    keyFeatures: [
      "Curated plant and botanical supply marketplace",
      "AI-powered plant recommendations based on environment & light levels",
      "Responsive React + Vite modern web application",
      "Cross-platform Flutter mobile application",
      "Nursery and local grower inventory integration",
      "Localized hyper-local delivery management system",
      "On-demand gardening services and plant maintenance scheduling"
    ],
    technologies: ["React", "Vite", "Flutter", "FastAPI", "MySQL", "Python", "Tailwind CSS"],
    githubUrl: "https://github.com/shreyabambare-coder/Phyto-",
    liveUrl: "https://phyto-seven.vercel.app/",
    highlights: ["Live Production Web App", "Omnichannel (React + Flutter)", "FastAPI & MySQL Backend"],
    accentColor: "from-emerald-500/20 to-teal-600/20"
  },
  {
    id: "shopora",
    title: "Shopora",
    category: "E-Commerce | Web Development | Academic Project",
    badge: "Award-Winning Capstone",
    tagline: "Second-Semester Capstone Modern E-Commerce Platform",
    description: "Shopora is an e-commerce website developed as part of the second-semester capstone project, demonstrating practical implementation of modern web UI design, product cataloging, and collaborative development.",
    problem: "Bridging the gap between conceptual web design and building a frictionless, responsive e-commerce experience with structured catalogs and intuitive shopping cart flows.",
    solution: "Designed and implemented a fluid web store emphasizing crisp visual hierarchy, modular UI components, product filtering, responsive cart flows, and collaborative team version control.",
    keyFeatures: [
      "Responsive storefront interface optimized across mobile and desktop",
      "Interactive product catalog with categorization and filtering",
      "Real-time cart management and summary calculation",
      "Modular frontend architecture following design best practices",
      "Rigorous collaborative Git versioning and peer reviews"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git Collaboration"],
    recognition: "Secured Second Position in the Second Semester Capstone Project.",
    highlights: ["2nd Position Award", "Semester Capstone Project", "Collaborative Engineering"],
    accentColor: "from-amber-500/20 to-orange-600/20"
  },
  {
    id: "amhi-kolhapuri",
    title: "Amhi Kolhapuri",
    category: "Tourism | Web Development",
    badge: "Web Development & Community",
    tagline: "Comprehensive Local Tourism & Student Accommodation Guide",
    description: "Amhi Kolhapuri is a tourism-oriented website designed to help tourists, newcomers, and students explore Kolhapur through organized information about local attractions, heritage, and facilities.",
    problem: "Visitors and incoming university students in Kolhapur often struggle to find consolidated, reliable information about historical sites, local dining, and affordable student accommodation.",
    solution: "Developed an informative, accessible web directory categorizing Kolhapur's iconic landmarks, historic forts, culinary spots, hotels, hostels, and paying-guest (PG) facilities.",
    keyFeatures: [
      "Curated tourist attractions and cultural landmark directories",
      "Heritage forts and scenic lake exploration guides",
      "Verified listings for restaurants and authentic Kolhapuri cuisine",
      "Accommodations directory including hotels, hostels, and PG options for students",
      "Interactive navigational links and clean categorization"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Web Design"],
    highlights: ["Community & Student Resource", "Heritage & Tourism Guide", "Responsive Layout"],
    accentColor: "from-sky-500/20 to-indigo-600/20"
  },
  {
    id: "ai-career-coach",
    title: "AI Career Coach",
    category: "Artificial Intelligence | Career Technology",
    badge: "Ideathon 2026 Participant",
    tagline: "AI-Powered Semantic Resume & Career Pathway Optimization Platform",
    description: "AI Career Coach is an AI-powered career-guidance platform designed to help students understand their career opportunities through semantic resume analysis, ATS optimization, skill-gap analysis, and personalized career recommendations.",
    problem: "Early-career students often submit generic resumes that fail automated Applicant Tracking Systems (ATS) and lack actionable insights into which specific technical skills they must acquire.",
    solution: "Conceptualized and prototyped an intelligent system utilizing semantic text extraction and job-market alignment to calculate ATS compatibility scores, highlight missing competencies, and chart actionable career roadmaps.",
    keyFeatures: [
      "Semantic resume text parsing and keyword extraction",
      "Automated Applicant Tracking System (ATS) optimization recommendations",
      "Skill-gap identification cross-referenced with modern job descriptions",
      "Personalized career pathway and role recommendations",
      "Student-employer opportunity alignment and readiness scoring"
    ],
    technologies: ["Python", "Natural Language Processing", "Semantic Analysis", "AI/ML", "Web Interface"],
    recognition: "Participated in Ideathon 2026 – Team The Analyzers.",
    highlights: ["Ideathon 2026 Participant", "Semantic Resume Parser", "ATS Optimization Engine"],
    accentColor: "from-fuchsia-500/20 to-purple-600/20"
  }
];

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    number: "01",
    title: "Second Position – Cybersecurity Project",
    subtitle: "Project: WASP – Walchand College of Engineering (2026)",
    organization: "Walchand College of Engineering",
    project: "WASP",
    details: "Secured Second Position at the Walchand College of Engineering 2026 Hackathon (Electrical Department) for presenting WASP, an innovative cybersecurity, DFIR, and digital investigation system.",
    category: "cybersecurity",
    badgeText: "2nd Position Award",
    accent: "text-cyan-400 border-cyan-500/30 bg-cyan-950/20"
  },
  {
    id: "ach-2",
    number: "02",
    title: "IIT Guwahati Hackathon – Shortlisted",
    subtitle: "Project: URJAA (2026)",
    organization: "IIT Guwahati",
    project: "URJAA",
    details: "Shortlisted at the prestigious IIT Guwahati Hackathon in 2026 for developing URJAA, an innovative smart energy management and sustainable clean-tech platform.",
    category: "hackathon",
    badgeText: "IIT Guwahati Shortlisted",
    accent: "text-amber-400 border-amber-500/30 bg-amber-950/20"
  },
  {
    id: "ach-3",
    number: "03",
    title: "Smart India Hackathon (SIH) – Internal Selection",
    subtitle: "Project: MarineGuard MCP",
    organization: "Internal College SIH Committee",
    project: "MarineGuard MCP",
    details: "Selected through the rigorous internal college selection process for Smart India Hackathon for the AI-powered marine debris detection solution.",
    category: "hackathon",
    badgeText: "Internal Selection",
    accent: "text-blue-400 border-blue-500/30 bg-blue-950/20"
  },
  {
    id: "ach-4",
    number: "04",
    title: "She Builds Hackathon – Top 20 Ranking",
    subtitle: "Ranked 19th among Top 40 Teams",
    organization: "Hacktober Hackdays, Noida",
    details: "Ranked 19th out of 40 selected teams nationally in the She Builds Hackathon, developing collaborative technology under competitive time constraints.",
    category: "hackathon",
    badgeText: "Ranked 19th / 40",
    accent: "text-violet-400 border-violet-500/30 bg-violet-950/20"
  },
  {
    id: "ach-5",
    number: "05",
    title: "Second Position – Second Semester Capstone",
    subtitle: "Project: Shopora E-Commerce",
    organization: "Department of Computer Engineering",
    project: "Shopora",
    details: "Awarded Second Position for outstanding user interface design, front-end architecture, and collaborative implementation of the Shopora capstone.",
    category: "academic",
    badgeText: "2nd Position Capstone",
    accent: "text-amber-400 border-amber-500/30 bg-amber-950/20"
  },
  {
    id: "ach-6",
    number: "06",
    title: "Second Prize – First-Year Project Exhibition",
    subtitle: "Department of First Year Engineering",
    organization: "School of Engineering and Management",
    details: "Awarded Second Prize for demonstrating a high-impact Python-based engineering solution solving computational challenges.",
    category: "innovation",
    badgeText: "2nd Prize Winner",
    accent: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20"
  },
  {
    id: "ach-7",
    number: "07",
    title: "Ideathon 2026 Participation",
    subtitle: "Project: AI Career Coach (Team The Analyzers)",
    organization: "Ideathon 2026 Committee",
    project: "AI Career Coach",
    details: "Participated in Ideathon 2026 with Team The Analyzers, presenting AI Career Coach for automated ATS resume optimization and semantic skill gap analysis.",
    category: "innovation",
    badgeText: "Participation",
    accent: "text-fuchsia-400 border-fuchsia-500/30 bg-fuchsia-950/20"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Android Developer Virtual Intern",
    organization: "Google for Developers | AICTE – EduSkills",
    sponsor: "Google for Developers & EduSkills Foundation",
    duration: "October 2025 – December 2025",
    grade: "Outstanding (Grade O)",
    description: [
      "Completed a rigorous 10-week Android Development virtual internship curriculum supported by Google for Developers and AICTE.",
      "Developed foundational knowledge of Android application architecture, Activity lifecycles, and modern mobile app design principles.",
      "Implemented mobile application components, handling UI layouts, background processing, and event-driven architectures.",
      "Strengthened practical software development, debugging, and testing practices in Android Studio.",
      "Earned Outstanding (Grade O) performance recognition for project execution and assessment excellence."
    ],
    skillsGained: [
      "Android Architecture",
      "Mobile App Lifecycle",
      "Android Studio",
      "Debugging & Profiling",
      "UI/UX Implementation"
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-nptel",
    title: "The Joy of Computing using Python",
    issuer: "NPTEL – IIT Madras",
    credentialBadge: "Elite Certification (12-Week Course)",
    details: "Comprehensive 12-week computer science and Python programming course covering data structures, algorithmic paradigms, recursion, and computational problem solving.",
    duration: "12 Weeks",
    category: "Programming & Algorithms",
    skills: ["Python", "Algorithms", "Data Manipulation", "Computational Logic"],
    verificationAvailable: true,
    linkText: "NPTEL / IIT Madras Certified"
  },
  {
    id: "cert-google",
    title: "Android Developer Virtual Internship",
    issuer: "Google for Developers | AICTE EduSkills",
    credentialBadge: "Outstanding Grade 'O' Performance",
    details: "10-week structured virtual internship program focused on modern Android application development, component architectures, and best practices.",
    duration: "10 Weeks (Oct – Dec 2025)",
    category: "Mobile Engineering",
    skills: ["Android Architecture", "Mobile Development", "Debugging"],
    verificationAvailable: true,
    linkText: "AICTE EduSkills Verified"
  },
  {
    id: "cert-scaler",
    title: "Low-Level Design of Payment Apps Masterclass",
    issuer: "Scaler",
    credentialBadge: "Masterclass Certification",
    details: "Intensive architectural deep-dive into object-oriented design principles, design patterns, transaction consistency, and low-level system design for fintech applications.",
    category: "Software Architecture",
    skills: ["Low-Level Design", "Design Patterns", "OOP", "System Architecture"],
    verificationAvailable: true,
    linkText: "Scaler Masterclass"
  },
  {
    id: "cert-abyss",
    title: "Two-Day AR/VR Workshop",
    issuer: "ABYSS",
    credentialBadge: "Workshop Certification",
    details: "Hands-on exploration of augmented and virtual reality technologies, immersive spatial computing concepts, and interactive 3D environments.",
    category: "Emerging Tech",
    skills: ["Augmented Reality", "Virtual Reality", "Spatial Computing", "3D Environments"],
    verificationAvailable: true,
    linkText: "ABYSS Verified"
  },
  {
    id: "cert-naukri",
    title: "CodeQuezt #29 National Coding Challenge",
    issuer: "Naukri Campus",
    credentialBadge: "National Coding Challenge",
    details: "Competitive nationwide programming challenge evaluating data structures, algorithmic efficiency, time complexity, and logical problem-solving.",
    category: "Competitive Programming",
    skills: ["Competitive Programming", "DSA", "Problem Solving", "Algorithm Design"],
    verificationAvailable: true,
    linkText: "Naukri Campus Verified"
  }
];

export const educationData = {
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Engineering",
  institution: "D. Y. Patil Education Society (Deemed to be University)",
  campus: "School of Engineering and Management",
  graduationYear: "Expected Graduation: 2029",
  sgpa: "First Semester SGPA: 8.78 / 10",
  coursework: [
    "Programming in C",
    "Python Programming",
    "Data Structures & Algorithms",
    "Web Development",
    "Linear Algebra",
    "Calculus"
  ],
  academicHighlights: [
    "Consistently demonstrated strong academic aptitude with an 8.78 SGPA in the first semester.",
    "Actively involved in technical clubs, hackathon representation, and engineering project exhibitions.",
    "Balancing rigorous theoretical coursework with hands-on system building and open-source development."
  ]
};

export const journeyMilestones: JourneyMilestone[] = [
  {
    period: "Early 2025",
    title: "Commenced B.Tech in Computer Engineering",
    category: "Academic Foundation",
    description: "Began undergraduate engineering studies at D. Y. Patil Education Society, School of Engineering and Management. Focused on core programming fundamentals in C and Python.",
    tag: "Milestone",
    iconType: "GraduationCap"
  },
  {
    period: "Semester 1",
    title: "Academic Excellence & 1st Year Project Prize",
    category: "Academic & Project Exhibition",
    description: "Achieved an 8.78/10 SGPA. Awarded Second Prize at the Department of First Year Engineering Project Exhibition for a Python-based engineering solution.",
    tag: "Award",
    iconType: "Award"
  },
  {
    period: "2025",
    title: "Developed 'Amhi Kolhapuri' Tourism Platform",
    category: "Web Development",
    description: "Engineered a comprehensive web guide for Kolhapur tourists and incoming students, cataloging attractions, accommodations, and culinary landmarks.",
    tag: "Project",
    iconType: "Globe"
  },
  {
    period: "Fall 2025",
    title: "Google for Developers Android Virtual Internship",
    category: "Professional Development",
    description: "Completed the 10-week Android Development virtual internship (AICTE - EduSkills), mastering mobile application lifecycle concepts and earning Grade 'O' (Outstanding).",
    tag: "Internship",
    iconType: "Smartphone"
  },
  {
    period: "Semester 2",
    title: "Shopora Capstone – 2nd Position",
    category: "Capstone Project",
    description: "Led front-end implementation and team collaboration for the Shopora e-commerce project, securing Second Position in the second-semester capstone evaluation.",
    tag: "Award",
    iconType: "ShoppingBag"
  },
  {
    period: "2026",
    title: "MarineGuard MCP – Internal SIH Selection",
    category: "AI & Hackathons",
    description: "Selected through college internal Smart India Hackathon (SIH) selection process for the AI-powered marine debris and sonar detection system.",
    tag: "Hackathon",
    iconType: "Cpu"
  },
  {
    period: "2026",
    title: "She Builds Hackathon – Top 20 Nationally",
    category: "National Competition",
    description: "Competed at Hacktober Hackdays in Noida during the She Builds Hackathon, ranking 19th among the Top 40 selected teams.",
    tag: "Competition",
    iconType: "Trophy"
  },
  {
    period: "2026",
    title: "WASP – 2nd Position at Walchand Hackathon",
    category: "Cybersecurity Hackathon",
    description: "Secured Second Position in the Cybersecurity category at the Walchand College of Engineering 2026 Hackathon (Electrical Department) for developing and presenting WASP, an automated DFIR platform.",
    tag: "2nd Position Award",
    iconType: "ShieldCheck"
  },
  {
    period: "2026",
    title: "IIT Guwahati Hackathon – Shortlisted (URJAA)",
    category: "Premier Hackathon",
    description: "Shortlisted at the prestigious IIT Guwahati Hackathon in 2026 for URJAA, presenting a smart energy management and sustainable clean-tech innovation platform.",
    tag: "Shortlisted",
    iconType: "Zap"
  },
  {
    period: "2026",
    title: "Ideathon 2026 Participation – AI Career Coach",
    category: "Innovation Challenge",
    description: "Participated in Ideathon 2026 with Team The Analyzers, designing and presenting AI Career Coach for automated ATS resume optimization and semantic skill gap analysis.",
    tag: "Participation",
    iconType: "Sparkles"
  }
];

export const beyondCodeInterests = [
  {
    title: "Exploring Emerging Technologies",
    description: "Constantly researching advancements in generative AI, computer vision models, and decentralization architectures to understand how modern paradigms can solve everyday bottlenecks.",
    icon: "Compass"
  },
  {
    title: "Algorithmic Problem-Solving",
    description: "Deepening computational thinking and data structure optimization through continuous practice, coding challenges, and system architecture breakdowns.",
    icon: "Puzzle"
  },
  {
    title: "Research & Experimentation",
    description: "Testing early-stage prototypes, exploring forensic log parsing tools, and experimenting with novel libraries before committing to architectural decisions.",
    icon: "Microscope"
  },
  {
    title: "Collaborative Project Development",
    description: "Thriving in hackathon and cross-disciplinary teams, valuing clean Git workflows, communicative design reviews, and shared ownership of software quality.",
    icon: "Users"
  },
  {
    title: "Social Impact Technology",
    description: "Driven by the belief that software should empower underserved communities and drive sustainability — reflected in projects like Gentelwell for women's healthcare accessibility, URJAA for clean energy efficiency, and MarineGuard for ocean preservation.",
    icon: "HeartHandshake"
  },
  {
    title: "Continuous Learning & Craftsmanship",
    description: "Dedicated to writing clean, maintainable code, mastering modern design patterns, and understanding low-level mechanics under the hood.",
    icon: "Sparkles"
  }
];
