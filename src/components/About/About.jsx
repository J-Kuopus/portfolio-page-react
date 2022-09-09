import React from 'react';
import './About.css';
import Me from '../assets/river5.jpg';
import { HashLink } from 'react-router-hash-link';


const About = () => {
  return (
    <div className='about' id="aboutPage">
        <div className='about__container'>

            <div className='about__img'>
                <img src={Me} alt='' />
            </div>

            <div className='about__text'>
              <h1>About Me</h1>

              <p><strong>I love to code and create</strong>. I'm a junior full-stack web developer, living in Germany. <span className='p1'>After acquiring valuable managerial skills in the gastronomy field, I desired a new <strong>adventure</strong>. I've always had a <strong>passion</strong> for technology, web design, and 
                creativity, and this led me to successfully completing a Full-Stack Web Developer course where I learned frontend user 
                interface design as well as backend server development.</span></p>
              <br/>

              <p className='p4'>My skills include:</p>
              <p style={{ color: '#34a7df' }}>- Web page design <span className='xtra-skills'>(HTML5, CSS3, JavaScript, React.js, Bootstrap)</span></p>
              <p style={{ color: '#34a7df' }}>- Mobile app design <span  className='xtra-skills'>(React Native and Expo)</span></p>
              <p style={{ color: '#34a7df' }}>- Working with backend development <span  className='xtra-skills'>(APIs and servers)</span></p>
              <p style={{ color: '#34a7df' }}>- Database management <span  className='xtra-skills'>(MongoDB, MySQL, Postgres)</span></p>
              <br/>

              <p><span className='p2'>I'm currently available for full time work and I'm always looking for new projects where I can showcase my skills in art and design as well continuing to learn
                and grow as a developer.</span> For more details about me you can check out my...</p>
                 <br/>
                 <div className='link-buttons'>
                     <a className='cv-button' 
                        href='https://drive.google.com/file/d/1AZEou1V8u7grKZxfMdmFyROmPX8wHipt/view?usp=sharing' 
                        rel="noreferrer" 
                        target="_blank"
                        alt='my cv'>CV
                     </a>
                     <a className='gh-button' 
                        href='https://github.com/J-Kuopus' 
                        rel="noreferrer" 
                        target="_blank"
                        alt='my code'>Code
                     </a>
                     <HashLink to='#contactPage' smooth className='c-button' alt='contact page'>Contact Me</HashLink>
                 </div>
            </div> 
        </div>
    </div>
  )
}

export default About;