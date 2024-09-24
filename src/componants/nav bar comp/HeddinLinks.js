import React ,{useContext}from 'react';
import classes from'./HeddinLinks.module.css';
import Links from './links';
import { sectionRef } from '../../store/sectionRefContext';

export default function HeddinLinks(props) {
  const Refs = useContext(sectionRef);
  return (
    <div ref={props.Ref} className={classes.wrapper}>
      <div className={classes.links}> <Links heddinBarRef = {props.Ref} vis = {props.vis} sectionName = 'Home' ID ={Refs.home}            /></div>
      <div className={classes.links}> <Links heddinBarRef = {props.Ref} vis = {props.vis} sectionName = 'About' ID ={Refs.about}          /></div>
      <div className={classes.links}> <Links heddinBarRef = {props.Ref} vis = {props.vis} sectionName = 'Services' ID = {Refs.services}   /></div>
      <div className={classes.links}> <Links heddinBarRef = {props.Ref} vis = {props.vis} sectionName = 'Projects' ID = {Refs.projects}/></div>
      <div className={classes.links}> <Links heddinBarRef = {props.Ref} vis = {props.vis} sectionName = 'Contact Us' ID ={Refs.contact}   /></div>
    </div>
  )
}
