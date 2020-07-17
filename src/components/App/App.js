import React from 'react';
import './App.css';
import Navigation from '../navigation/Navigation';
import HomePage from '../homePage/HomePage';
import Register from '../register/Register';


const initialState = {
          route: 'register',
          isSignIn:false,
          user : {
              uid: '',
              firstName: '',
              lastName:'',
              email: '',
              birthDay:'',
              gender:'',
              joined: ''}
}

class App extends React.Component {
  
  state =   initialState
  
  
  render() {

    return (
      <div>
          <Navigation isSignIn={this.state.isSignIn} />

          {this.state.route === 'home' && <HomePage />}
   
          {this.state.route === 'register' && <Register />}   
      </div> 
    )}
}

export default App;
