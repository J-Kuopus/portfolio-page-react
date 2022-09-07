import React, { useLayoutEffect } from 'react';
import './Project4.css';
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Chat from '../assets/Chat-app-mix.jpg';

const Project4 = () => {

  const navigate = useNavigate();

  const goBack =() => {
    navigate(-1);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <div className='project4'>
     <div className='back-button-wrapper'>
        <button onClick={goBack}><FaAngleLeft className='back-button' alt='back button' /></button>
      </div>
      <div className="project4-info">
        <h1>Chat App</h1>
        <h2>Links</h2>
        <ul>
        <li>See code on <a href='https://github.com/J-Kuopus/chat-app' style={{ color: '#e6edf9' }} rel='noreferrer' target='_blank'>GitHub</a></li>
        </ul>
        <img className='project4-img'src={Chat} alt='' />
        <h2>Description</h2>
        <p>The goal of this project was to create a chat application for use with mobile devices. The app allows users to sends texts,
          take photos, share photos from their media library, and also to share their location via GPS. 
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>
            A start screen where users can enter a name and choose a background color for the chat screen
          </li>
          <li>
            A chat screen where users can type messages into an input field, and a "send" button to submit them 
          </li>
          <li>
            A custom actions button that allows users to upload photos from their media library, access their camera
            to take a photo and upload it, as well as send their location coordinates.
          </li>
          <li>
            Messages are stored online with Google Firestore and offline in local storage so users can access their conversations.
          </li>
        </ul>
        <h2>Tools and Tech</h2>
        <ul>
          <li>
            React Native
          </li>
          <li>
            Expo
          </li>
          <li>
            React Navigation library
          </li>
          <li>
            React Native Gifted Chat library
          </li>
          <li>
            Android Studio
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Project4;