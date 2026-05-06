export const projects = [
  {
    id: "vertigrow-web",
    title: "VertiGrow Web - Capstone",
    desc: "Vertical Farming web system that integrates IoT sensors to track environment in real time.",
    longDesc: "VertiGrow Web is the central management hub for a high-tech vertical farming system. It provides a comprehensive multi-layer dashboard that aggregates data from distributed IoT sensors across the farm. \n\nKey Features:\n• Real-time sensor monitoring (Temperature, Humidity, Soil Moisture per layer, Light, Water Level)\n• Multi-layer vertical farm dashboard for granular oversight\n• Fuzzy logic-based automatic watering control and manual pump overrides via web interface\n• Sensor data logging with interactive history graphs\n• Intelligent alert system for low soil moisture and critical water levels\n• Sustainable operation integrated with solar-powered hardware\n• Admin access for fine-tuning system parameters and threshold calibration",
    extraImages: [
      "/assets/verti-web/verti-web_02.webp",
      "/assets/verti-web/verti-web_03.webp",
      "/assets/verti-web/verti-web_04.png"
    ],
    tags: ['IoT', 'Laravel', 'PHP', 'MongoDB'],
    stack: [
      { category: "Web Frameworks", items: ["Laravel", "PHP", "Blade"] },
      { category: "Frontend", items: ["JavaScript", "TailwindCSS", "HTML5", "CSS3"] },
      { category: "Database & Backend", items: ["MongoDB Atlas", "REST API"] },
      { category: "IoT & Hardware", items: ["ESP32", "Arduino", "Solar Powered Systems"] }
    ],
    demoLink: "https://fibii44.github.io/vertigrow-landing/",
    src: "/assets/verti-web/verti-web_01.webp"
  },
  {
    id: "vertigrow-mobile",
    title: "VertiGrow Mobile App",
    desc: "A Kotlin-based Android app with Firebase for real-time monitoring and Fuzzy Logic watering control.",
    longDesc: "The VertiGrow Mobile Application is a sophisticated monitoring and control system for high-tech vertical farming. \n\nKey Features:\n• Real-time sensor monitoring (Temperature, Humidity, Soil Moisture, Light, Water Level)\n• Multi-layer vertical farm dashboard with historical data logging and graphs\n• Fuzzy logic-based automatic watering control and manual pump overrides\n• Intelligent alert system for low soil moisture and critical water levels\n• Sustainable, energy-efficient operation powered by solar energy\n• Administrative access for system management and threshold calibration",
    extraImages: [
      "/assets/verti-app/verti-app02.webp",
      "/assets/verti-app/verti-app03.webp",
      "/assets/verti-app/verti-app04.webp",
      "/assets/verti-app/verti-app05.webp"
    ],
    tags: ['Kotlin', 'Firebase', 'IoT', 'ESP32', 'Fuzzy Logic'],
    stack: [
      { category: "Mobile Development", items: ["Android Studio", "Firebase"] },
      { category: "Mobile Frameworks", items: ["Android SDK", "Kotlin", "Java"] },
      { category: "Databases", items: ["Firebase Realtime Database"] },
      { category: "IoT & Hardware", items: ["ESP32", "Solar Powered Systems"] }
    ],
    demoLink: "https://fibii44.github.io/vertigrow-landing/",
    src: "/assets/verti-app/verti-app01.webp"
  },
  {
    id: "buksu-engage",
    title: "University Training and Seminar Management System",
    desc: "A MERN stack application built for CITL to manage university training sessions and seminars.",
    longDesc: "This system was developed to streamline the management and organization of university training sessions and seminars at Bukidnon State University. \n\nKey Features:\n• Scheduling management for training events\n• User registration and attendance tracking\n• Automatic certificate generation for participants\n• Real-time updates and feedback collection\n\nThe application serves CITL and Department Representatives, ensuring that training events run smoothly and participants receive timely information.",
    tags: ['React', 'Node.js', 'MongoDB', 'Management'],
    stack: [
      { category: "Frontend Development", items: ["React", "JavaScript", "TailwindCSS"] },
      { category: "Backend Development", items: ["Node.js", "Express.js"] },
      { category: "Database", items: ["MongoDB Atlas"] },
      { category: "Tools & Deployment", items: ["Git", "NPM"] }
    ],
    link: "https://github.com/Fibii44/20241_T145_UNIVERSITY-TRAINING-AND-SEMINAR-MANAGEMENT-SYSTEM",
    src: "/assets/buksu-engage/buksuen_01.webp"
  },
  {
    id: "aaccup-showcase",
    title: "AACCUP Showcase",
    desc: "Multi-tenant architecture for AACCUP departments with subdomain-based isolation.",
    longDesc: "AACCUP Showcase is a robust multi-tenant web application designed for departmental academic accreditation. It features subdomain-based tenant isolation, automatic database creation for new departments, and centralized administration for tenant approvals and domain management. \n\nKey Features:\n• Multi-tenant architecture for separate department instances\n• Subdomain-based routing (e.g., cse.aaccup.edu)\n• Automated tenant database provisioning and migration\n• Centralized admin dashboard for system-wide configuration\n• Department-specific branding and dashboard access control\n• Secure data separation through isolated database schemas",
    tags: ['Laravel', 'Multi-tenancy', 'PHP', 'MySQL'],
    stack: [
      { category: "Web Frameworks", items: ["Laravel", "PHP"] },
      { category: "Frontend", items: ["TailwindCSS", "JavaScript"] },
      { category: "Architecture", items: ["Multi-tenancy", "Subdomain Routing"] },
      { category: "Database", items: ["MySQL", "Tenant Isolation"] }
    ],
    src: "/assets/aaccup/aaccup-01.webp",
    extraImages: ["/assets/aaccup/aaccup-02.webp"]
  },
  {
    id: "kitty-cross-road",
    title: "2D Game: Kitty Cross the Road",
    desc: "A fun and interactive 2D arcade game where a kitty navigates traffic and obstacles safely.",
    longDesc: "Kitty Cross Road is a high-energy Java Swing arcade game inspired by the classic lane-crossing genre. Players take control of a feline hero, navigating through procedurally generated environments filled with dangerous obstacles and shifting terrains. \n\nKey Features:\n• Protagonist Selection: Choose from three unique feline heroes—Black, White, and Orange\n• Procedural Environments: Randomly generated lanes including roads, high-speed train tracks, and treacherous water strips\n• Dynamic Hazards: Dodge fast-moving cars, powerful trains, and time your jumps across moving logs in water lanes\n• Advanced Game State Management: Full in-game menu system for pausing, restarting, and controlling settings\n• Immersive Audio: Custom sound effects and looping background scores that react to game events\n• Progressive Difficulty: A score-based system that tracks your farthest forward progress, challenging your reflexes as you move deeper into the map",
    extraImages: [
      "/assets/kitty-crossroad/kitty_02.webp",
      "/assets/kitty-crossroad/kitty_03.webp"
    ],
    tags: ['Game Dev', 'Java', 'Swing'],
    stack: [
      { category: "Game Engine", items: ["Java", "Java Swing", "Java AWT"] },
      { category: "Assets & Design", items: ["Custom Sprites", "Audio Engineering", "Sprite Animation"] },
      { category: "Development Tools", items: ["Eclipse IDE", "Java SE 15"] }
    ],
    link: "https://github.com/nloukei/KittyCrossRoad",
    src: "/assets/kitty-crossroad/kitty_01.webp"
  },
  {
    id: "project-placeholder",
    title: "Project Placeholder",
    desc: "Upcoming implementation mapping innovative solutions and workflow optimizations.",
    longDesc: "This is a placeholder for an upcoming project. Stay tuned for more details on innovative solutions and workflow optimizations that will be showcased here.",
    tags: ['TBA', 'Design', 'Upcoming'],
    link: "https://github.com/Fibii44",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
  }
];
