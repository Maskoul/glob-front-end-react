import React from 'react';
import './AddNewArticle.css';

class AddNewArticle extends React.Component {

    state = {    
            title:'',
            subTitle:'',
            article: '',

    }

    titleChange = (event) => {
        this.setState({title: event.target.value})
    }

    subTitleChange = (event) => {
        this.setState({subTitle : event.target.value})
    }
    articleChange = (event) => {
        this.setState({article: event.target.value})
    }
    onSubmitNewArticle= () => {
        fetch('http://localhost:3000/newarticle',{
        method:'post',
        headers:{"Content-type": "application/json"},
        body:JSON.stringify({
            title: this.state.title,
            subTitle: this.state.subTitle,
            article: this.state.article,
            userId: this.props.user.uid,
            author: this.props.user.firstName + this.props.user.lastName
            })
        }).then(res => res.json())
        .then(newArticle => {
            if(newArticle.pid){
                this.props.handleChangeRoute('home');
            }
        })          
    }

    onCancel = () => {
        this.props.handleChangeRoute('home');
    }
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
                        maxLength='100'
                        onChange={this.titleChange}
                    />          
                </div>
                <div>
                    <textarea 
                        className='box subTitleInput' 
                        name='subTitle' 
                        rows='2' 
                        ols = '50' 
                        placeholder='Sub Title'
                        maxLength='200'
                        onChange={this.subTitleChange}
                />          
                </div>
                <div>
                    <textarea 
                        className='box articleInput' 
                        name='article' 
                        rows='30' 
                        cols='50' 
                        placeholder ='Add new article'
                        onChange={this.articleChange}
                    />
                </div>
                <div>
                    <button className= 'publishButton' onClick={this.onSubmitNewArticle}>
                        Publish
                    </button>
                    <button className='cancelButton' onClick={this.onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        )
    }
}

export default AddNewArticle;