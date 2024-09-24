import React from 'react'
import style from './Titles.module.css'

export default function Titles({title}) {
  return (
    <div className={style.titles}><p>{title}</p></div>
  )
}
