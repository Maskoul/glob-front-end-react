import React from 'react';

import './Navigation.css';
import LogIn from '../login/LogIn';

const Navigation = () => {
    return (
        <div className='nav_container'>
            <div className='logo'>
                Glob
            </div>
           {/* <div className='nav_bar_components flex_nav_items'>
                <span className='nav_item'>Home</span>
                <span className='nav_item'>Profile</span>            
            </div>
            <div className='flex_log_out_button'>
                <button className='log_out_button'>Log out</button>
    </div>*/}
    <LogIn />

            
        </div>
    )
}

export default Navigation;