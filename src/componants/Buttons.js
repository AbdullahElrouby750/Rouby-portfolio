import React from 'react'
import style from './Buttons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Buttons({icon,children,handelClick}) {
  return (
    <div className='d-flex justify-content-center align-items-center mx-1 w-100 mb-3' >
        <button className={`${style.myBtn} p-2 fs-4 text-light`} onClick = {handelClick}>
            {`${children} `}
            {icon && <FontAwesomeIcon icon={icon} />}
            </button>
    </div>
  )
}


