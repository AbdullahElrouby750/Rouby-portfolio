import React from 'react'
import classes from './SocialIcons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function SocialIcons() {
return (
    <div className='fs-1 d-flex justify-content-center align-items-center'>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullahelrouby750@gmail.com&su=Subject&body=Your%20Email%20Content" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className={`${classes.icons} mx-3 fs-2`} icon={faEnvelope} style={{ color: 'hsl(0, 50%, 50%)' }} />
        </a>
        <a href="https://www.linkedin.com/in/abdullah-elrouby-803554245/" target='_blank' rel="noreferrer">
        <FontAwesomeIcon className={`${classes.icons} mx-3 fs-2`} icon={faLinkedin} style={{ color: 'hsl(240, 50%, 50%)' }} />
        </a>
        <a href="https://github.com/AbdullahElrouby750" target='_blank' rel="noreferrer">
        <FontAwesomeIcon className={`${classes.icons} mx-3 fs-2`} icon={faGithub} style={{ color: 'hsl(0, 0%, 60%)' }} />
        </a>
    </div>
)
}
