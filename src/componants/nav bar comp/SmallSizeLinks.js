import React, {useRef, useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'; 
import style from './SmallSizeLinks.module.css';

import Logo from './logo'
import HeddinLinks from './HeddinLinks';

export default function SmallSizeLinks(props) {
    const heddinBarRef = useRef(null);
    const [barvisibility,setBarVisibility] = useState(false);

    const showHeddinBar = (event) => {
        event.stopPropagation()
        if(!barvisibility){
            heddinBarRef.current.style.transform = 'translateY(40%)'
            setBarVisibility(true);
        }else{
            heddinBarRef.current.style.transform = 'translateY(-60%)'
            setBarVisibility(false);
        }
    }




   

  return (
    <div className={`${style.wrapper} justify-content-between px-3 align-items-center w-100`}>
        <Logo />
        <FontAwesomeIcon icon={faBarsStaggered}className={style.bars} onClick={showHeddinBar}/>
        <HeddinLinks vis = {setBarVisibility} Ref = {heddinBarRef}/>
    </div>
  )
}
