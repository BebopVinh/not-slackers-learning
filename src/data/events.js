import frontendLogo from '../images/frontend-logo.svg'
import nodejs from '../images/nodejs.png'
import undrawCode from '../images/undraw-code.svg'

const newLessons = {
  days: 'Mon/Thurs',
  description:
    'Learn how to build a backend API using Node and the popular Express framework. All in JavaScript. May start with REST then move onto GraphQL. We will go over the Nodejs course from CodeWithMosh.',
  imgUrl: nodejs,
  lead: 'Vinh',
  tags: ['#nodejs', '#express'],
  time: '10AM - 11AM Subject to Change Based on Needs',
  title: 'Backend with Node',
}

const frontend = {
  days: 'Tues/Wed/Fri',
  description:
    'Sharpen and hone your Frontend and UI/UX skills by completing challenges from frontendmentor.io',
  imgUrl: frontendLogo,
  lead: 'Kenneth',
  tags: ['#react', '#css'],
  time: '10AM - 11AM Subject to Change Based on Needs',
  title: 'React Training',
}

const clinicOffice = {
  days: 'Everyday',
  description: `Get help with your personal project or portfolio. Ask questions about lessons. It's all open ended!`,
  imgUrl: undrawCode,
  lead: 'Kenneth & Vinh',
  tags: ['#collab'],
  time: '11AM or after lesson hour',
  title: 'Office Hours and Project Clinic',
}

export const eventsArray = [newLessons, frontend, clinicOffice]
