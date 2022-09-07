import React from 'react';
import './Main.css';
import { FaTwitterSquare, FaLinkedin, FaGithubSquare  } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HashLink } from 'react-router-hash-link';
import CustomSVG from '../CustomSVG/CustomSVG';

const Main = () => {
  return (
    <div className='main' id='mainPage'>
        <div className='main__container'>
          <div className='main__content'>
            <div className='text'>
              <p>Hi there! My name is</p>
              <h1>Joshua Kuopus</h1>
              <p>Web Developer and Designer</p>
   
            <div className='icons'>
              <a href='https://twitter.com/kuopus79' rel="noreferrer" target="_blank">
              <FaTwitterSquare className='icon' aria-label='link to Twitter page'/>
              </a>
              <a href='https://www.linkedin.com/in/joshua-kuopus' rel="noreferrer" target="_blank">
              <FaLinkedin className='icon' aria-label='link to LinkedIn page'/>
              </a>
              <a href='https://github.com/J-Kuopus' rel="noreferrer" target="_blank">
              <FaGithubSquare className='icon' aria-label='link to GitHub page' />
              </a>
              <a href='mailto:kuopus79@gmail.com' rel="noreferrer" target="_blank">
              <MdEmail className='icon' aria-label='link to email address' />
              </a>
            </div>

            <div className='buttons'>
                <HashLink to='#projectsPage' smooth className='work-button' alt='projects page'>See My Work</HashLink>
                <HashLink to='#contactPage' smooth className='contact-button' alt='contact page'>Hire Me</HashLink>
            </div>
            </div>
          </div>

          <div className='main__img'>
            <CustomSVG alt='Josh K Dev animated logo'/>
          </div>
        </div>
    </div>
  )
}

export default Main;