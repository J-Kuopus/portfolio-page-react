import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitterSquare, FaLinkedin, FaGithubSquare  } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <a href='https://github.com/J-Kuopus' rel="noreferrer" target="_blank">
        <FaGithubSquare className='footer-icon' aria-label='link to GitHub page' />
      </a>
      <a href='mailto:kuopus79@gmail.com' rel="noreferrer" target="_blank">
        <MdEmail className='footer-icon' aria-label='link to email address' />
      </a>
      <Link className='imp' to='/impressum' aria-label='link to impressum page'><span style={{ fontSize: 18 }}>Impressum</span></Link>
    </div>
    <div className='footer-text'>
        <p>Developed and Designed by Joshua Kuopus 2022</p>
    </div>
    </>
  )
}

export default Footer;