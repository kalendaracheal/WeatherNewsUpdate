import React, { useState} from 'react'
import axios from 'axios'
import { NewsItem } from '../Components/index'
import Footer from '../Footer';
import NavBar from '../Navbar';

require('dotenv').config({ path: '../../.env' })



const NewsList = () => {

const [articles, setArticles] = useState([]);

  const [query, setQuery] = useState('')


     const url= `https://newsapi.org/v2/everything?q=${query}&apiKey=47e46bd320544ccdb2858f735f0d0890`
   
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
          <NavBar/>
          <h1 className='heading'>Search News</h1>
               <div className='start'>
           
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

        </div>
        <div className='news-suggestion'>
          <h5>Suggestions</h5>
          <p>Health, Technology, Business, Economics, Finance, Travel, Politics, Entertainment, Science, Sports, Market, Beauty, Energy, Food, World, Gaming etc.. </p>
        </div>         
            
    <div className='displaynews'>
    
               <div className='newsitem'>
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
