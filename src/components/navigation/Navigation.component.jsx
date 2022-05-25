import {Link, Outlet} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse, faCloudArrowDown} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

import resume from '../../resources/currentResume.pdf'

import './Navigation.syles.scss'

const Header = () =>
  <>
    <div className={'header'}>
      <div className={'left navigation'}>
        <Link to={'/'} className={'icon-container'}>
          <FontAwesomeIcon icon={faHouse}/>
        </Link>
        <a href={'https://github.com/sylvandor'}>
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a href={'https://linkedin.com/in/scottwwj'}>
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
      </div>
      <div className={'right navigation'}>
        <Link to={'/projects'}>Projects</Link>
        <Link to={'/personal'}>Personal</Link>
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