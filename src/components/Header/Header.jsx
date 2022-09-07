import React,  { useState } from 'react';
import './Header.css';
import { BsFillXCircleFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink } from 'react-router-hash-link';


const Header = () => {

    const [ active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active)
    }

  return (
    <div className='header'>
        <div className='header__logo'>
            <HashLink className='brand' to='#mainPage' smooth onClick={showMenu} aria-label='link to home page'>
                <h1>JOSH K DEV</h1>
            </HashLink>
        </div>
        <nav className={active ? 'navbar active' : 'navbar'}>
            <ul>
                <div className='closed'>
                 <BsFillXCircleFill className='close' onClick={showMenu} aria-label='close button'/>
                </div>
                <li>
                    <HashLink to='#mainPage' smooth onClick={showMenu} aria-label='link to home page'>Home</HashLink>
                </li>
                <li>
                    <HashLink to='#aboutPage' smooth onClick={showMenu} aria-label='link to about page'>About</HashLink>
                </li>
                <li>
                    <HashLink to='#projectsPage' smooth onClick={showMenu} aria-label='link to projects page'>Projects</HashLink>
                </li>
                <li>
                    <HashLink to='#contactPage' smooth onClick={showMenu} aria-label='link to contact page'>Contact</HashLink>
                </li>
            </ul>
        </nav>
        <div className="changer">
            <GiHamburgerMenu className='menu' onClick={showMenu} aria-label='menu button' />
        </div>
    </div>
  )
}

export default Header;