import {Link, Outlet} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'

import './Navigation.syles.scss'

const Header = () =>
  <>
    <div className={'header'}>
      <Link to={'/'} className={'icon-container'}>
        <FontAwesomeIcon icon={solid('house')}/>
      </Link>
      <div className={'navigation'}>
        <Link to={'/resume'}>Resume</Link>
        <Link to={'/projects'}>Projects</Link>
        <Link to={'/personal'}>Personal</Link>
      </div>
    </div>
    <Outlet/>
  </>

export default Header;