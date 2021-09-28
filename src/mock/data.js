import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bailing Lan', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Bailing Lan',
  subtitle: "I'm a front-end developer",
  cta: 'More About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hello, I am Lan Bailing, a girl living in Chengdu, Sichuan. You can call me Miranda or Mira.',
  paragraphTwo:
    'Now I am studying Computer Science and Technology at the University of Electronic Science and Technology of China.',
  paragraphThree:
    'I am looking for a job as a front-end engineer. There is my resume in English below, if you are interested, you can click to read it.',
  resume: 'https://www.cakeresume.com/bailing-lan', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Questionnaire platform based on React',
    info: 'I worked as a front-end development member. I developed a questionnaire platform with my friends, using react, nodejs, mongodb, etc.',
    info2:
      'The main functional parts I realized are as follows: registration, login, new questionnaire, and edit questionnaire.',
    url: 'https://www.lbling.top/questionnaire/',
    repo: 'https://github.com/Miraling/questionnaire-survey-platform/tree/new2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Elimination game on Android platform developed in Java',
    info: 'I participated in the production of this elimination game as a software tester. In this development, I fully experienced the development process of Android applications.',
    info2:
      'I use black box testing, white box testing and other methods to design suitable test cases to cover 100% of the function points.',
    url: '#!',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to offer me a job opportunity or have other suggestions? Awesome!',
  btn: 'Email Me',
  email: 'lanbailing.ok@163.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Miraling',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
