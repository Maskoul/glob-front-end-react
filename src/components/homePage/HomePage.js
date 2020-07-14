import React from 'react';
import NewArticleButton from '../new-article-button/NewArticleButton';
import Articles from '../articles/Articles';

const HomePage = () => {
    return (
        <div>
            <NewArticleButton />
            <Articles />
        </div>
    )
}

export default HomePage;