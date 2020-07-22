import React from 'react';
import NewArticleButton from '../new-article-button/NewArticleButton';
import Articles from '../articles/Articles';

class HomePage extends React.Component{
    state = {
        articles: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/articles')
            .then(data => data.json())
            .then(articles => {
                this.setState({articles})

            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <NewArticleButton handleChangeRoute={this.props.handleChangeRoute} />
                <Articles articles={this.state.articles}/>
            </div>
        )
    }
}

export default HomePage;