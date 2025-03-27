import {faCode} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {PROJECTS} from "./Project.const";
import {BASE_CLOUDFRONT_URL} from "../const";

import './Projects.styles.scss'

const Header = () =>
  <div className={'projects-header'}>
    <h1>Personal Projects</h1>
    <p>Here are a few things I've worked on in my own time. My personal work is most comprised of tutorials through
      online courses.</p>
  </div>


interface TitleProps {
  link?: string;
  title: string;
}

const Title = ({link, title}: TitleProps) =>
  <div className={'title'}>
    <a href={link}>
      <FontAwesomeIcon icon={faCode} className={'code-link'}/>
    </a>
    <span>{title}</span>
  </div>


interface ImageProps {
  website?: string;
  title: string;
  image: string;
}

const Image = ({website, title, image}: ImageProps) =>
  <div className={'image-container'}>
    <a className={`image-link ${website && 'link'}`} {...(website && {href: website})}>
      <img src={`${BASE_CLOUDFRONT_URL}${image}`} alt={`${title}`}/>
    </a>
  </div>


interface DescriptionProps {
  desc: string;
}

const Description = ({desc}: DescriptionProps) =>
  <div className={'description'} dangerouslySetInnerHTML={{__html: desc}}/>

interface TechnologyProps {
  tech: string
}

const Technology = ({tech}: TechnologyProps) =>
  <div className={'tech'}>
    <h4>Technologies</h4>
    <p>{tech}</p>
  </div>


interface ContentProps {
  desc: string;
  tech: string;
  title: string;
  link?: string;
}

const Content = ({desc, tech, title, link}: ContentProps) =>
  <div className={'content'}>
    <Title link={link} title={title}/>
    <div className={'text'}>
      <Description desc={desc}/>
      <Technology tech={tech}/>
    </div>
  </div>


interface ProjectProps {
  title: string;
  desc: string;
  image: string;
  tech: string;
  website?: string;
}

const Project = ({title, desc, image, tech, website}: ProjectProps) =>
  <div className={'project'}>
    <Content title={title} desc={desc} tech={tech}/>
    <Image website={website} image={image} title={title}/>
  </div>

const Projects = () =>
  <div>
    <Header/>
    <div className={'projects'}>
      <Project {...PROJECTS.portfolio}/>
      <Project {...PROJECTS.crwnClothing}/>
      <Project {...PROJECTS.gladiator}/>
      <Project {...PROJECTS.css2022}/>
    </div>
  </div>

export default Projects;
