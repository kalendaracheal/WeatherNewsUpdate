import React from 'react'
import './NewsItem.css'

import { Card } from "react-bootstrap";

const NewsItem = ({ title, description, url, urlToImage,date , excerpt}) => {
    
    return (
        <div className="news-app">
            {/* <div className='news-item'>
            <a href={url}><img className='news-img' src={urlToImage} alt={urlToImage} /></a>
                <h3 className='title-news'>{title}</h3>
                
                <h6>{excerpt}</h6>
                {/* <p>{description}</p> */}
                {/* <h6 className='news-date'>{date}</h6> */} 
                <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={urlToImage} href={url} width={100} height={160} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
                <Card.Text>
                <h6>{excerpt}</h6>
                </Card.Text>
                {/* <a href={url} variant="primary">Read more</a> */}
                <a href={url}><button className='btn'>Read more</button></a>
                {/* <p>{date}</p> */}
            </Card.Body>
            </Card>
                
                
            
        </div>
    )
}

export default NewsItem;