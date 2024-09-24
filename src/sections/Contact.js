import { useContext, useRef, useState } from 'react'
import { sectionRef } from '../store/sectionRefContext';
import style from './Contact.module.css';

import Titles from '../componants/Titles';
import Buttons from '../componants/Buttons';
import PopUpSent from './contact comp/PopUpSent';


//function not componant
import { handelClick } from './contact comp/contact logic';

export default function Contact() {

  const Refs = useContext(sectionRef);

  const [sent, setSent] = useState(null);

  const NameRef = useRef(null);
  const EmailRef = useRef(null);
  const SubjectRef = useRef(null);
  const BodyRef = useRef(null);


  return (
    <section ref={Refs.contact} className={style.contact}>
      <Titles title="Contact Me" />

      <div className='row justify-content-around w-75 mb-2'>
        <div className=' w-100 p-0 d-flex justify-content-between'>
          <input ref={NameRef} placeholder='Name.' type="text" className={` bg-dark text-light form-control my-3 ${style.input}  ${style.inputs}`} />
          <input ref={EmailRef} placeholder='Email.' type="email" className={` bg-dark text-light form-control my-3 ${style.input} ${style.inputs}`} />

        </div>
        <input ref={SubjectRef} placeholder='Subject.' type="text" className={` bg-dark text-light  form-control my-3 ${style.inputs}`} />
        <textarea ref={BodyRef} placeholder='Content here.' type="text" className={` bg-dark text-light  form-control my-3 ${style.inputs}`} />
      </div>

      <div className='d-flex justify-content-start'>
        <Buttons handelClick={() => { handelClick(NameRef.current, EmailRef.current, SubjectRef.current, BodyRef.current, setSent) }}>Send Email</Buttons>
      </div>

      <PopUpSent sent={sent} setSent={setSent}/>
    </section>
  )
}

//service_s1ttztm
//template_htrnwqk
