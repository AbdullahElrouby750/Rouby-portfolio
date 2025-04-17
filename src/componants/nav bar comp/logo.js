import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'; 
import style from './logo.module.css'

const navigateHome = (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
export default function Logo() {

  return (
    <div className={style.logoWrapper} onClick={navigateHome}>
        <FontAwesomeIcon icon={faLaptopCode} className={style.logo}/>
        <span className={style.logoText}>Rouby</span>
    </div>
  )
}
