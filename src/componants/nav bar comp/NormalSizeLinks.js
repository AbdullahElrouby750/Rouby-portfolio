import React,{useContext} from 'react'
import Links from './links'
import Logo from './logo'
import { sectionRef } from '../../store/sectionRefContext'

import classes from './NormalSizeLinks.module.css'
export default function NormalSizeLinks() {
  const Refs = useContext(sectionRef);
  return (
    <div className={`${classes.wrapeer} justify-content-around align-items-center w-100 `}>

      <Logo />
      <Links sectionName='Home' ID={Refs.home} />
      <Links sectionName='About' ID={Refs.about} />
      <Links sectionName='Services' ID={Refs.services} />
      <Links sectionName='Projects' ID={Refs.projects} />
      <Links sectionName='Contact Us' ID={Refs.contact} />
    </div>
  )
}
