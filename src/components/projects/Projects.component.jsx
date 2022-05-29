import {faCode} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {PROJECTS} from "./Project.const";

import './Projects.styles.scss'

const Header = () =>
  <div className={'projects-header'}>
    <h1>Personal Projects</h1>
    <h3>Here are a few things I've worked on in my own time. My personal work is most comprised of tutorials through
      online courses.</h3>
  </div>

const Title = ({link, title}) =>
  <div className={'title'}>
    <a href={link}>
      <FontAwesomeIcon icon={faCode} className={'code-link'}/>
    </a>
    <span>{title}</span>
  </div>

const Image = ({website, title, image}) =>
  <div className={'image-container'}>
    <a className={`image-link ${website && 'link'}`} {...(website && {href: website})}>
      <img src={image} alt={`${title}`}/>
    </a>
  </div>

const Description = ({desc}) =>
  <div className={'description'} dangerouslySetInnerHTML={{__html: desc}}/>

const Technology = ({tech}) =>
  <div className={'tech'}>
    <h4>Technologies</h4>
    <p>{tech}</p>
  </div>

const Content = ({desc, tech, title, link}) =>
  <div className={'content'}>
    <Title link={link} title={title}/>
    <div className={'text'}>
     <Description desc={desc}/>
      <Technology tech={tech}/>
    </div>
  </div>

const Project = ({title, desc, image, tech, website}) =>
  <div className={'project'}>
    <Content title={title} desc={desc} image={image} tech={tech} website={website}/>
    <Image website={website} image={image} title={title}/>
  </div>

const Projects = () => <div>
  <Header/>
  <div className={'projects'}>
    <Project {...PROJECTS.portfolio}/>
    <Project {...PROJECTS.crwnClothing}/>
    <Project {...PROJECTS.gladiator}/>
    <Project {...PROJECTS.css2022}/>
  </div>
</div>;

export default Projects;
