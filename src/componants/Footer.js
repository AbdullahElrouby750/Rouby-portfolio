import React from 'react';
import style from './Fotter.module.css';

import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className={style.footer}>
        <SocialIcons />
    </footer>
  )
}
