// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import djangoLogo from './assets/tech_logo/django.png';

// Experience Section Logo's
import freelanceLogo from './assets/company_logo/freelancer_logo.png';
import internshalaLogo from './assets/company_logo/internshala_logo.png';
import sihLogo from './assets/company_logo/sih_logo.png';

// Education Section Logo's
import srmcemLogo from './assets/education_logo/srmcem_logo.png';
import svmLogo from './assets/education_logo/svm_logo.png';
import mvmLogo from './assets/education_logo/mvm_logo.png';

// Project Section Logo's
import invoicegenLogo from './assets/work_logo/invoicegen_logo.png';
import chattingappLogo from './assets/work_logo/chattingapp_logo.png';
import paintappLogo from './assets/work_logo/paintapp_logo.png';
import modernwebLogo from './assets/work_logo/modernweb_logo.png';
import imageresizerLogo from './assets/work_logo/imageresizer_logo.png';
import bubblegameLogo from './assets/work_logo/bubblegame_logo.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Django', logo: djangoLogo },
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: freelanceLogo,
    role: "Freelance Web Developer",
    company: "Self Employed",
    date: "June 2023 - Present",
    desc: "Designed and developed responsive and dynamic websites for multiple clients using the MERN stack. Focused on creating user-friendly interfaces, managing backend logic, and integrating MongoDB for data management. Delivered full-cycle web solutions, from UI design to deployment, ensuring performance optimization and clean architecture.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    id: 1,
    img: sihLogo,
    role: "Fullstack Developer (Team Project)",
    company: "Smart India Hackathon 2023",
    date: "August 2023 - October 2023",
    desc: "Developed an innovative project solution during the Smart India Hackathon using Django as the core backend framework. Implemented secure authentication, RESTful APIs, and a responsive frontend interface. Collaborated with the team to ensure smooth integration between frontend and backend, delivering a reliable and efficient product.",
    skills: [
      "Django",
      "Django REST Framework",
      "Python",
      "SQLite",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "GitHub",
    ],
  },
  {
    id: 2,
    img: internshalaLogo,
    role: "Web Development Intern",
    company: "Internshala",
    date: "April 2023 - June 2023",
    desc: "Worked as a Web Development Intern, building interactive and responsive web pages using HTML, CSS, JavaScript, and React JS. Collaborated on real-world projects to enhance frontend functionality and user experience while learning industry-level development practices.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Bootstrap",
      "Git",
      "Responsive Design",
    ],
  },
];


export const education = [
  {
    id: 0,
    img: srmcemLogo,
    school: "Shri Ramswaroop Memorial College of Engineering and Management, Lucknow",
    date: "November 2022 - July 2026 (Expected)",
    grade: "8.07 CGPA",
    desc: "I have completed my Bachelor's degree (B.Tech) in Computer Applications from Shri Ramswaroop Memorial College of Engineering and Management, Lucknow. During my time at SRMCEM, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at SRMCEM has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
  },
  {
    id: 1,
    img: svmLogo,
    school: "Saraswati Vidya Mandir, Fatehpur",
    date: "Apr 2020 - March 2021",
    grade: "86.00%",
    desc: "I completed my class 12 education from Saraswati Vidya Mandir, Fatehpur, under the UP Board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "UPBOARD(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: mvmLogo,
    school: "Maharishi Vidya Mandir, Fatehpur",
    date: "Apr 2018 - March 2019",
    grade: "89%",
    desc: "I completed my class 10 education from Maharishi Vidya Mandir, Fatehpur, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X) - Science with Computer Application",
  },

];

export const projects = [
  {
    id: 0,
    title: "Invoice Generator",
    description:
      "A React.js-based web application that allows users to easily create, customize, and download invoices in real time. It provides dynamic form handling, automatic total calculation, and a clean printable layout for professional billing needs.",
    image: invoicegenLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/SanskarOmer/Invoice_Generator",
    webapp: "https://sanskaromer.github.io/Invoice_Generator/",
  },
  {
    id: 1,
    title: "Realtime Chatting App",
    description:
      "A Django-powered real-time chat application that enables users to communicate instantly with live message updates. It integrates WebSocket-based communication for smooth interaction and features a simple yet responsive UI for seamless chatting.",
    image: chattingappLogo,
    tags: ["Django", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/SanskarOmer/Realtime_Chatting_app_using_django",
    webapp: "https://sanskaromer25.pythonanywhere.com/",
  },
  {
    id: 2,
    title: "Paint App",
    description:
      "A lightweight browser-based drawing tool built with vanilla JavaScript. It allows users to draw, erase, change brush colors, and adjust stroke sizes — offering an intuitive canvas experience similar to MS Paint.",
    image: paintappLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SanskarOmer/PaintApp-using-JS",
    webapp: "https://sanskaromer.github.io/PaintApp-using-JS/",
  },
  {
    id: 3,
    title: "Modern Looking Website",
    description:
      "A visually appealing and modern single-page website built using React.js. It features smooth scrolling, engaging layouts, and a responsive design — ideal for showcasing personal or business portfolios with a sleek UI.",
    image: modernwebLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/SanskarOmer/Modern_Looking_Website",
    webapp: "https://sanskaromer.github.io/Modern_Looking_Website/",
  },
  {
    id: 4,
    title: "Image Resizer",
    description:
      "A simple yet efficient web tool that enables users to resize and download images directly from the browser. Built with pure JavaScript, it ensures fast processing and smooth performance without external dependencies.",
    image: imageresizerLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SanskarOmer/Image-Resizer",
    webapp: "https://sanskaromer.github.io/Image-Resizer/",
  },
  {
    id: 5,
    title: "Bubble Game",
    description:
      "An interactive and fun browser game created using HTML, CSS, and JavaScript. The objective is to pop bubbles with the target number within a time limit, improving reflexes while offering an enjoyable experience.",
    image: bubblegameLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SanskarOmer/Bubble-Game",
    webapp: "https://github.com/SanskarOmer/Bubble-Game",
  },
];
