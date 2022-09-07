import React from 'react';
import './ProjectList.css';
import MSAsm from '../assets/msa1-sm.jpg';
import Meet from '../assets/meet-sm.jpg';
import Poke from '../assets/poke-sm.jpg';
import Chat from '../assets/chat-sm.jpg';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  return (
    <div className='projects' id='projectsPage'>

      <div className='project-header'>
        <h1>My Projects</h1>
        <p>Click on a project for more details. New projects will be added soon!</p>
      </div>

      <div className='project-section'>

        <div className='cards-wrapper'>

          <div className='card1'>
            <p><span className='card-title'>
              Movie Search App</span> - a React application that connects to an external API to display movie information.</p>
              <Link to='/project1' alt='project 1'><img src={MSAsm} alt='movie search app image' /></Link>
          </div>

          <div className='card2'>
            <p><span className='card-title'>
              Meet App</span> - a React application that connects to the Google Calender API to display upcoming Web Developer events.</p>
              <Link to='/project2' alt='project 2'><img src={Meet} alt='meet app image' /></Link>
          </div>

          <div className='card3'>
            <p><span className='card-title'>Pokedex App</span> - a simple JavaScript application that connects to an external API to display Pokemon details.</p>
              <Link to='/project3' alt='project 3'><img src={Poke} alt='pokedex app image' /></Link>
          </div>

          <div className='card4'>
            <p><span className='card-title'>Chat App</span> - a chat application built with React Native.</p>
            <Link to='/project4' alt='project 4'><img src={Chat} alt='project 4 image' /></Link>
          </div>
        </div>

      </div>
  </div>
  )
}

export default ProjectList;