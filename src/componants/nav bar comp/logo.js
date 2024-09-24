import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'; 
import style from './logo.module.css'

export default function Logo() {
  return (
    <div className={style.logoWrapper}>
        <FontAwesomeIcon icon={faLaptopCode} className={style.logo}/>
        <span className={style.logoText}>Rouby</span>
    </div>
  )
}
