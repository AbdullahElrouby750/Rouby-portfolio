import { useContext, useState } from 'react'
import { sectionRef } from '../store/sectionRefContext';

import Titles from '../componants/Titles';
import Category from './projects comp/Category';
import ProjectsCollection from './projects comp/ProjectsCollection';

import style from './Projects.module.css';

export default function Projects() {
  const [projects, setProjects] = useState({});

  const [activeCategory, setActiveCategory] = useState('Front-end');
  

  const toggleCategory = (category) => {
    setActiveCategory(category); // Set the clicked category as active
  };

  const Refs = useContext(sectionRef);
  const feProjects = 'feProjects';
  const beProjects = 'beProjects';
  const maProjects = 'maProjects';
  return (
    <section ref={Refs.projects} className={style.projects}>
      <Titles title='Projects' />
      <div className=' d-flex w-100 justify-content-center'>
        <Category catID={feProjects} category='Front-end' toggle={() => toggleCategory('Front-end')} state={activeCategory === 'Front-end'} />
        <Category catID={beProjects} category='Back-end' toggle={() => toggleCategory('Back-end')} state={activeCategory === 'Back-end'} />
        <Category catID={maProjects} category='Mobile-app' toggle={() => toggleCategory('Mobile-app')} state={activeCategory === 'Mobile-app'} />
      </div>
      <div className={style.projectsWrapper}>

      <div id='feProjects' className={`${style.category} ${style.frontend} ${ activeCategory === 'Front-end' ? style.show : style.hide}`}>
        <ProjectsCollection projects={projects} setProjects={setProjects} targetProjects='frontEnd'/>
      </div>
      <div id='beProjects' className={`${style.category} ${style.backend} ${ activeCategory === 'Back-end' ? style.show : style.hide}`}>
      <ProjectsCollection projects={projects} setProjects={setProjects} targetProjects='backEnd'/>

      </div>
      <div id='maProjects' className={`${style.category} ${style.mobileapp} ${ activeCategory === 'Mobile-app' ? style.show : style.hide}`}>
      <ProjectsCollection projects={projects} setProjects={setProjects} targetProjects='mobileApp'/>

      </div>
      </div>
    </section>
  )
}
