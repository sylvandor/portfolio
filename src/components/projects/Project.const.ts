import crwnClothing from '../../resources/crwnClothing.png'
import portfolio from '../../resources/portfolio.png'
import gladiator from '../../resources/gladiator.png'
import css2022 from '../../resources/css_2022.png'

export const PROJECTS = {
  portfolio: {
  title: 'Portfolio',
    link: 'https://github.com/sylvandor/portfolio',
    desc: "You Are Here 📍",
    tech: 'React, Redux, Typescript, Netlify, Google Domain',
    image: portfolio,
    website: 'https://scottwwj.com'
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
    image: gladiator,
    website: 'https://6292c4aaf71d0a5df5eb4416--timely-fox-5807fe.netlify.app'
  },
  css2022: {
    title: 'CSS Complete Guide - 2022',
    link: 'https://github.com/sylvandor/CSS_CompleteGuide_2022',
    desc: "This is a project that I'm doing while going through the Udemy course " +
      " <a href='https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/'>CSS - The Complete Guide 2022</a>." +
      " My team at Block decided that we wanted to more completely learn in the ins and outs of CSS, so we started this together " +
      "and discuss weekly. It's been quite interesting learning more specifics on how and why CSS works the way that it does." +
      " I can safely admit that I've already learned more than expected in the first six sections.",
    tech: 'CSS3',
    image: css2022,
    website: 'https://6292ba6f307cc55a9e2036f2--bucolic-figolla-3048a5.netlify.app'
  }
}