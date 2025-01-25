import {Link, Outlet} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloudArrowDown, faHouse} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

import resume from '../../resources/currentResume-v3.pdf'

import './Navigation.syles.scss'

const Header = () =>
  <>
    <div className={'nav'}>
      <div className={'top navigation'}>
        <Link to={'/'} className={'icon-container'}>
            <FontAwesomeIcon icon={faHouse}/>
        </Link>
        <a href={'https://github.com/sylvandor'} className={'icon-container'}>
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a href={'https://linkedin.com/in/scottwwj'} className={'icon-container'}>
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
      </div>

      <div className={'divider'}/>
      <div className={'bottom navigation'}>
        <Link to={'/bio'}>Bio</Link>
        <Link to={'/projects'}>Projects</Link>
        <Link to={'/laser'}>Laser</Link>
        <a href={resume} download={'scott_johnson_resume.pdf'}>
          Resume <FontAwesomeIcon icon={faCloudArrowDown}/>
        </a>
      </div>
    </div>
    <main className={'main-content'}>
      <Outlet/>
    </main>
  </>

export default Header;