import {
  SiAmazonaws,
  SiAmazondynamodb,
  SiAwslambda,
  SiChakraui,
  SiDocker,
  SiExpress,
  SiGatsby,
  SiHeroku,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

const ProjectsData = [
  {
    id: 1,
    title: 'DSA',
    description:
      "I'm currently focusing on learning Data structures and algorithms to improve my problem solving skills!🎯",
    image:
      'https://leetcard.jacoblin.cool/sejaljain2043?theme=unicorn&width=350&height=200&border=0&radius=20',
    demo: 'https://leetcode.com/sejaljain2043/',
  },
  {
    id: 2,
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
    id: 3,
    title: 'Unscript.ai',
    description:
      'A platform that generates hyper personalized videos and help users to take their marketing to the next level.',
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
      {
        name: 'Jira',
        icon: SiJira,
        color: '#0052CC',
      },
    ],
    image: 'https://i.imgur.com/Oo3dqbY.png',
    github: '',
    demo: 'https://unscript.ai/',
    tag: 'SDE Intern',
  },
  {
    id: 4,
    title: 'CodeVerse',
    tech: [
      {
        name: 'Javascript',
        icon: SiJavascript,
        color: '#007ACC',
      },
      {
        name: 'React',
        icon: SiReact,
        color: '#61DAFB',
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
        name: 'Docker',
        icon: SiDocker,
        color: '#2496ED',
      },
      {
        name: 'Netlify',
        icon: SiNetlify,
        color: '#32e6e2',
      },
    ],
    description:
      'CodeVerse is a remote code executor which runs code snippets of various languages is like Javascript, C++ and Python.',
    image: 'https://i.imgur.com/vPpSeIz.png',
    demo: 'https://codeverse-frontend.netlify.app',
    github: 'https://github.com/sejaljain123/codeverse-frontend',
  },
  {
    id: 5,
    title: 'Portfolio',
    tech: [
      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: '#007ACC',
      },
      {
        name: 'Gatsby',
        icon: SiGatsby,
        color: '#663399',
      },
      {
        name: 'Chakra UI',
        icon: SiChakraui,
        color: '#319795',
      },
      {
        name: 'Vercel',
        icon: SiVercel,
        color: '#000000',
      },
    ],
    description: 'My personal website where you can see all my work and experiences',
    image: 'https://i.imgur.com/AyFy9R4.png',
    github: 'https://github.com/sejaljain123/portfolio',
    demo: 'https://portfolio-htmizf3iu-sejaljain123.vercel.app/',
  },
  {
    id: 6,
    title: 'Readit',
    tech: [
      {
        name: 'Javascript',
        icon: SiJavascript,
        color: '#007ACC',
      },
      {
        name: 'React',
        icon: SiReact,
        color: '#61DAFB',
      },
      {
        name: 'SASS',
        icon: SiSass,
        color: '#CC6699',
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
        name: 'MongoDB',
        icon: SiMongodb,
        color: '#47A248',
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
    ],
    description:
      'A blogging website which is made using MERN stack and is deployed on Heroku and Vercel.',
    image: 'https://i.imgur.com/CVZ9YKX.png',
    github: 'https://github.com/sejaljain123/readit',
    demo: 'https://readit-sejaljain123.vercel.app/',
  },
];

export default ProjectsData;
