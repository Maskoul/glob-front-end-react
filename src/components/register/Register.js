import React from 'react';

import './Register.css';
import blog from './blog-img.png';

class Register extends React.Component {
    
    state = {
            firstName : '',
            lastName: '',
            email: '',
            password: '',
            birthDay: '',
            gender:''
    }

    onSubmitSignin = () => {
        fetch('http://localhost:3000/register',{
            method:'post',
            headers:{"Content-type": "application/json"},
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                birthDay: this.state.birthDay,
                gender: this.state.gender
            })
        })
        .then(response => response.json())
        .then(user => {
            this.props.loudUser(user);
            this.props.handleChangeRoute('home');
            }    
        )}


    firstNameChang = (event) => {
        this.setState({firstName : event.target.value});
    }

    lastNameChange = (event) => {
        this.setState({lastName: event.target.value})
    }

    emailChange = (event) => {
        this.setState({email: event.target.value})
    }

    passwordChange = (event) => {
        this.setState({password: event.target.value})
    }

    birthDateChange = (event) => {
        this.setState({birthDay: event.target.value})
    }

    genderSelecte = (event) => {
        this.setState({gender: event.target.value})
    }
    render() {
        return (
            <div className='register-container'>
                <div>
                    <div>
                        <h1>Glob helps to find great things to read and share your ideas in the world.</h1>
                    </div>
                    <div>
                        <img alt='blog' src={blog}></img>
                    </div>
                </div>

                <div className='separator'></div>

                <div className='form-container'>
                    <div><h2>Create an account</h2></div>
                    <div className='form-input-name-block'>
                        <input 
                            className='form-input form-input-name ' 
                            type='text'
                            placeholder='First Name' 
                            id='firstName'
                            onChange={this.firstNameChang}
                         />
                        <div className='small-separator'></div>
                        <input 
                            className='form-input form-input-name ' 
                            type='text' 
                            placeholder='Last Name'
                            id='lastName' 
                            onChange={this.lastNameChange}
                        />
                    </div>
                    <div>
                        <input 
                            className='form-input' 
                            type='Email' 
                            placeholder='Email' 
                            id='email'
                            onChange={this.emailChange} 
                        />
                    </div>
                    <div>
                        <input 
                            className='form-input' 
                            type='password' 
                            placeholder='Password' 
                            id='password'
                            onChange={this.passwordChange}
                        />
                    </div>
                    <div>
                        <div className='date-text'>Date</div>
                        <div>
                            <input 
                                className='date-input' 
                                type="date" 
                                id="birthday" 
                                name="birthday"
                                onChange={this.birthDateChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div className='gender-text'>Gender</div>
                        
                        <span>
                            <label className="radio-container">
                                <input type="radio" name="gender" value='Female' onClick={this.genderSelecte}/>Female
                            </label>
                            <label className="radio-container">
                                <input type="radio" name="gender" value='Male' onClick={this.genderSelecte}/>Male
                            </label>
                        </span>
                        
                    </div>
                    <div>
                        <button className='signup-button' onClick={this.onSubmitSignin}>Sign Up</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;