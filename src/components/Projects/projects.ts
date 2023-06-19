import {
  SiAmazonaws,
  SiAmazondynamodb,
  SiAwslambda,
  SiChakraui,
  SiDocker,
  SiExpress,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const ProjectsData = [
  {
    id: 1,
    title: 'SimpleShop',
    description: 'A simple invoice generating web application for small businesses.',
    tech: [
      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: '#007ACC',
      },
      {
        name: 'React',
        icon: SiReact,
        color: '#61DAFB',
      },
      {
        name: 'TailwindCSS',
        icon: SiTailwindcss,
        color: '#06B6D4',
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
        name: 'PostgreSQL',
        icon: SiPostgresql,
        color: '#336791',
      },
      {
        name: 'Docker',
        icon: SiDocker,
        color: '#2496ED',
      },
      {
        name: 'AWS',
        icon: SiAmazonaws,
        color: '#FF9900',
      },
    ],
    image: 'https://i.imgur.com/RMAMJ7T.jpg',
    github: 'https://github.com/sejaljain123/simpleshop-backend',
    demo: '',
    tag: '',
  },
  {
    id: 2,
    title: 'Unscript.ai',
    description: 'A platform that helps user to take their marketing to the next level',
    tech: [
      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: '#007ACC',
      },
      {
        name: 'Next.js',
        icon: SiNextdotjs,
        color: '#000000',
      },
      {
        name: 'Chakra UI',
        icon: SiChakraui,
        color: '#319795',
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
        name: 'AWS',
        icon: SiAmazonaws,
        color: '#FF9900',
      },
      {
        name: 'AWS Lambda',
        icon: SiAwslambda,
        color: '#FF9900',
      },
      {
        name: 'AWS DynamoDB',
        icon: SiAmazondynamodb,
        color: '#FF9900',
      },
    ],
    image: 'https://i.imgur.com/Oo3dqbY.png',
    github: '',
    demo: 'https://unscript.ai/',
    tag: 'SDE Intern',
  },
  {
    id: 3,
    title: 'DSA',
    description:
      "I'm currently focusing on learning Data structures and algorithms to improve my problem solving skills",
    image:
      'https://leetcard.jacoblin.cool/sejaljain2043?theme=unicorn&width=350&height=200&border=0&radius=20',
    demo: 'https://leetcode.com/sejaljain2043/',
  },
];

export default ProjectsData;
