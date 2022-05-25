import crwnClothing from '../../resources/crwnClothing.png'
import portfolio from '../../resources/portfolio.png'

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

}