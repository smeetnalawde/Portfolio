import { resumeData } from "./resume-data";
import { FaYoutube, FaFacebook, FaCalendarAlt } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// Main skills data with no duplicates, ordered 13–9–5 (PySpark asset not found, pending)
export const SKILL_DATA = [
  // Row 1 (13 icons – core DS/ML + data)
  { skill_name: "Python", image: "python.png", width: 80, height: 80 },
  { skill_name: "Pandas", image: "pandas.png", width: 80, height: 80 },
  { skill_name: "Scikit-learn", image: "scikit.png", width: 80, height: 80 },
  { skill_name: "PyTorch", image: "pytorch-logo.png", width: 80, height: 80 },
  { skill_name: "MySQL", image: "mysql.png", width: 80, height: 80 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70 },
  { skill_name: "Airflow", image: "airflow.svg", width: 70, height: 70 },
  { skill_name: "R", image: "R.jpg", width: 70, height: 70 },
  { skill_name: "AWS", image: "aws.png", width: 70, height: 70 },
  { skill_name: "Azure", image: "azure.png", width: 70, height: 70 },
  { skill_name: "Docker", image: "docker.png", width: 70, height: 70 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 50, height: 50 },

  // Row 2 (9 icons – web app & APIs)
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "TypeScript", image: "https://img.icons8.com/color/96/typescript.png", width: 70, height: 70 },
  { skill_name: "React", image: "react.png", width: 70, height: 70 },
  { skill_name: "Next.js", image: "next.png", width: 70, height: 70 },
  { skill_name: "Node.js", image: "node.png", width: 70, height: 70 },
  { skill_name: "Databricks", image: "Databricks-Emblem.png", width: 105, height: 105 },
  { skill_name: "GraphQL", image: "graphql.png", width: 70, height: 70 },
  { skill_name: "HTML", image: "html.png", width: 70, height: 70 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },

  // Row 3 (5 icons – visualization, tooling, platform)
  { skill_name: "Power BI", image: "power_bi.png", width: 70, height: 70 },
  { skill_name: "Tableau", image: "tableau.webp", width: 70, height: 70 },
  { skill_name: "VS Code", image: "vscode.png", width: 65, height: 65 },
  { skill_name: "Prisma", image: "prisma.png", width: 65, height: 65 },
  { skill_name: "OpenAI", image: "openai.png", width: 105, height: 105 },

  // Row 4 (1 icon – big data engine)
  // PySpark asset not found in /public/skills; add e.g. 'pyspark.png' to include it here
  { skill_name: "Apache Spark", image: "Apache_Spark_logo.svg.png", width: 110, height: 110 },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/smeetnalawade/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/smeetnalawde",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "https://img.icons8.com/color/96/typescript.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
};

export const PROJECTS: Project[] = resumeData.projects.map((project) => ({
  title: project.name,
  description: project.description,
  tags: project.tags,
  image: project.image,
  link: project.link,
}));

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/smeetnalawade/",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/smeetnalawde",
      },
      {
        name: "Schedule Meeting",
        icon: FaCalendarAlt,
        link: "https://calendly.com/smeetdn14/30min",
      }
    ],
  },
  {
    title: "Navigation",
    data: [
      {
        name: "About Me",
        icon: null,
        link: "/#about-me",
      },
      {
        name: "Skills",
        icon: null,
        link: "/#skills",
      },
      {
        name: "Projects",
        icon: null,
        link: "/#projects",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email Me",
        icon: null,
        link: "mailto:smeet.n@itjobinbox.com",
      },
      {
        name: "Phone",
        icon: null,
        link: "tel:201-464-0721",
      },
      {
        name: "View Resume",
        icon: null,
        link: "/resume",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "/#about-me",
  },
  {
    title: "Skills",
    link: "/#skills",
  },
  {
    title: "AI Assistant",
    link: "/#ai-assistant",
  },
  {
    title: "Projects",
    link: "/#projects",
  },
  {
    title: "Resume",
    link: "/resume",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/smeetnalawde",
};
