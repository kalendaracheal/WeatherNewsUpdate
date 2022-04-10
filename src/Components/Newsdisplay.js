import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NewsItem } from '../Components/index'
import LocalNews from './LocalNews'
import { Link } from 'react-router-dom';
import news from "../assets/news.jpg";
import Footer from '../Footer'



require('dotenv').config({ path: '../../.env' })

const api = {
    key: "47e46bd320544ccdb2858f735f0d0890",
    base: "https://newsapi.org/v2/everything?"
  }

const Newsdisplay = () => {

const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('')


    useEffect(() => {
        const getArticles = async () => {
            
         //   const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=47e46bd320544ccdb2858f735f0d0890`)
    const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=47e46bd320544ccdb2858f735f0d0890')
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [])
   

     
    return (
        <div>
           
           <div className='start'>
           <img src={news} width={120} height={100} className='pic' />
           <Link to="/Weather"><div className='start-text'><button className='btn'>Weather Updates</button> </div></Link>      
           <Link to="/NewsList"><div className='start-text'><button className='btn'>Search news</button> </div></Link> 
        
        </div>
        <h1 className='heading'>Local & Global News</h1>
             <div className='displaynews'>
             
             <div >
                 <LocalNews/>

            </div> 
         
            
            <div >
            {articles.map(article => {
                return(

                    
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })} 

            </div>
             </div>
            
            
            
                <Footer/>
            </div>
            
        
    )
}

export default Newsdisplay
