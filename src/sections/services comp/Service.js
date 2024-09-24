import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Service.module.css';

export default function Service({title, description, icon}) {
  return (
    <div className={`${style.wrapper} col-md-5 col-sm-10`}>
        <FontAwesomeIcon className={style.icon} icon={icon} />
        <h3 className={style.serviceTitle}>{title}</h3>
        <p >{description}</p>
    </div>
  )
}
