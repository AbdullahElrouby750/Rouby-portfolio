import React from 'react'
import style from'./links.module.css'


export default function Links(props) {
    function scrollTo (target){
      if(props.vis){
          props.heddinBarRef.current.style.transform = 'translateY(-60%)';
          props.vis(false)
        }
        target.scrollIntoView({behavior: "smooth"})
        console.log(target);
        
    }


  return (
    <p className={style.links} onClick={(event) => {
      event.stopPropagation();
      scrollTo(props.ID.current)
    }}
    >{props.sectionName}.</p>
  )
}