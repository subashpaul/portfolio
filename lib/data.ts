export const profile = {
  name: "Subash Paul",
  role: "Systems Engineer, Tata Consultancy Services",
  place: "Hyderabad, India",
  bio: "I build web products end to end: workflow tooling, full-stack apps and the pipelines that ship them. Before that, computer-vision research at ISRO.",
  email: "subashpaul559@gmail.com",
  github: "https://github.com/subashpaul",
  linkedin: "https://linkedin.com/in/subash-paul",
  resume: "/Subash_Paul_Resume.pdf",
};

export const experience = [
  { dates: "May 2026 – Now", title: "System Engineer", org: "Tata Consultancy Services", place: "Hyderabad",
    points: ["Contributing to enterprise software delivery and engineering best practices as part of the systems team."] },
  { dates: "Jul 2024 – Apr 2026", title: "SDE", org: "TigmaMinds Pvt. Ltd.", place: "Guwahati",
    points: ["Built a low-code/no-code workflow web application that automates API development for organizations, using ReactJS, NodeJS, Next.js and TypeScript.", "Managed deployments and pipelines through Azure DevOps."] },
  { dates: "Feb 2024 – Jun 2024", title: "SDE Intern", org: "Digital Junction Business & Solutions LLP", place: "Chennai",
    points: ["Developed a full-stack MERN application for online interview assessments and deployed it, with a FastAPI (Python) service, on Azure App Services.", "Set up and maintained CI/CD pipelines on Azure DevOps for automated hosting and deployment."] },
  { dates: "Jun 2023 – Jul 2023", title: "Research Intern", org: "Space Applications Centre, ISRO", place: "Ahmedabad",
    points: ["Worked on object detection and tracking in computer vision using MATLAB and Python.", "Detected moving objects in video and predicted trajectories with algorithms such as the Kalman Filter."] },
  { dates: "Sep 2022 – Nov 2022", title: "Open-Source Contributor", org: "Hacktoberfest 2022 & 2023", place: "",
    points: ["Built an event management web application for IIT Guwahati.", "Contributed to open-source projects, including codebase deep-dives and bug fixes."] },
];

export const projects = [
  { name: "Anomaly Detection in Cognitive Radio Networks", stack: "Python · NumPy · scikit-learn", text: "Autoencoder-based ML model that detects primary user emulation attacks." },
  { name: "BankUI", stack: "HTML · CSS · Vanilla JS", text: "A banking interface built without frameworks." },
  { name: "Geo-Location App", stack: "HTML · CSS · Vanilla JS", text: "Third-party API integration, form UX and the Geolocation API." },
  { name: "Multi-Step Form", stack: "HTML · CSS · JavaScript", text: "A fully functional multi-step form." },
];

export const education = [
  { dates: "2020 – 2024", name: "NERIST, B.Tech. Computer Science & Engineering", note: "CGPA 9.70 / 10, Gold Medalist" },
  { dates: "2018 – 2020", name: "NERIST, 10+2 Equivalent, Electronics & Communication", note: "CGPA 9.69 / 10, Gold Medalist" },
];

export const skills = [
  { label: "Languages", items: "C/C++, JavaScript, TypeScript, SQL" },
  { label: "Frontend", items: "Next.js, ReactJS, Tailwind CSS, Shadcn, MUI, Bootstrap" },
  { label: "Backend & data", items: "NodeJS, ExpressJS, MongoDB, PostgreSQL" },
  { label: "Delivery", items: "Azure DevOps" },
  { label: "Interests", items: "DevOps, GenAI, Deep Learning, DBMS, Network Security" },
];

export const certifications = [
  "Front-End Web Development with ReactJS, HKUST (Coursera)",
  "JavaScript, Jonas Schmedtmann (Udemy)",
  "Ethical Hacking, IIT Kharagpur (NPTEL)",
  "Social Networks, IIT Madras (NPTEL)",
];

export const links: Record<string, { label: string; href: string }> = {
  "SDE": { label: "Certificate", href: "https://drive.google.com/file/d/1kWARPMU_E9wqHpGTkIqJnqkM3xutB5I0/view?usp=sharing" },
  "SDE Intern": { label: "Certificate", href: "https://drive.google.com/file/d/1PgvN2Ogn4x3g9z3SfbcpZHjIUr84QPfK/view?usp=drive_link" },
  "Research Intern": { label: "Certificate", href: "https://drive.google.com/file/d/11XpaSZuhbEYYaJ4SArerytxBUwY1dyXs/view?usp=sharing" },
  "Open-Source Contributor": { label: "Badge", href: "https://www.holopin.io/userbadge/cl9ggapn41096309mnugud1qvh" },
  "Multi-Step Form": { label: "Live demo", href: "https://spform.netlify.app/" },
  "BankUI": { label: "Live demo", href: "https://bankiui.netlify.app/" },
  "Geo-Location App": { label: "Live demo", href: "https://mapity.netlify.app/" },
};

export const certLinks = [
  "https://www.coursera.org/account/accomplishments/verify/LWU6EPSGUDC5",
  "https://drive.google.com/file/d/1sjSOw4nLi8EQXL0Vac8mC875qiyQ5qOO/view?usp=sharing",
  "https://drive.google.com/file/d/1s4qBOQkzsLmihocJxokH24RDdudIyOvn/view?usp=sharing",
  "https://drive.google.com/file/d/1ggXImSFHsC_JKriOkndCAg5OO6XBRpNu/view?usp=sharing",
];
