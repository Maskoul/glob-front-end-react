import React from 'react';

import './Navigation.css';
import LogIn from '../login/LogIn';

const Navigation = (props) => {

    return (

        <nav className='nav_container'>
            <div className='logo'>
                Glob
            </div>
           
            {
                props.isSignIn ? 
                <div  className='flex_nav_items'>
                <div className='nav_bar_components'>
                    <span className='nav_item'>Home</span>
                    <span className='nav_item'>Profile</span>            
                </div>
                <div className='flex_log_out_button'>
                    <button className='log_out_button'>Log out</button>
                </div>
                </div>
            :
                <LogIn />
        }

            
        </nav>
    )
}

export default Navigation;