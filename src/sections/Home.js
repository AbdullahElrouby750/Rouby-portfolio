import { useContext} from 'react'
import { sectionRef } from '../store/sectionRefContext';
import style from './Home.module.css'

export default function Home() {
    const Refs = useContext(sectionRef);
  return (
    <section ref={Refs.home}  className={`${style.home} d-flex flex-column justify-content-center align-items-center text-light`}>
      <div className={style.layer}></div>
      <div className='z-1 text-center fs-1 fw-bold'>
        <p>Hello I'm</p>
        <p className={style.name}>Abdullah Elrouby</p>
        <div className={style.slider}>
          <h2 className={style.pro}>Professional Web Designer</h2>
        </div>
      </div>
    </section>
  )
}
