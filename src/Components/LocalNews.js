import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NewsItemLocal } from '../Components/index'

const LocalNews = () => {
    

const [articles, setArticles] = useState([]);



  useEffect(() => {
    
     // const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=47e46bd320544ccdb2858f735f0d0890')
      
      const response = axios.request( {
        method: 'GET',
        url: 'https://api.newscatcherapi.com/v2/search',
        params: {q: 'uganda', countries:'UG', lang: 'en', sort_by: 'relevancy', page: '1'},
        headers: {
          'x-api-key': 'NbPJlmXwr_fAd95OX8VgSAVzyodp1xoZMb2K0mijPMk'
        }
      }).then(function (response) {
        console.log(response.data);
        setArticles(response.data.articles)
    }).catch(function (error) {
        console.error(error);
    });

      
          
      

      
  }, [])
 

  return (
    <div>
     
        {articles?.map(article => {
                return(

                    
                    <NewsItemLocal 
                        title={article.title}
                        description={article.summary}
                        url={article.link}
                        urlToImage={article.media}
                        date={article.published_date} 
                        excerpt={article.excerpt}
                        
                    />
                )
            })} 
        
    </div>
  )
}

export default LocalNews