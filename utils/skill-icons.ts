import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
  SiBootstrap,
  SiMui,
  SiCanva,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFreelancer,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiLangchain,
  SiN8N,
  SiScikitlearn,
  SiKeras,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiApachekafka,
  SiApachespark,
  SiApacheairflow,
  SiApachehadoop,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiStreamlit,
  SiSelenium,
  SiNeo4J,
  SiRedis,
  SiApachecassandra,
  SiApachehbase,
  SiPlotly,
  SiCplusplus,
  SiC,
  SiScala,
  SiHuggingface,
  SiOpenai,
  SiTableau,
} from "react-icons/si";
import { FaJava, FaAws, FaMicrosoft, FaDatabase } from "react-icons/fa";
import { IconType } from "react-icons";

export const getSkillIcon = (skill: string): IconType => {
  const skillLower = skill.toLowerCase();

  switch (skillLower) {
    case "html":
      return SiHtml5;
    case "css":
      return SiCss3;
    case "javascript":
    case "js":
      return SiJavascript;
    case "typescript":
    case "ts":
      return SiTypescript;
    case "react":
      return SiReact;
    case "next js":
    case "nextjs":
    case "next.js":
      return SiNextdotjs;
    case "tailwind":
    case "tailwindcss":
      return SiTailwindcss;
    case "node js":
    case "nodejs":
    case "node.js":
      return SiNodedotjs;
    case "mongodb":
      return SiMongodb;
    case "mysql":
      return SiMysql;
    case "postgresql":
    case "postgres":
      return SiPostgresql;
    case "firebase":
      return SiFirebase;
    case "git":
      return SiGit;
    case "github":
      return SiGithub;
    case "figma":
      return SiFigma;
    case "bootstrap":
      return SiBootstrap;
    case "materialui":
    case "mui":
      return SiMui;
    case "canva":
      return SiCanva;
    case "illustrator":
      return SiAdobeillustrator;
    case "photoshop":
      return SiAdobephotoshop;
    case "python":
      return SiPython;
    case "tensorflow":
      return SiTensorflow;
    case "pytorch":
      return SiPytorch;
    case "numpy":
      return SiNumpy;
    case "pandas":
      return SiPandas;
    case "langchain":
      return SiLangchain;
    case "langgraph":
      return SiHuggingface; // closest available AI/LLM icon
    case "chromadb":
      return SiRedis; // closest available vector/DB icon
    case "n8n":
      return SiN8N;
    case "xgboost":
      return SiScikitlearn; // closest available ML icon
    case "scikit-learn":
    case "sklearn":
      return SiScikitlearn;
    case "keras":
      return SiKeras;
    case "docker":
      return SiDocker;
    case "kubernetes":
      return SiKubernetes;
    case "aws":
    case "amazon":
      return FaAws;
    case "azure":
      return FaMicrosoft;
    case "gcp":
    case "google cloud":
      return SiGooglecloud;
    case "kafka":
      return SiApachekafka;
    case "spark":
    case "pyspark":
      return SiApachespark;
    case "airflow":
      return SiApacheairflow;
    case "hadoop":
      return SiApachehadoop;
    case "django":
      return SiDjango;
    case "flask":
      return SiFlask;
    case "fastapi":
      return SiFastapi;
    case "streamlit":
      return SiStreamlit;
    case "selenium":
      return SiSelenium;
    case "neo4j":
      return SiNeo4J;
    case "redis":
      return SiRedis;
    case "cassandra":
      return SiApachecassandra;
    case "hbase":
      return SiApachehbase;
    case "plotly":
      return SiPlotly;
    case "tableau":
      return SiTableau;
    case "java":
      return FaJava;
    case "c":
      return SiC;
    case "c++":
    case "cpp":
      return SiCplusplus;
    case "scala":
      return SiScala;
    case "hugging face":
    case "huggingface":
      return SiHuggingface;
    case "openai":
    case "llms":
      return SiOpenai;
    case "sql":
      return FaDatabase;
    default:
      return SiFreelancer;
  }
};

export const getSkillColor = (skill: string): string => {
  const skillLower = skill.toLowerCase();
  switch (skillLower) {
    case "python":
    case "tensorflow":
    case "pytorch":
    case "aws":
    case "azure":
    case "gcp":
      return "#ef4444";
    case "html":
    case "javascript":
    case "react":
    case "node js":
    case "nodejs":
    case "docker":
      return "#dc2626";
    case "typescript":
    case "next js":
    case "nextjs":
    case "mongodb":
    case "postgresql":
    case "mysql":
      return "#b91c1c";
    case "tailwind":
    case "css":
    case "git":
    case "github":
    case "numpy":
      return "#991b1b";
    case "kafka":
    case "selenium":
    case "django":
    case "flask":
      return "#7f1d1d";
    case "langchain":
    case "langgraph":
      return "#1C3C3C";
    case "chromadb":
      return "#FF6B35";
    case "n8n":
      return "#EA4B71";
    case "fastapi":
      return "#009688";
    case "xgboost":
      return "#189ABE";
    case "pandas":
      return "#150458";
    default:
      return "#ef4444";
  }
};
