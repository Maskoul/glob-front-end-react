import React from 'react';
import './ArticleCard.css';

const ArticleCard = (props) => {
    const  {title, sub_title, author, date_created}= props.article
    return (
        <div className='container'>
            <h2 className='title'>{title}</h2>
            <h2 className='subTitle'>{sub_title}</h2>
             <div className='container_date_name'>
                <h3 className='date'>{date_created}</h3>
                <h3 className='name'>{author}</h3>
             </div>

        </div>
    )
}

export default ArticleCard;