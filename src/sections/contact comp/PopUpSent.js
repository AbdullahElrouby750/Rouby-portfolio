import React from 'react';
import style from './PopUpSent.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';



export default function popUpSent({sent, setSent}) {
  return (
    <div className={`${style.popUpwindow} ${sent === "true" && style.success} ${sent === "false" && style.failure} ${(sent !== "true" && sent !== "false") && style.hide}`}>
        <p>
          {sent === "true" && 'Succese'}
          {sent === "false" && 'Failed'}
        </p>
        {(sent === "true" || sent === "false") && <FontAwesomeIcon icon={(sent === "true" && faCheck) || (sent === "false" && faXmark)} />}
        <button onClick={()=>{setSent(null)}} className={`${style.btn} btn ${sent === "true" && 'btn-success'} ${sent === "false" && 'btn-danger'}`}>Ok</button>
    </div>
  )
}