import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NewsItemLocal } from '../Components/index'
import NavBar  from '../Navbar';
import Footer from '../Footer';


const LocalNews = () => {
    

const [articles, setArticles] = useState([]);



  useEffect(() => {
    
   
      const response = axios.request( {
        method: 'GET',
        url: 'https://api.newscatcherapi.com/v2/search',
        params: {q: 'uganda', countries:'UG', lang: 'en', sort_by: 'relevancy', page: '1'},
        headers: {
          'x-api-key': 'NbPJlmXwr_fAd95OX8VgSAVzyodp1xoZMb2K0mijPMk'
        }
      }).then(function (response) {
        console.log(response.data.articles);
        setArticles(response.data.articles)
    }).catch(function (error) {
        console.error(error);
    });

      
          
      

      
  }, [])
 

  return (
    <div >
     <NavBar/>
     
     <h1 className='heading'>Local News</h1>
     <div className='displaynews'>
     <div className='newsitem'>
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
     
     </div>
     <Footer/>     
        
    </div>
  )
}

export default LocalNews