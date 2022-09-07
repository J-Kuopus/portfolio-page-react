import React, { useLayoutEffect } from 'react';
import './Project3.css';
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Poke from '../assets/Pokedex1.jpg';

const Project3 = () => {

  const navigate = useNavigate();

  const goBack =() => {
    navigate(-1);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <div className='project3'>
      <div className='back-button-wrapper'>
        <button onClick={goBack}><FaAngleLeft className='back-button' alt='back button' /></button>
      </div>
      <div className="project3-info">
        <h1>Pokedex App</h1>
        <h2>Links</h2>
        <ul>
          <li>Check out the live demo <a href='https://j-kuopus.github.io/simple-js-app/' style={{ color: '#e6edf9' }} rel='noreferrer' target='_blank' aria-label='link to website demo'>here</a></li>
          <li>See code on <a href='https://github.com/J-Kuopus/simple-js-app' style={{ color: '#e6edf9' }} rel='noreferrer' target='_blank' aria-label='link to github code'>GitHub</a></li>
        </ul>
        <img className='project3-img'src={Poke} alt='' />
        <h2>Description</h2>
        <p>The goal of this project was to create a simple JavaScript application that fetches Pokemon data from an external API service.
          The user can click on the buttons to view various Pokemon data.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>
           Fixed navigation bar
          </li>
          <li>
            A list of 150 Pokemon buttons
          </li>
          <li>
            Window that opens on button click to display Pokemon data
          </li>
         </ul>
        <h2>Tools and Tech</h2>
        <ul>
          <li>
            HTML5
          </li>
          <li>
            CSS3
          </li>
          <li>
            JavaScript
          </li>
          <li>
            jQuery
          </li>
          <li>
            Bootstrap
          </li>
          <li>
            <a style={{ color: '#e6edf9'}}href='https://pokeapi.co/api/v2/pokemon/' rel='noreferrer' target='_blank' aria-label='link to pokedex api home page'>Pokeapi</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Project3;