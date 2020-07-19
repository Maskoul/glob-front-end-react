import React from 'react';
import './App.css';
import Navigation from '../navigation/Navigation';
import HomePage from '../homePage/HomePage';
import Register from '../register/Register';


const initialState = {
          route: 'signout',
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
  
  


  
  handleChangeRoute= (route) => {
    if(route === 'home'){
      this.setState({route: 'home', isSignIn: true});
    }else if(route === 'siginout'){
      this.setState(initialState);
    }else {
      this.setState({route})
    }
  }

  loudUser = (data) => {
    this.setState ({
      user: {
              uid: data.uid,
              firstName:data.first_name ,
              lastName: data.last_name,
              email: data.email,
              birthDay: data.birth_day,
              gender: data.gender,
              joined: data.joined
      }
    })
  }
  render() {

    return (
      <div>
          <Navigation 
            isSignIn={this.state.isSignIn}
            handleChangeRoute={this.handleChangeRoute} 
            loudUser={this.loudUser}
          />

          {
            this.state.route === 'home' &&
           <HomePage/>
          }
   
          {
            this.state.route === 'signout' && 
            <Register
              handleChangeRoute={this.handleChangeRoute} 
              loudUser={this.loudUser}
            />
          }   
      </div> 
    )}
}

export default App;
