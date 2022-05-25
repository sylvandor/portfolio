import pic from '../../resources/portfolio.png';

import './Home.styles.scss';

const Home = () =>
  <div className={'home'}>
    <h1 className={'name'}>Scott Johnson</h1>
    <div className={'image-container'}>
      <img src={pic} alt={'profile pic'}/>
    </div>

    <h1>
      Welcome,
    </h1>
    <h2>As you can tell, my name's Scott.</h2>
    <h3>
      I'm a software engineer. I decided to make this page as a portfolio for my professional work and
      talk about myself a bit. Feel free to navigate with the links up top.
    </h3>
  </div>;

export default Home;