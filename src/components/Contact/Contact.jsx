import React from 'react';
import './Contact.css';
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [ done, setDone ] = useState(false);


  return (

    <div className='contact' id='contactPage'>
      <div className='inputs'>
            <h1>Contact Me</h1>
            <p>Give me a shout! Send me a message if you'd like to work with me.</p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type='text' placeholder='Name' name='user_name' aria-label='name' />
              <input type='text' placeholder='Subject' name='user_subject'aria-label='subject'/>
              <input type='text' placeholder='Email' name='user_email' aria-label='email' />
              <input className= 'message' type='text' placeholder='Message' name='message' aria-label='message' />
              <button className='glow-on-hover'>Send</button>
              {done && alert('Thanks for your message!')}
            </form>
      </div>
    </div>
  )
}

export default Contact;