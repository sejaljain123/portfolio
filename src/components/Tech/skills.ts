import React from 'react';
import { RiHtml5Fill, RiVuejsFill } from 'react-icons/ri';
import { DiCss3, DiJavascript1 } from 'react-icons/di';
import {
  SiAmazonaws,
  SiAmazondynamodb,
  SiAwslambda,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGatsby,
  SiGit,
  SiGithub,
  SiHeroku,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiServerless,
  SiSocketdotio,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

interface Skill {
  name: string;
  icon: React.ComponentType<{ size?: string | number; color?: string; title?: string }>;
  color: string;
}

const Skills: Skill[] = [
  {
    name: 'HTML',
    icon: RiHtml5Fill,
    color: '#E44D26',
  },
  {
    name: 'CSS',
    icon: DiCss3,
    color: '#2965f1',
  },
  {
    name: 'JavaScript',
    icon: DiJavascript1,
    color: '#F0DB4F',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#007ACC',
  },
  {
    name: 'C++',
    icon: SiCplusplus,
    color: '#00599C',
  },
  {
    name: 'Python',
    icon: SiPython,
    color: '#3776AB',
  },
  {
    name: 'React',
    icon: SiReact,
    color: '#61DAFB',
  },
  {
    name: 'Redux',
    icon: SiRedux,
    color: '#764ABC',
  },
  {
    name: 'Next.js',
    icon: TbBrandNextjs,
    color: '#000000',
  },
  {
    name: 'Gatsby',
    icon: SiGatsby,
    color: '#663399',
  },
  {
    name: 'Vue',
    icon: RiVuejsFill,
    color: '#4FC08D',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: '#339933',
  },
  {
    name: 'Express',
    icon: SiExpress,
    color: '#000000',
  },
  {
    name: 'Nest.js',
    icon: SiNestjs,
    color: '#E0234E',
  },
  {
    name: 'Serverless',
    icon: SiServerless,
    color: '#FD5750',
  },
  {
    name: 'Git',
    icon: SiGit,
    color: '#F05032',
  },
  {
    name: 'GitHub',
    icon: SiGithub,
    color: '#181717',
  },
  {
    name: 'AWS',
    icon: SiAmazonaws,
    color: '#232F3E',
  },
  {
    name: 'Firebase',
    icon: SiFirebase,
    color: '#FFCA28',
  },
  {
    name: 'Docker',
    icon: SiDocker,
    color: '#2496ED',
  },
  {
    name: 'Linux',
    icon: SiLinux,
    color: '#FCC624',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: '#47A248',
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    color: '#4479A1',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '#336791',
  },
  {
    name: 'DynamoDB',
    icon: SiAmazondynamodb,
    color: '#4053D6',
  },
  {
    name: 'AWS Lambda',
    icon: SiAwslambda,
    color: '#FF9900',
  },
  {
    name: 'Socket.io',
    icon: SiSocketdotio,
    color: '#010101',
  },
  {
    name: 'Vercel',
    icon: SiVercel,
    color: '#000000',
  },
  {
    name: 'Heroku',
    icon: SiHeroku,
    color: '#430098',
  },

];

export default Skills;
