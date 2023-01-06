import './header.css';
import React, {useState} from 'react';

function Header() {

    // Controlar navbar
    const [navbar, setNavbar] = useState(false);
    const prevScrollpos = window.pageYOffset;

    const showNavbar =() =>{
        const currentScrollPos = window.pageYOffset;
        if(currentScrollPos > prevScrollpos){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', showNavbar);

    return (
        <header>
            <nav className={navbar ? 'hide' : ''}>
                <ul>
                    <li className='li-hover'>Pomodoro</li>
                    <li className='li-hover'>O que é?</li>
                    <li className='li-hover'>Sobre</li>
                    <li>|</li>
                    <li className='li-hover'>Configurações</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header