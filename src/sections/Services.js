import { useContext } from 'react'
import { sectionRef } from '../store/sectionRefContext';

import style from './Services.module.css';

import Titles from '../componants/Titles';
import Service from './services comp/Service';

import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

export default function Services() {

  const Refs = useContext(sectionRef);

  const service1 = 'Complete project handling from inception to delivery.';
  const service2 = 'Expert help with specific tasks, feature enhancements, and debugging.';
  const service3 = 'Regular updates, optimizations, and security for maintaining code health.';
  const service4 = 'Crafting designs that ensure seamless functionality across all devices.';


  return (
    <div ref={Refs.services} className={style.services}>
      <Titles title='Services' />
      <section className='m-0 row justify-content-center'>
        <Service title='Full Project Development' icon={faProjectDiagram} description={service1} />
        <Service title='Task-Based Assistance' icon={faTasks} description={service2} />
        <Service title='Code Maintenance' icon={faToolbox} description={service3} />
        <Service title='Responsive Design' icon={faMobileAlt} description={service4} />

      </section>
    </div>
  )
}
