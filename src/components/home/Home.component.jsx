import pic from '../../resources/profile.png';

import './Home.styles.scss';

const Home = () =>
  <div className={'home'}>
    <h1 className={'name'}>Hi, I'm Scott</h1>
    <div className={'image-container'}>
      <img src={pic} alt={'profile pic'}/>
    </div>
    <h1 className={'welcome'}>
      Welcome,
    </h1>
    <h3>
      I'm a software engineer. I decided to make this page as a portfolio for my professional work and
      talk about myself a bit. Feel free to navigate with the links up top.
    </h3>
  </div>;

export default Home;