import './header.css';
import React, {useState} from 'react';
import {Link} from 'react-scroll';
import menuImg from './menu.png';

function Header() {

    // Controlar header
    const [headerHide, setHeader] = useState(false);
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

    // Controlar header mobile
    const [mobileActive, setMobile] = useState(false);
    const ShowMobile = ()=>{
        mobileActive ? setMobile(false) : setMobile(true);
    }

    return (
        <header id='header' className={headerHide ? 'header-hide' : ''}>
            <h1 id='logo'>POMORIN</h1>
            <nav id='nav-bar' className={mobileActive ? 'mobile-active' : ''}>
                <img src={menuImg} alt="" id='btn-mobile' onClick={ShowMobile}/>
                <ul id='menu'>
                    <li><Link to='section-pomodoro' spy={true} smooth={true} duration={10} offset={-100}>Pomodoro</Link></li>
                    <li><Link to='section-sobre' spy={true} smooth={true} duration={10}>Sobre</Link></li>
                    <li><Link to='section-novidades' spy={true} smooth={true} duration={10}>Novidades</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header