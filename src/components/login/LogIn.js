import React from 'react';

import './LogIn.css';

const LogIn = () => {
    return (
        <div className='login-container'>
            <div>
                <input className='email-input' type='text' placeholder='Email'></input>
            </div>
            <div >
                <input className='password-input' type='password' placeholder='Password'></input>
            </div>
            <div className='login-button'>Log in</div>
        </div>

    )
}

export default LogIn;