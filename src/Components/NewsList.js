import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NewsItem } from '../Components/index'

require('dotenv').config({ path: '../../.env' })

const api = {
    key: "47e46bd320544ccdb2858f735f0d0890",
    base: "https://newsapi.org/v2/everything?"
  }
  
  


const NewsList = () => {

const [articles, setArticles] = useState([]);
const [topic, setTopic] = useState([]);


  const [query, setQuery] = useState('')


     const url= `https://newsapi.org/v2/everything?q=${query}&apiKey=47e46bd320544ccdb2858f735f0d0890`
   
   
    
     //const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=47e46bd320544ccdb2858f735f0d0890'
    
    
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
            

            <div>
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
    )
}

export default NewsList
