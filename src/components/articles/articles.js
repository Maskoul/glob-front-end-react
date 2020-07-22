import React from 'react';
import ArticleCard from '../article-card/ArticleCard';

const Articles = (props) => {
    return (
        <div>
            {
                props.articles.length > 0 &&
                props.articles.map((article) => <ArticleCard key={article.pid} article={article} />)

            }

        </div>
    )
}

export default Articles;