import { Benefit, Course } from './types'
import backend from '../assets/images/backend.jpg'
import blockchain from '../assets/images/blockchain.jpg'
import cloud_devops from '../assets/images/cloud_devops.jpg'
import cyber_security from '../assets/images/cyber_security.jpg'
import data_analysis from '../assets/images/data_analysis.jpg'
import frontend from '../assets/images/frontend.jpg'
import full_stack from '../assets/images/full_stack.jpg'
import collaboration from '../assets/images/collaboration.png'
import career_support from '../assets/images/career_support.png'
import learning_options from '../assets/images/learning_options.png'

export const courses: Course[] = [
  {
    img: backend,
    title: 'Backend Development',
    desc: 'Master the backbone of web applications. Explore server-side programming, databases, APIs, and frameworks like Node.js, and Django to build robust and scalable systems. ',
  },
  {
    img: blockchain,
    title: 'Blockchain Development',
    desc: 'Dive into the world of decentralized technology. Learn to build secure blockchain applications, smart contracts, and decentralized apps (dApps) using Ethereum, Solidity, and more.',
  },
  {
    img: cloud_devops,
    title: 'Cloud DevOps',
    desc: 'Learn to automate, deploy, and manage applications in the cloud. Gain expertise in tools like Docker, Kubernetes, AWS, and CI/CD pipelines to streamline development workflows.',
  },
  {
    img: cyber_security,
    title: 'Cyber Security',
    desc: 'Protect digital assets from cyber threats. Learn ethical hacking, network security, encryption, and risk management to safeguard systems and data.',
  },
  {
    img: data_analysis,
    title: 'Data Analysis',
    desc: 'Unlock insights from data. Learn to clean, analyze, and visualize data using tools like Python, SQL, Tableau, and Power BI to drive data-driven decisions.',
  },
  {
    img: frontend,
    title: 'Frontend Development',
    desc: 'Crafting stunning user interface. Master HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue to create responsive and interactive web experiences.',
  },
  {
    img: full_stack,
    title: 'Full Stack development',
    desc: 'Become a versatile developer. Learn both frontend and backend technologies to build end-to-end web applications from scratch.',
  },
]
export const coursesOptions: string[] = [
  'Backend Development',
  'Blockchain Development',
  'Cloud DevOps',
  'Cyber Security',
  'Data Analysis',
  'Frontend Development',
  'Full Stack development',
]
export const yesOrNoOptions: string[] = ['Yes', 'No']

export const benefits: Benefit[] = [
  {
    icon: learning_options,
    benefit: 'Flexible Learning Options Tailored to Fit Your Busy Lifestyle',
    desc: 'Our courses are designed to accommodate your schedule, ensuring you can learn at your own pace.',
  },
  {
    icon: career_support,
    benefit: 'Comprehensive Career Support to Help You Land Your Dream Job',
    desc: 'We provide resume workshops, interview prep, and networking opportunities to boost your career.',
  },
  {
    icon: collaboration,
    benefit:
      'Interactive Learning Environment to Foster Collaboration and Growth',
    desc: 'Engage with peers and instructors in a dynamic setting that encourages teamwork.',
  },
]
