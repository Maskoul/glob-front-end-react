import React from 'react';

import './Register.css';
import blog from './blog-img.png';

const Register = () => {
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
                    <input className='form-input form-input-name ' type='text' placeholder='First Name' />
                    <div className='small-separator'></div>
                    <input className='form-input form-input-name ' type='text' placeholder='Last Name' />
                </div>
                <div>
                    <input className='form-input' type='Email' placeholder='Email' />
                </div>
                <div>
                    <input className='form-input' type='password' placeholder='Password' />
                </div>
                <div>
                    <div className='date-text'>Date</div>
                    <div>
                        <input className='date-input' type="date" id="birthday" name="birthday"/>
                    </div>
                </div>
                <div>
                    <div className='gender-text'>Gender</div>
                    
                    <span>
                        <label className="radio-container">
                            <input type="radio" name="gender"/>Female
                        </label>
                        <label className="radio-container">
                            <input type="radio" name="gender"/>Male
                        </label>
                    </span>
                    
                </div>
                <div>
                    <button className='signup-button'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}
export default Register;