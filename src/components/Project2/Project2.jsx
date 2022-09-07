import React, { useLayoutEffect } from 'react';
import './Project2.css';
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import MeetApp from '../assets/Meet-app1.jpg';

const Project2 = () => {

  const navigate = useNavigate();

  const goBack =() => {
    navigate(-1);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <div className='project2'>
      <div className='back-button-wrapper'>
        <button onClick={goBack}><FaAngleLeft className='back-button' alt='back button' /></button>
      </div>
      <div className="project2-info">
        <h1>Meet App</h1>
        <h2>Links</h2>
        <p>Check out the live demo <a href='https://j-kuopus.github.io/meet-app/' style={{ color: '#e6edf9' }} rel='noreferrer' target='_blank' aria-label='link to website demo'>here</a></p>
        <p>See code on <a href='https://github.com/J-Kuopus/meet-app' style={{ color: '#e6edf9' }} rel='noreferrer' target='_blank' aria-label='link to github code'>GitHub</a></p>
        <img className='project2-img' src={MeetApp} alt='' />
        <h2>Description</h2>
        <p>The goal of this project was to create a serverless, progressive web application (PWA) using a test-driven development technique.
          The app accesses the Google Calendar API to fetch and display upcoming web development events.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>
            An input field where users can enter a location name (such as "Berlin, Germany")
          </li>
          <li>
            An input field where users can change the number of events displayed
          </li>
          <li>
            A pie chart displaying the different types of events available
          </li>
          <li>
            A toggle button that allows users to view more info about the event
          </li>
          <li>
            The app is cross platform. It works on the web as well as on mobile devices and can even be installed as a local app.
          </li>
          <li>
            Works offline. It loads the last events viewed.
          </li>
        </ul>
        <h2>Tools and Tech</h2>
        <ul>
          <li>
            React.js - for the user interface
          </li>
          <li>
            React-Bootstrap - for styling elements
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Project2;