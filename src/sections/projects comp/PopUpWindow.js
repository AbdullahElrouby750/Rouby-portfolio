import React from 'react'
import style from './PopUpWindow.module.css'

export default function PopUpWindow({github, liveSite, porjectImg, name}) {
    return (
        <div className='w-100 h-100'>
            <img className=' rounded-2 w-100 h-75' src={porjectImg} alt={name} />
            <div className=' d-flex justify-content-around mt-2'>
                <a className=' text-decoration-none' href={github} target='_blanck'>
                    <button className={style.btn}>Github</button>
                </a>
                <a className={`text-decoration-none ${liveSite === "none" && 'd-none'}`} href={liveSite} target='_blanck'>
                    <button className={style.btn}>Check it live</button>
                </a>
            </div>
        </div>
    )
}
