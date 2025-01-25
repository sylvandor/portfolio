import {Hex} from "../misc/Hex.component";

import './Home.styles.scss';
import profile from '../../resources/profile.png'

const Home = () =>
  <div className={'home'}>
    <h1 className={'name'}>Hi, I'm Scott</h1>
    <div className={'image-container'}>
      <Hex className={'outer'}>
        <Hex image={profile} className={''}>{null}</Hex>
      </Hex>
    </div>
    <h1 className={'welcome'}>
      Welcome,
    </h1>
    <h3>
      I'm a passionate software engineer and technical lead with over 11 years of experience solving complex frontend challenges and delivering user-focused web applications. I specialize in React and Redux, creating intuitive interfaces that enhance usability and drive efficiency. While I’m passionate about improving frontend experiences, I bring extensive backend expertise, designing and implementing scalable systems to ensure reliability and performance.
    </h3>
    <h3>
      Whether it’s streamlining enterprise workflows at Block Inc. (Square) or developing mission-critical tools for the Department of Defense, I’m committed to building technology that solves real-world problems and makes a difference for the people who use it.
    </h3>
  </div>;

export default Home;