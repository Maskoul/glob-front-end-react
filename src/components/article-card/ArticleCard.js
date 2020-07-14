import React from 'react';
import './ArticleCard.css';

const ArticleCard = () => {
    return (
        <div className='container'>
            <h2 className='title'>Title</h2>
            <h2 className='subTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus,
             </h2>
             <div className='container_date_name'>
                <h3 className='date'>2002-12-21</h3>
                <h3 className='name'>Name</h3>
             </div>

        </div>
    )
}

export default ArticleCard;