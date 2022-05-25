import {Link, Outlet} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse, faCloudArrowDown} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

import resume from '../../resources/testfile.txt'

import './Navigation.syles.scss'

const Header = () =>
  <>
    <div className={'header'}>
      <div className={'left navigation'}>
        <Link to={'/'} className={'icon-container'}>
          <FontAwesomeIcon icon={faHouse}/>
        </Link>
        <a href={'https://github.com/sylvandor'} target={'_blank'} rel="noreferrer">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a href={'https://linkedin.com/in/scottwwj'} target={'_blank'} rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
      </div>
      <div className={'right navigation'}>
        <Link to={'/projects'}>Projects</Link>
        <Link to={'/personal'}>Personal</Link>
        <a href={resume} download={'scott_johnson_resume.txt'}>
          Resume <FontAwesomeIcon icon={faCloudArrowDown}/>
        </a>
      </div>
    </div>
    <main className={'main-content'}>
      <Outlet/>
    </main>
  </>

export default Header;