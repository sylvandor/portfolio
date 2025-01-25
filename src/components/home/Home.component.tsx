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
      I'm a software engineer. I decided to make this page as a portfolio for my professional work and
      talk about myself a bit. While I've spent most of my career working on overly complex Java projects,
      I've really found a passion for building UIs. Of late, that's manifested in React webpages.
    </h3>
    <h3>
      Anyway, welcome to my WIP portfolio site. If you want to connect with me, please do so via LinkedIn.
    </h3>
  </div>;

export default Home;