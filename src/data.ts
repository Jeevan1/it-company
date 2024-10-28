import { link } from "fs";

export const nav = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Company",
    href: "/company",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Login",
    href: "/login",
  },
];

export const slider = [
  {
    id: 1,
    heading: "Innovating the Future",
    title: "Our Vision Our VisionvvOur VisionOur Vision v ",
    description:
      "We strive to be at the forefront of technological advancements, creating solutions that shape the future. Join us on a journey to innovate and lead in a rapidly evolving digital world.",
    image: "/assets/img/slider/1.png",
    link: "https://www.yourcompany.com/vision",
  },
  {
    id: 2,
    heading: "Empowering Businesses",
    title: "Our Services",
    description:
      "From web and mobile development to AI-driven analytics, we offer a comprehensive suite of services tailored to empower businesses. Discover how we can help you transform your digital presence.",
    image: "/assets/img/slider/2.png",
    link: "https://www.yourcompany.com/services",
  },
  {
    id: 3,
    heading: "Committed to Excellence",
    title: "Our Team",
    description:
      "Our team consists of dedicated professionals with a passion for technology and a commitment to excellence. We work collaboratively to deliver high-quality solutions and exceptional client experiences.",
    image: "/assets/img/slider/3.png",
    link: "https://www.yourcompany.com/team",
  },
  {
    id: 4,
    heading: "Join Our Community",
    title: "Careers",
    description:
      "We're always looking for talented individuals who are ready to make an impact. Explore exciting career opportunities with us and be part of our journey to shape the future.",
    image: "/assets/img/slider/1.png",
    link: "https://www.yourcompany.com/careers",
  },
];

export const services = [
  {
    id: 1,
    name: "Web Development",
    description:
      "We specialize in creating dynamic and responsive websites that captivate users and drive business growth.",
    image: "/assets/img/services/website.png",
  },
  {
    id: 2,
    name: "Mobile Development",
    description:
      "We develop cutting-edge mobile applications that power your business operations.",
    image: "/assets/img/services/app.png",
  },
  {
    id: 3,
    name: "AI and Machine Learning",
    description:
      "Harness the power of AI and machine learning to automate tasks, predict patterns, and make data-driven decisions.",
    image: "/assets/img/services/ai.png",
  },
  {
    id: 4,
    name: "Cloud Computing",
    description:
      "We provide cloud solutions that enable scalability, security, and cost-efficiency for your business.",
    image: "/assets/img/services/design.png",
  },
];

export const serviceField = [
  {
    id: 1,
    title: "Marketing",
    description:
      "We specialize in creating dynamic and responsive websites that captivate users and drive business growth.",
    image: "/assets/img/slider/1.png",
  },
  {
    id: 2,
    title: "Website Development",
    description:
      "We develop cutting-edge mobile applications that power your business operations.",
    image: "/assets/img/slider/2.png",
  },
  {
    id: 3,
    title: "AI and Machine Learning",
    description:
      "Harness the power of AI and machine learning to automate tasks, predict patterns, and make data-driven decisions.",
    image: "/assets/img/slider/1.png",
  },
  {
    id: 4,
    title: "Cloud Computing",
    description:
      "We provide cloud solutions that enable scalability, security, and cost-efficiency for your business.",
    image: "/assets/img/slider/3.png",
  },
];

export const subscription = [
  {
    name: "Basic Plan",
    price: "$99",
    features: [
      "Multi-Language Support",
      "Unlimited Database",
      "Powerful Admin Panel",
      "Data Security",
      "24/7 System Monitoring",
    ],
  },
  {
    name: "Advance Plan",
    price: "$299",
    features: [
      "Multi-Language Support",
      "Unlimited Database",
      "Powerful Admin Panel",
      "Data Security",
      "Support via E-mail and Phone",
      "24/7 System Monitoring",
    ],
  },
  {
    name: "Professional Plan",
    price: "$199",
    features: [
      "Multi-Language Support",
      "Unlimited Database",
      "Powerful Admin Panel",
      "Data Security",
      "24/7 System Monitoring",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my projects, skills, and experience as a developer. Built with modern frontend technologies for a smooth and interactive user experience.",
    image: "/assets/img/slider/1.png",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://portfolio.example.com",
    github: "https://github.com/username/portfolio",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description:
      "A fully-featured e-commerce platform with product listings, a shopping cart, and payment processing. Designed for scalability and user-friendly navigation.",
    image: "/assets/img/slider/2.png",
    techStack: ["React", "Redux", "Node.js", "MongoDB"],
    link: "https://ecommerce.example.com",
    github: "https://github.com/username/ecommerce-store",
  },
  {
    id: 3,
    title: "Social Media App",
    description:
      "A social media application where users can post updates, follow other users, and interact through comments and likes. Built with a focus on performance and user engagement.",
    image: "/assets/img/slider/3.png",
    techStack: ["React Native", "Firebase", "Redux Toolkit"],
    link: "https://socialmedia.example.com",
    github: "https://github.com/username/social-media-app",
  },
  {
    id: 4,
    title: "Project Management Tool",
    description:
      "An application to manage tasks, collaborate with team members, and track project progress. Ideal for remote teams looking for efficient workflows.",
    image: "/assets/img/slider/1.png",
    techStack: ["Vue.js", "Vuetify", "Node.js", "PostgreSQL"],
    link: "https://projectmanagement.example.com",
    github: "https://github.com/username/project-management-tool",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "A weather forecasting app that provides real-time weather data and a seven-day forecast. User-friendly interface with location-based data updates.",
    image: "/assets/img/slider/2.png",
    techStack: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    link: "https://weatherapp.example.com",
    github: "https://github.com/username/weather-app",
  },
];
