import {BASE_CLOUDFRONT_URL} from "../const";

import './Home.styles.scss';

const IMAGE_URL = `${BASE_CLOUDFRONT_URL}scott_snowboard.png`;

const Home = () =>
  <div className={'home'}>
    <div className={'title'}>Scott Johnson</div>
    <div className={'home-content'}>
      <div>
        <div className={'image-container'}>
          <div className={'profile-image'} style={{backgroundImage: `url(${IMAGE_URL})`}}></div>
        </div>
      </div>
      <div className={'right'}>
        <div className={'text'}>
          Fullstack Engineer
        </div>
        <div className={'text'}>
          Technical Lead
        </div>
      </div>
    </div>
  </div>;

export default Home;