import React, { useLayoutEffect } from 'react';
import './Project1.css';
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import MSA1 from '../assets/msa1-comp.jpg';
import MSA2 from '../assets/msa2-comp.jpg';

const Project1 = () => {

  const navigate = useNavigate();

  const goBack =() => {
    navigate(-1);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <div className='project1'>
      <div className='back-button-wrapper'>
        <button onClick={goBack} aria-label='back button' aria-describedby='back-button'><FaAngleLeft className='back-button' /></button>
      </div>
      <div className="project1-info">
          <h1>Movie Search App</h1>
          <h2>Links</h2>
          <ul>
            <li>Check out the live demo <a href='https://j-kuopus.github.io/movie_search_app/' style={{ color: '#e6edf9' }} rel='noreferrer' target='_blank' aria-label='website demo'>here</a></li>
            <li>See code on <a href='https://github.com/J-Kuopus/movie_search_app' style={{ color: '#e6edf9' }} rel='noreferrer' target='_blank' aria-label='github code'>GitHub</a></li>
          </ul>
          <img className='project1-img' src={MSA1} alt='project 1 image' />
          <img className='project1-img' src={MSA2} alt='project 1 image' />
          <h2>Description</h2>
          <p>The goal of this project was to create a simple movie database search application.</p>
          <h2>Key Features</h2>
          <ul>
            <li>
              Search bar where users can search for any movie or TV series
            </li>
            <li>
              Movie information appears on cursor hover
            </li>
            <li>
              Add/Remove Favorites option
            </li>
            <li>
              Favorites section for displaying favorite titles (stored in Local Storage)
            </li>
            <li>
              Fully responsive on different devices
            </li>
          </ul>
          <h2>Tools and Tech</h2>
          <ul>
            <li>
              React.js
            </li>
            <li>
              CSS3
            </li>
            <li>
              Bootstrap
            </li>
            <li>
              External API: <a style={{ color: '#e6edf9'}}href='https://www.omdbapi.com/' rel='noreferrer' target='_blank' aria-label='link to omdb api home page'>OMDb API - The Open Movie Database</a>
            </li>
          </ul>
        </div>
        </div>
  )
}

export default Project1;