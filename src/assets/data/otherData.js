import oclock from 'src/assets/images/oclock.png';
import julie from 'src/assets/images/julie.jpg';

export default [
  {
    id: 1,
    image: oclock,
    alt: 'Logo of O\'clock, the school where I did my bootcamp',
    title: 'About my training @ O\'clock',
    url: 'https://oclock.io/',
    buttonContent: 'Learn more about this training (FR)',
    content: [
      {
        id: 1,
        title: 'A virtual classroom',
        icon: 'computer',
        paragraphs: [
          {
            id: 1,
            text: 'O\'clock is a French school based on a "<em>teleworking</em>" model : there is a virtual classroom enabling the teachers to teach from home, and the students to learn from home as well. The interface shows the screen & webcam of the teacher, and there is a chat enabling the students to interact with the teacher and the other students. There is no time lost in the public transportations, which means more time to sleep, and more time to study or work on personal projects.',
          },
        ],
      },
      {
        id: 2,
        title: 'The organization of the class',
        icon: 'folder open outline',
        paragraphs: [
          {
            id: 1,
            text: 'Every weekday, there is a theoretical class from 9AM to 3-3.30PM, with 1 hour of lunch break. Then, the students have to work on a "challenge" (practical exercise) by themselves for 2 hours. The challenge is corrected in class the next day.',
          },
          {
            id: 2,
            text: 'The training I was in is based of three months for learning the basics to become a web developer (<em>html, css, php, js, sql</em>), then one month of specialization (<em>Symfony, React, or Wordpress</em>). And then one month of full-time team-project (the "Apotheosis").',
          },
          {
            id: 3,
            text: 'Each big topic is part of an eight-working-days session.',
          },
        ],
      },
      {
        id: 3,
        title: 'A training with a lot of practical exercises',
        icon: 'pencil alternate',
        paragraphs: [
          {
            id: 1,
            text: 'In addition to the two-hours challenges the students get every working-day, in each session, the students always have at least one day of peer-programming, which helps them to learn how to work in teams.',
          },
          {
            id: 2,
            text: 'At the end of each session, there is half a day of exercises in order to enable the students to check where they stand in their learning of the developer\'s skills.',
          },
          {
            id: 3,
            text: 'And as mentioned above, the training ends with one month of <em>full-time project in teams</em>, in autonomy, to experiment the real work conditions.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    image: julie,
    alt: 'Julie Allix',
    title: 'About me',
    url: 'https://julieallix.wordpress.com/',
    buttonContent: 'Feel free to checkout my Wordpress if you are curious about my Photoshop and sewing creations !',
    content: [
      {
        id: 1,
        title: '',
        icon: 'computer',
        paragraphs: [
          {
            id: 1,
            text: 'Hello, my name is Julie and I\'m a French Web Developer. I love all kind of <em>creative</em> activities: after having experimented drawing, doing Photoshop designs, sewing, I now express my creativity by coding. I also love dogs and everything related to the 80\'s !',
          },
          {
            id: 2,
            text: 'After getting my Master\'s degree from a Business School, I started my career in 2015 in the Supply Chain as a Distribution Planner for Saint Laurent Paris. Very quickly, I started learning Visual Basics in order to automatize my weekly reports on Excel. That\'s how I discovered my passion for coding.',
          },
          {
            id: 3,
            text: 'I see any coding challenge like a <em>riddle</em> to solve. I\'m addicted to the rewarding feeling I get when I solve a bug.',
          },
          {
            id: 4,
            text: 'I started learning on my own on OpenClassrooms.com, and decided to pursue my dream of turning this passion into my job. In October 2019, I started a full-time five-months-training with O\'clock and moved from Paris to Barcelona.',
          },
        ],
      },
    ],
  },
];
