import React from 'react';
import './App.css';
import Navigation from '../navigation/Navigation';
import HomePage from '../homePage/HomePage';
import Register from '../register/Register';

function App() {
  return (
    <div>
        <Navigation />
{/*        <HomePage />
*/} 
        <Register />   
    </div> 
  );
}

export default App;
