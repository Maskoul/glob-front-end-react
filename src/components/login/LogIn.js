import React from 'react';

import './LogIn.css';

class LogIn extends React.Component  {

    state = {
        email:'',
        password:''
    }

    emailChange = (event) => {
        this.setState({email: event.target.value})
    }

    passwordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitLogin = () => {
        fetch('http://localhost:3000/signin',{
        method:'post',
        headers:{"Content-type": "application/json"},
        body:JSON.stringify({
            email: this.state.email,
            password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user =>{
                if(user.uid){
                    this.props.loudUser(user);
                    this.props.handleChangeRoute('home');
                }
            
        })
    }

    render() {
        return (
            <div className='login-container'>
                <div>
                    <input 
                        className='email-input' 
                        type='text' 
                        placeholder='Email'
                        onChange={this.emailChange}>
                    </input>
                </div>
                <div >
                    <input 
                        className='password-input' 
                        type='password' 
                        placeholder='Password'
                        onChange={this.passwordChange}>
                    </input>
                </div>
                <div 
                    className='login-button' onClick={this.onSubmitLogin}>Log in</div>
            </div>
    
        )
    }
    
}

export default LogIn;