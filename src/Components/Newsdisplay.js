import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NewsItem } from '../Components/index'
import Footer from '../Footer'
import Navbar from '../Navbar'



require('dotenv').config({ path: '../../.env' })

// const api = {
//     key: "47e46bd320544ccdb2858f735f0d0890",
//     base: "https://newsapi.org/v2/everything?"
//   }

const Newsdisplay = () => {

const [articles, setArticles] = useState([]);
//   const [query, setQuery] = useState('')


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
           <Navbar/>
        
        <h1 className='heading'>Global News</h1>
             <div className='displaynews'>
             
             {/* <div > */}
                 {/* <LocalNews/> */}

            {/* </div>  */}
         
            
            <div className='newsitem' >
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
