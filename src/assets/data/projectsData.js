import breakFree from 'src/assets/images/break-free.jpg';
import grocereaz from 'src/assets/images/grocereaz.JPG';
import studyCards from 'src/assets/images/study-cards.jpg';

export default [
  {
    id: 1,
    projectClass: 'grocereaz',
    highlightedProject: 'grocereazIsHighlighted',
    projectName: 'Grocer\'eaz',
    image: grocereaz,
    alt: 'My end of studies project : Grocer\'eaz',
  },
  {
    id: 2,
    projectClass: 'portfolio',
    highlightedProject: 'portfolioIsHighlighted',
    projectName: 'This portfolio',
    image: '',
    alt: '',
  },
  {
    id: 3,
    projectClass: 'breakFree',
    highlightedProject: 'breakFreeIsHighlighted',
    projectName: 'Break Free',
    image: breakFree,
    alt: 'The game I created in JS: Break Free',
  },
  {
    id: 4,
    projectClass: 'studyCards',
    highlightedProject: 'studyCardsIsHighlighted',
    projectName: 'Study Cards',
    image: studyCards,
    alt: 'My first personal project: Study Cards',
  },
];