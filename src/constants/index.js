import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  django,
  python,
  postgres,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  stegano,
  ideator,
  leetconnect,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "my-projects",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Django Developer",
    icon: backend,
  },
  {
    title: "FullStack Developer",
    icon: mobile,
  },
  {
    title: "Project Lead",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "SpeakUp",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Alejandro’s tenacity and focus on understanding and solving the problem makes him a great developer",
    name: "Libier Bermudez",
    designation: "IT Product Director",
    company: "RSM US LLP",
    image: "https://i.imgur.com/IJ7RR1H.png",
  },
];

const projects = [
  {
    name: "SteganoHide",
    description:
      "SteganoHide is an innovative steganography website allowing users to securely embed and retrieve encrypted text within images. The platform encrypts user-provided text with a password, concealing it within the image. Offering multiple encryption algorithms, tampering detection, and privacy measures. It serves as a user-friendly and versatile tool for secure communication and data storage.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Steganography",
        color: "green-text-gradient",
      },
    ],
    image: stegano,
    source_code_link: "https://github.com/kailashchoudhary11/SteganoHide",
  },
  {
    name: "Ideator",
    description:
      "Ideator is a web-based platform designed to enhance your ideas by providing personalized project suggestions aligned with your skills and interests: offering an idea generation process, and delivering tailored and innovative concepts. The platform emphasizes data security with strong authentication features and boasts a visually appealing and user-friendly interface.",
    tags: [
      {
        name: "OpenAI API",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "blue-text-gradient",
      },

    ],
    image: ideator,
    source_code_link: "https://github.com/kailashchoudhary11/Ideator",
  },
  {
    name: "LeetConnect",
    description:
      "LeetConnect is a browser extension that enhances the LeetCode platform by allowing users to follow others, access solutions, and seamlessly integrate a search box. The implementation involves React components for user interactions, while DRF ensures a robust backend for user management and data retrieval.",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Google Chrome API",
        color: "green-text-gradient",
      },
      {
        name: "DjangoRestFramework",
        color: "pink-text-gradient",
      },
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Browser Extension",
        color: "pink-text-gradient",
      },
    ],
    image: leetconnect,
    source_code_link: "https://github.com/kailashchoudhary11/leetconnect",
  },
];

export { services, technologies, experiences, testimonials, projects };
