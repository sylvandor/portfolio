import {Link, Outlet} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'
import resume from '../../resources/testfile.txt'

import './Navigation.syles.scss'

const Header = () =>
  <>
    <div className={'header'}>
      <Link to={'/'} className={'icon-container'}>
        <FontAwesomeIcon icon={solid('house')}/>
      </Link>
      <div className={'navigation'}>
        <Link to={'/projects'}>Projects</Link>
        <Link to={'/personal'}>Personal</Link>
        <a href={resume} download={'scott_johnson_resume.txt'}>
          Resume <FontAwesomeIcon icon={solid('cloud-arrow-down')}/>
        </a>
      </div>
    </div>
    <Outlet/>
  </>

export default Header;