import breakFree from 'src/assets/images/break-free.jpg';
import grocereaz from 'src/assets/images/grocereaz.JPG';
import studyCards from 'src/assets/images/study-cards.jpg';
import portfolio from 'src/assets/images/portfolio-v2.JPG';

export default [
  {
    id: 1,
    projectClass: 'grocereaz',
    slug: 'grocereaz',
    highlightedProject: 'grocereazIsHighlighted',
    projectName: 'Grocer\'eaz',
    image: grocereaz,
    alt: 'My end of studies project : Grocer\'eaz',
    about: 'This is my end of studies project: in a team of four students, we had to design and code a website. I was the product owner, and part of the frontend team. We used React for the front and Symfony for the back. Grocereaz displays recipes coming from an external API and enables the connected user to save his favorite recipes and to generate grocery lists from the recipes he would like to cook.',
    timing: 'We started this project in February 2020 and it lasted one month: one week of conception, two weeks of coding, one week for fixing the bugs and put the project online.',
    skillsUsed: ['React', 'Redux', 'Functional components', 'Axios', 'Git / Github', 'Styled Components', 'Responsive design', 'Semantic UI' ],
    skillsDiscovered: ['Agile method', 'Teamwork', 'APIs', 'Git conflicts', 'Wireframes'],
    projectUrl: 'http://ec2-3-95-187-31.compute-1.amazonaws.com/',
    gitHubUrl: 'https://github.com/JulieAllix/projet-grocereaz',
  },
  {
    id: 2,
    projectClass: 'breakFree',
    slug: 'break-free',
    highlightedProject: 'breakFreeIsHighlighted',
    projectName: 'Break Free',
    image: breakFree,
    alt: 'The game I created in JS: Break Free',
    about: "I started this project because I was curious about basic videogames design. I first followed <a href=\"https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript\">this mozilla tutorial</a>. Then I adapted the code to organize it differently, created variables enabling to design different levels quickly. And I added new functionalities : an input request to get the name of the player, 4 levels of difficulty, a connection to a database to send the score of the player and to display the top 20 scores for each level.",
    timing: 'This is my second personal project. I worked on it during the month of November 2019.',
    skillsUsed: ['JavaScript', 'Cookies', 'SQL / Databases'],
    skillsDiscovered: ['Canvas', '2D animation'],
    projectUrl: 'http://julieallix.com/project-break-free/',
    gitHubUrl: 'https://github.com/JulieAllix/break-free',
  },
  {
    id: 3,
    projectClass: 'portfolio',
    slug: 'portfolio',
    highlightedProject: 'portfolioIsHighlighted',
    projectName: 'This portfolio',
    image: portfolio,
    alt: 'My portfolio',
    about: 'This is my portfolio, presenting my personal projects. A first version developped with Lumen was created in January 2020, but I decided to create a new version developped in React.',
    timing: 'I worked on this project after the end of my bootcamp, in April 2020.',
    skillsUsed: ['React', 'Redux', 'Styled Components', 'Responsive Design'],
    skillsDiscovered: ['Class components', 'Unit tests'],
    projectUrl: 'http://portfolio-v1.julieallix.com/',
    gitHubUrl: 'https://github.com/JulieAllix/portfolio-v1-react',
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
    projectUrl: 'http://julieallix.com/project-study-cards/',
    gitHubUrl: 'https://github.com/JulieAllix/fiche-revisions-oclock',
  },
];
