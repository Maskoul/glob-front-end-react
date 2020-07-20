import React from 'react';
import './AddNewArticle.css';

class AddNewArticle extends React.Component {
    render(){
        return(
            <div className="container">
                <div>
                    <textarea 
                        className='box titleInput' 
                        name='title' 
                        rows='1' 
                        cols = '50' 
                        placeholder='Title'
                        maxlength='100'
                    />          
                </div>
                <div>
                <textarea 
                    className='box subTitleInput' 
                    name='subTitle' 
                    rows='2' c
                    ols = '50' 
                    placeholder='Sub Title'
                    maxlength='200'
                />          
                </div>
                <div>
                    <textarea 
                        className='box articleInput' 
                        name='article' 
                        rows='30' 
                        cols='50' 
                        placeholder ='Add new article'/>
                </div>
                <div>
                    <button className= 'publishButton'>
                        Publish
                    </button>
                    <button className='cancelButton'>
                        Cancel
                    </button>
                </div>
            </div>
        )
    }
}

export default AddNewArticle;