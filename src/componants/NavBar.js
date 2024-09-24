import {useRef} from 'react'
import style from './NavBar.module.css'
import NormalSizeLinks from './nav bar comp/NormalSizeLinks'
import SmallSizeLinks from './nav bar comp/SmallSizeLinks'


export default function NavBar() {
  const Nav = useRef(null);
  
  let preScroll = 0;
  document.body.onscroll = function(){
    let scroll = window.scrollY
    // console.log(Nav);
    
    if(scroll > preScroll){
      Nav.current.style.transform = 'translateY(-100%)'
    }else{
      Nav.current.style.transform = 'translateY(0%)'
    }

    preScroll = scroll;
  }
  return (
    <header>
        <nav ref={Nav} className={style.navbar}>
          
            <NormalSizeLinks/>
            <SmallSizeLinks/>  
        </nav>
    </header>
  )
}
