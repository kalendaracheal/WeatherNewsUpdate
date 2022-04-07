import React from 'react'

const News = () => {

    let googleNewsAPI = require("google-news-json");
    let updateNews = async() =>{
        let news = await googleNewsAPI.getNews(googleNewsAPI.TOP_NEWS, null, "en-GB");
    }

googleNewsAPI.getNews(googleNewsAPI.SEARCH, "apple", "en-GB", (err, response) => {
    console.log(response);
});
  return (
    <div>
        <div>{googleNewsAPI}</div>

    </div>
  )
}

export default News