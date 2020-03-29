import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
 
 <h1>Lazy Loading images...</h1>
  <img src="lazy_img.jpg" data-src="img_1.jpg" class="lazy" />
  <img src="lazy_img.jpg" data-src="img_2.jpg" class="lazy" />

  
    </div>
  );
}

export default App;
