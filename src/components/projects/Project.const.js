import crwnClothing from '../../resources/crwnClothing.png'
import portfolio from '../../resources/portfolio.png'
import gladiator from '../../resources/gladiator.png'

export const PROJECTS = {
  portfolio: {
  title: 'Portfolio',
    link: 'https://github.com/sylvandor/portfolio',
    desc: "You Are Here 📍 I decided that it was about time for me to create " +
      "my own portfolio web resume. So this is it. Currently it's still in its early stages, but every project has to " +
      "start somewhere.",
    tech: 'React, Netlify, Google Domain',
    image: portfolio,
    website: 'http://scottwwj.com'
  },
  crwnClothing: {
    title: 'Crwn Clothing',
    link: 'https://github.com/sylvandor/crwn-clothing',
    desc: "I build this website as part of the React course " +
      "<a href='https://www.udemy.com/course/complete-react-developer-zero-to-mastery/'>Complete React Developer in 2022</a>. " +
      "Even though I've been doing react for awhile, I took the course as a means to fill any knowledge gaps that I had. " +
      "I actually ended up learning a good amount more than expected, and it led to me majorly refactoring a work project " +
      "for performance, cutting load times nearly in half.",
    tech: 'React, Redux, Firebase Auth, Firestore, Styled Components, Redux Thunk, Redux Persist, Redux Saga, Netlify, Stripe, Typescript',
    image: crwnClothing,
    website: 'https://cerulean-macaron-d14353.netlify.app/'
  },
  gladiator: {
    title: 'Gladiator',
    link: 'https://github.com/sylvandor/Gladiator',
    desc: "This one doesn't have a lot of work done on it just yet...It's really just a bunch of math. I started this " +
      "because the game <a href='https://boardgamegeek.com/boardgame/1693/gladiator'>Gladiator</a> was my Father in Law's " +
      "favorite board game way back when. So, I started this as a means to hopefully one day be able to play this game with " +
      "him online in the future. Until then, we'll just have to stick to in person visits. This had the super interesting " +
      "problem to try to solve of dealing a hex gaming board. Def not as straight forward as a grid.",
    tech: 'HTML5 canvas, Math',
    image: gladiator
  }
}