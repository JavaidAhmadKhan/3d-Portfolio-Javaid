import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "NextJs Developer",
    icon: backend,
  },
  {
    title: "Nodejs Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Freelance",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing new user-facing features using React.js",
      "Build interactive, responsive & performant front-end interfaces.",
      "Create a highly usable and scalable front-end design system.",
      "Actively participate in design and code reviews.",
    ],
  },
  {
    title: "Preact, React, Gatsby",
    company_name: "YouKnowMeBest",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Oct 2022",
    points: [
      "Developing new user-facing features using React.js",
      "Build interactive, responsive & performant front-end interfaces.",
      "Create a highly usable and scalable front-end design system.",
      "Actively participate in design and code reviews.",
    ],
  },
  {
    title: "ReactJs, NextJs Developer",
    company_name: "Honeycomb",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Hun 2022 - Present",
    points: [
      "Converting Figma Prototype into ReactJs, Nextjs",
      "Developing Performant, Userfriendly, Secure Pwa Apps",
      "Developing new user-facing features using React.js",
      "Build interactive, responsive & performant front-end interfaces.",
      "Create a highly usable and scalable front-end design system.",
      "Actively participate in design and code reviews.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Javaid proved me wrong.",
    name: "John Mattathil",
    designation: "Wordpress Developer",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Javaid does.",
    name: "Aqib Javaid",
    designation: "FullStack Developer",
  },
  {
    testimonial:
      "After Javaid optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Sunanta ",
    designation: "Frontend Developer",
  },
];

const projects = [
  {
    name: "Wolzon Dashboard",
    description:
      "A multipurpose Dasboard visually display important metrics, providing modern enterprise application owners and administrators with sharable insights that can be helpful for monitoring performance, spotting trends, and identifying issues.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebae",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://wolzon-dashboard.vercel.app/",
  },
  {
    name: "Absolute Informations",
    description:
      "A beautiful blog app built with Nextjs, Tailwindcss, Hygraph for headless cms which makes web app performant, user-friendly and secure. You can post your blogs like tech, health, blockchain",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Hygraph",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://absoluteinformations.com/",
  },
  {
    name: "Wolzon Ecommerce",
    description:
      "A fully functional ecommerce web application, where you can signin/sginout and sign in with google, add/remove the item to the cart. Adding Stripe Payment Gateway, user can pay online for his orders.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://wolzon.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
