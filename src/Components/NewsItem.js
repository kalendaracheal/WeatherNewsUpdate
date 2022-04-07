import React from 'react'
import './NewsItem.css'

const NewsItem = ({ title, description, url, urlToImage }) => {
    return (
        <div className="news-app">
            <div className='news-item'>
            <a href={url}><img className='news-img' src={urlToImage} alt={urlToImage} /></a>
                <h3 className='title-news'>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default NewsItem;