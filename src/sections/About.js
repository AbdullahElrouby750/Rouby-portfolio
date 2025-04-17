import { useContext} from 'react';
import { sectionRef } from '../store/sectionRefContext';
import style from './about.module.css';

import ProfileImg from './about comp/ProfileImg';
import Pref from './about comp/Pref';

export default function About() {
    
    const Refs = useContext(sectionRef);
  return (
    <section ref={Refs.about}  className={`${style.about} p-2 pb-5`}>
      <ProfileImg />
      <Pref />
    </section>
  )
}
