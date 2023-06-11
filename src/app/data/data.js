import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
import { CiLocationArrow1 } from 'react-icons/ci' 
import { SiTypescript, SiNextdotjs, SiReact, SiTailwindcss,SiPrisma } from 'react-icons/si';
import { DiHtml5, DiCss3, DiMongodb, DiFirebase } from 'react-icons/di';
import { BsWhatsapp } from 'react-icons/bs';

export const menuItems = [
    { label: 'Home',  link: '/'},
    { label: 'About',  link: '/about'},
    { label: 'Works',  link: '/projects'},
    { label: 'Contact',  link: '/contact'  },
  ];

  export const contactItems = [
    {
      name: "Email",
      icon: <AiOutlineMail />,
      link: "descometusah@gmail.com"
    },
    {
      name: "Phone Number",
      icon: <AiOutlinePhone />,
      link: "+234-901-970-3944"
    },
    {
      name: "Location",
      icon: <CiLocationArrow1 />,
      link: "Remote"
    }
  ]
  export const followus = [
    {
      "name": "Mail",
      "link": "mailto:descometusah@gmail.com",
      "icon": <AiOutlineMail />
    },
    {
      "name": "Twitter",
      "link": "https://www.twitter.com/devdesco",
      "icon": <FaTwitter />
    },
    {
      "name": "Github",
      "link": "https://www.github.com/Phenoo",
      "icon": <FaGithub />
    },
    {
      "name": "LinkedIn",
      "link": "https://www.linkedin.com/in/eze-paschal-158457233/",
      "icon": <FaLinkedin/>
    },
    {
      "name": "Whatsapp",
      "link": "https://wa.link/zk5jhp",
      "icon": <BsWhatsapp />
    }
  ]



export const skills = [
  { value: 'TypeScript', icon: <SiTypescript /> , color: '#3178C6', count: 40 },
  { value: 'Next.js', icon: <SiNextdotjs />, color: '#FF0FF', count: 18 },
  { value: 'React.js', icon: <SiReact />, color: '#61DAFB', count: 38 },
  { value: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38B2AC', count: 30 },
  { value: 'HTML', icon: <DiHtml5 />, color: '#E34F26', count: 28 },
  { value: 'CSS', icon: <DiCss3 />, color: '#2965F1', count: 25 },
  { value: 'Prisma', icon: <SiPrisma />, color: '#fffff', count: 33 },
  { value: 'MongoDB', icon: <DiMongodb />, color: '#47A248', count: 20 },
  { value: 'Firebase', icon: <DiFirebase />, color: '#FFCA28', count: 17 },
];

