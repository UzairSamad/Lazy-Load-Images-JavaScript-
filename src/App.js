import React from 'react';
import logo from './logo.svg';
import './App.css';
import lazy from './image/lazy_img.jpg'
import image1 from './image/img_1.jpg'
import image2 from './image/img_2.jpg'

function App() {
  return (
    <div className="App">
 
 <h1>Lazy Loading images...</h1>
  <img src={lazy} data-src={image1} class="lazy" />
  <img src={lazy} data-src={image2} class="lazy" />

  
    </div>
  );
}

export default App;
