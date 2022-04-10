import React from 'react'
import './NewsItem.css'

const NewsItem = ({ title, description, url, urlToImage,date , excerpt}) => {
    
    return (
        <div className="news-app">
            <div className='news-item'>
            <a href={url}><img className='news-img' src={urlToImage} alt={urlToImage} /></a>
                <h3 className='title-news'>{title}</h3>
                
                <h6>{excerpt}</h6>
                {/* <p>{description}</p> */}
                <h6 className='news-date'>{date}</h6>
                
                
            </div>
        </div>
    )
}

export default NewsItem;