import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NewsItem } from '../Components/index'
import NewsList from './NewsList'


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
             <div className='displaynews'>
             <div>
                 <NewsList/>

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
            
            
            

            </div>
            
        
    )
}

export default Newsdisplay
