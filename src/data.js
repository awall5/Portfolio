import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const personalInfo = {
  name: "Awal Manga",
  role: "MERN Stack Developer",
  email: "awalmanga25@gmail.com",
  phone: "+91-9634683326",
  linkedin: "https://www.linkedin.com/in/awalmanga/",
  github: "https://github.com/awall5",
  resume:
    "https://drive.google.com/uc?export=download&id=1jLuNp_mZ00Sjo920LFE8JKs4QY9K2EPN",
  about:
    "MERN Stack developer building full-stack web applications with React, Node.js, Express, and MongoDB. Experienced with AWS, Docker, and responsive UI design. Strong problem-solving, collaboration, and project delivery skills.",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/awalmanga/",
      icon: Linkedin,
      color: "#0A66C2",
    },
    {
      name: "GitHub",
      url: "https://github.com/awall5",
      icon: Github,
    },
    {
      name: "Email",
      url: "mailto:awalmanga25@gmail.com",
      icon: Mail,
    },
    {
      name: "Phone",
      url: "tel:+919634683326",
      icon: Phone,
    },
  ],
};

export const skills = {
  languages: ["C++", "Python", "Java", "SQL"],
  web: ["HTML", "CSS", "React.js", "Node.js", "Express.js"],
  tools: ["AWS", "Linux", "MongoDB", "VS Code"],
  softSkills: [
    "Problem-Solving",
    "Team Collaboration",
    "Project Management",
    "Adaptability",
  ],
};

export const projects = [
  {
    title: "Blood Donation Platform",
    period: "Mar’25",
    description:
      "A community-focused platform to register donors and manage donation drives.",
    url: "https://blooddonationfrontend-three.vercel.app/",
    image: new URL("./assets/blooddonation.svg", import.meta.url).href,
    points: [
      "Built a responsive frontend to register donors and manage donation events.",
      "Implemented contact forms and event listings with filtering and search.",
      "Coordinated with backend APIs for registration data and notifications.",
    ],
    techStack: ["React.js", "CSS", "Vercel"],
  },
  {
    title: "Go Food Website",
    period: "Feb’25 – Apr’25",
    description:
      "A full-stack food ordering platform with real-time order updates and user accounts.",
    url: "https://github.com/awall5/Gofood-Website",
    image: new URL("./assets/gofood.svg", import.meta.url).href,
    points: [
      "Implemented secure user authentication using JWT and bcrypt.",
      "Added real-time order tracking and status updates for customers.",
      "Designed a mobile-first UI in React to improve conversions and accessibility.",
      "Optimized backend APIs and MongoDB indexing for performance.",
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "Weather App with Voice Search",
    period: "Jul’24 – Aug’24",
    description:
      "A weather app that supports voice search and dynamic UI based on conditions.",
    url: "https://weather-app-by-awal.netlify.app/",
    image: new URL("./assets/weather.svg", import.meta.url).href,
    points: [
      "Integrated OpenWeatherMap API for real-time weather data.",
      "Implemented voice search using the Web Speech API for hands-free queries.",
      "Added dynamic backgrounds and a dark mode for improved UX.",
    ],
    techStack: ["React.js", "OpenWeatherMap API", "Web Speech API"],
  },
  {
    title: "Auto Backup to Azure Blob Storage",
    period: "Jan’24 – May’24",
    description:
      "Automated backups from local directories to Azure Blob Storage using Python and Azure SDK.",
    url: "https://github.com/awall5/Azure-Backup",
    image: new URL("./assets/azure_backup.svg", import.meta.url).href,
    points: [
      "Developed a Python script to automate file backups from a local directory to Azure Blob Storage.",
      "Utilized Azure SDK (azure-storage-blob) for secure authentication and cloud storage operations.",
      "Implemented date-based folder structure in Blob Storage to organize uploaded files efficiently.",
      "Enabled file overwrite support and ensured reliable data transfer using binary streaming.",
      "Designed with scalability in mind for future integration with Azure Timer Trigger Functions.",
    ],
    techStack: ["Python", "Azure"],
  },
];

export const certificates = [
  {
    name: "Azure Administrator Associate",
    issuer: "Microsoft",
    date: "March’25",
  },
  {
    name: "AWS Academy Cloud Architecture",
    issuer: "AWS Academy",
    date: "Nov’24",
  },
  {
    name: "Cloud computing (AWS)",
    issuer: "Cipherschool",
    date: "July’24",
  },
  {
    name: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "May’24",
  },
  {
    name: "Programming in C++: A Hands-on introduction",
    issuer: "Coursera",
    date: "Feb’24",
  },
  {
    name: "Object-Oriented Programming",
    issuer: "Neocolab",
    date: "Jan’24",
  },
  {
    name: "Mastering Data Structures & Algorithms using C++",
    issuer: "Udemy",
    date: "Nov’23",
  },
];

export const education = [
  {
    institution: "Lovely Professional University, Punjab, India",
    degree: "B. Tech in Computer Science and Engineering",
    period: "Aug’22 – 26",
    details: "CGPA: 7.00",
  },
  {
    institution: "Sher Shah collage, Sasaram, India",
    degree: "Intermediate",
    period: "Apr’21 – Mar’22",
  },
  {
    institution: "ABR Foundation School, Sasaram, India",
    degree: "Matriculation",
    period: "Apr’19 – Mar’20",
  },
];

export const achievements = [
  {
    title: "Organized Blood Donation Camp",
    date: "Jul’23",
    description:
      "Led donor coordination, managed registrations, and assisted with logistics for I Dream Too Trust.",
  },
  {
    title: "S1 List (Top 1-50%)",
    description:
      "Recognized for academic excellence and extracurricular involvement.",
  },
];
