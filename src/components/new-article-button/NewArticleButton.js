import React from 'react';
import './NewArticleButton.css';

const NewPostButton = (props) => {
    return (
        <div onClick={()=> props.handleChangeRoute("addNewArticle")} className='center button'>
            
            Add new article
        </div>
    )
}

export default NewPostButton;