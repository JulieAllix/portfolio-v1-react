import breakFree from 'src/assets/images/break-free.jpg';
import grocereaz from 'src/assets/images/grocereaz.JPG';
import studyCards from 'src/assets/images/study-cards.jpg';
import portfolio from 'src/assets/images/portfolio.JPG';

export default [
  {
    id: 1,
    projectClass: 'grocereaz',
    slug: 'grocereaz',
    highlightedProject: 'grocereazIsHighlighted',
    projectName: 'Grocer\'eaz',
    image: grocereaz,
    alt: 'My end of studies project : Grocer\'eaz',
  },
  {
    id: 2,
    projectClass: 'breakFree',
    slug: 'break-free',
    highlightedProject: 'breakFreeIsHighlighted',
    projectName: 'Break Free',
    image: breakFree,
    alt: 'The game I created in JS: Break Free',
  },
  {
    id: 3,
    projectClass: 'portfolio',
    slug: 'portfolio',
    highlightedProject: 'portfolioIsHighlighted',
    projectName: 'This portfolio',
    image: portfolio,
    alt: 'My portfolio',
  },
  {
    id: 4,
    projectClass: 'studyCards',
    slug: 'study-cards',
    highlightedProject: 'studyCardsIsHighlighted',
    projectName: 'Study Cards',
    image: studyCards,
    alt: 'My first personal project: Study Cards',
    about: 'The aim of this project was to help me learning the basics of html and css by mixing theory and practice. Those are study cards where I can find useful tips I learned in class (theory) in the shape of a website (practice). I added a toggle switch giving the opportunity to the user to choose between two themes.',
    timing: 'This was my first personal project. I worked on it during the very first weeks of my training (October 2019), and progressively updated it with the new knowledge I acquired.',
    skillsUsed: ['HTML', 'CSS', 'Flexbox'],
    skillsDiscovered: ['CSS variables', 'Theme switch'],
    projectUrl: '',
    gitHubUrl: 'https://github.com/JulieAllix/fiche-revisions-oclock',
  },
];
