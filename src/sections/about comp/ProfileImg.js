import React from 'react'
import SocialIcons from '../../componants/SocialIcons'
import myPro from '../../assets/IMG20211114154531.jpg'
import style from './ProfileImg.module.css'

export default function ProfileImg() {
    return (
        <div>
            <div className={style.frame}>
                <div className={style.imgWrapper}>
                    <img className={style.img} src={myPro} alt="profile Img" />
                    <div className={style.imgLayer}>
                        <SocialIcons/>
                    </div>
                </div>
            </div>
        </div>
    )
}


