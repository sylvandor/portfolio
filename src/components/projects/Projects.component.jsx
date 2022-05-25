import {faCode} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {PROJECTS} from "./Project.const";

import './Projects.styles.scss'

const Header = () =>
  <div className={'projects-header'}>
    <h1>Personal Projects</h1>
    <h3>Here are a few things I've worked on in my own time. My personal work is most comprised of tutorials or online
      courses through online courses.</h3>
  </div>

const Title = ({link, title}) =>
  <div className={'title'}>
    <a href={link} target={'_blank'} rel="noreferrer">
      <FontAwesomeIcon icon={faCode} className={'code-link'}/>
    </a>
    <span>{title}</span>
  </div>

const Content = ({desc, tech, website, image, title}) =>
  <div className={'content'}>
    <div className={'text'}>
      <h4>Description</h4>
      <div dangerouslySetInnerHTML={{__html: desc}}/>
      <h4>Technologies</h4>
      <p>{tech}</p>
    </div>
    <a className={`image-container ${website && 'link'}`} {...(website && {href: website})}>
      <img src={image} alt={`${title}`}/>
    </a>
  </div>

const Project = ({title, desc, image, link, tech, website}) =>
  <div className={'project'}>
    <Title link={link} title={title}/>
    <Content title={title} desc={desc} image={image} tech={tech} website={website}/>
  </div>

const Projects = () => <div>
  <Header/>
  <div className={'projects'}>
    <Project {...PROJECTS.crwnClothing}/>
  </div>
</div>;

export default Projects;