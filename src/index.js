import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Impressum from './components/Impressum/Impressum';
import Project1 from './components/Project1/Project1';
import Project2 from './components/Project2/Project2';
import Project3 from './components/Project3/Project3';
import Project4 from './components/Project4/Project4';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/impressum' element={<Impressum />}/>
      <Route path='/project1' element={<Project1 />}/>
      <Route path='/project2' element={<Project2 />}/>
      <Route path='/project3' element={<Project3 />}/>
      <Route path='/project4' element={<Project4 />}/>
    </Routes>
  </Router>,
    
  
);

