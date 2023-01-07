import './header.css';
import React, {useState} from 'react';
import menuImg from './menu.png';

function Header() {

    // Controlar menu
    const [headerActive, setHeader] = useState(false);
    const prevScrollpos = window.pageYOffset;
    const showHeader =() =>{
        const currentScrollPos = window.pageYOffset;
        if(currentScrollPos > prevScrollpos){
            setHeader(true);
        }else{
            setHeader(false);
        }
    };
    window.addEventListener('scroll', showHeader);

    // Controlar menu mobile
    const [mobileActive, setMobile] = useState(false);
    const ShowMobile = ()=>{
        mobileActive ? setMobile(false) : setMobile(true);
    }

    return (
        <header id='header' className={headerActive ? 'header-active' : ''}>
            <h1 id='logo'>POMORIN</h1>
            <nav id='nav-bar' className={mobileActive ? 'mobile-active' : ''}>
                <img src={menuImg} alt="" id='btn-mobile' onClick={ShowMobile}/>
                {/* <button >Menu</button> */}
                <ul id='menu'>
                    <li><a href="">Pomodoro</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Novidades</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header