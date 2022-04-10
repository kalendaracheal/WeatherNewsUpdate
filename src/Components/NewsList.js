import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NewsItem } from '../Components/index'
import { NewsItemLocal } from '../Components/index'
import { Link } from 'react-router-dom';
import news from "../assets/news.jpg";
import Footer from '../Footer';

require('dotenv').config({ path: '../../.env' })

const api = {
    key: "47e46bd320544ccdb2858f735f0d0890",
    base: "https://newsapi.org/v2/everything?"
  }
  
  


const NewsList = () => {

const [articles, setArticles] = useState([]);

  const [query, setQuery] = useState('')


     const url= `https://newsapi.org/v2/everything?q=${query}&apiKey=47e46bd320544ccdb2858f735f0d0890`
   
   
    
     //const urlt = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=47e46bd320544ccdb2858f735f0d0890'
    
    
     //const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=47e46bd'

     const search = (event) => {
        if (event.key === 'Enter') {
          axios.get(url).then((response) => {
            setArticles(response.data.articles)
            console.log(response)
          })
          setQuery('')
        }
      }


    return (
        <div>
          <h1 className='heading'>Search News</h1>
               <div className='start'>
           
               <img src={news} width={120} height={100} className='pic' />
        <div className="search-box">
                    <input 
                        type="text"
                        className="search-bar"
                        placeholder="Search Topic ..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                          
                </div>


                <Link to="/Newsdisplay"><div className='start-text'><button className='btn'>News Update</button> </div></Link>

<Link to="/Weather"><div className='start-text'><button className='btn'>Weather Updates</button> </div></Link>
        </div>

         
            
    <div className='displaynews'>
    
               <div>
              {articles.map(article => {
                  return(

                      
              <NewsItem 
                          title={article.title}
                          description={article.description}
                          urlt={article.urlt}
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

export default NewsList
