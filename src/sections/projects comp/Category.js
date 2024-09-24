import React from 'react'
import classes from './Category.module.css';

export default function Category({ category, catID, toggle, state }) {


    return (
        <div className={`mx-2`}>
            <h5 onClick={toggle} className={`${state ? classes.active : classes.inActive} ${classes.a}`} href={`#${catID}`}>{category}</h5>
        </div>
    )
}
