import React, { useState } from 'react';

import axios from 'axios'
import pic from "./assets/weather-logo.png";
import pic1 from "./assets/pic1.jpg";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
import pic4 from "./assets/pic4.jpg";
import pic5 from "./assets/pic5.jpeg";
import pic6 from "./assets/pic6.png";
import pic7 from "./assets/pic7.jpg";
import pic8 from "./assets/pic8.jpg";
import pic9 from "./assets/pic9.jpg";
import pic10 from "./assets/pic10.jpg";

import { Carousel, CarouselItem } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
const api = {
  key: "6f7d7d0b60f555edfd26071a742e2859",
  base: "https://home.openweathermap.org/api_keys"
}


function App() {
  
  let timenow = new Date();
  let minutes = timenow.getMinutes();
  let hours = timenow.getHours();
  const [data, setData] = useState({})
  const [query, setQuery] = useState('')

  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`

  
  const search = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setQuery('')
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof data.main != "undefined") ? ((data.main.temp > 19) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className='start'>
        <div className='start-text'><h1>Weather</h1> </div>
        <img src={pic} width={80} height={80} className='pic' />
        
        {/* <img src='./assets/weather-logo.png'/> */}
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Enter a location ..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          <div>Time:{hours}:{minutes}</div>
        </div>

        
        </div>

        <div className='display'>
        <div>
          <Carousel>
           
            <CarouselItem>
              <img src={pic1} width={300} height={300} className='pic' />
            </CarouselItem>
            <CarouselItem>
              <img src={pic2} width={300} height={300} className='pic' />
            </CarouselItem>
            <CarouselItem>
              <img src={pic3} width={300} height={300} className='pic' />
            </CarouselItem>
            <CarouselItem>
              <img src={pic4} width={300} height={300} className='pic' />
            </CarouselItem>
            <CarouselItem>
              <img src={pic5} width={300} height={300} className='pic' />
            </CarouselItem>
            <CarouselItem>
              <img src={pic6} width={300} height={300} className='pic' />
            </CarouselItem>
            <CarouselItem>
              <img src={pic7} width={300} height={300} className='pic' />
            </CarouselItem>
            <CarouselItem>
              <img src={pic8} width={300} height={300} className='pic' />
            </CarouselItem>
            <CarouselItem>
              <img src={pic9} width={300} height={300} className='pic' />
            </CarouselItem>
            <CarouselItem>
              <img src={pic10} width={300} height={300} className='pic' />
            </CarouselItem>

          </Carousel>
        </div>
        {(typeof data.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{data.name}, {data.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(data.main.temp)}°C
            </div>
            <div className="weather">{data.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}


        </div>
              </main>
    </div>
  );
}

export default App;
