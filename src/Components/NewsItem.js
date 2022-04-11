import React from 'react'
import './NewsItem.css'
import { Card } from "react-bootstrap";

const NewsItem = ({ title, description, url, urlToImage }) => {
    return (
        <div className="news-app">
            {/* <div className='news-item'>
            <a href={url}><img className='news-img' src={urlToImage} alt={urlToImage} /></a>
                <h3 className='title-news'>{title}</h3>
                <p className='description'>{description}</p>
            </div> */}
            
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={urlToImage} />
            <Card.Body>
             <Card.Title>{title}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                {/* <a href={url} variant="primary">Read more</a> */}
                <a href={url}><button className='btn'>Read more</button></a>
                
            </Card.Body>
            </Card>
        

          
        </div>
    )
}

export default NewsItem;