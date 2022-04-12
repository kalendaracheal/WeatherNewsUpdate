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
import Footer from './Footer';
import NavBar from './Navbar';

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
    <div className={(typeof data.main != "undefined") ? ((data.main.temp > 24) ? 'app warm' : 'app') : 'app'}>
      <NavBar/>
      <main>
        <div className='start'>
        <div className='start-text'><h1>Weather</h1> </div>
        <img src={pic} alt={pic}width={70} height={70} className='pic-w' />
      
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Enter any location ..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
                        
        </div>
        <div >
           <div className='displayw'><h5>Time:{hours}:{minutes}</h5></div>
        </div>  


        
        </div>

        <div className='display'>
        <div>
          <Carousel>
           
            <CarouselItem>
              <img src={pic1} alt={pic1} width={300} height={300} className='pic' />
            </CarouselItem>
            <CarouselItem>
              <img src={pic2} alt={pic2} width={300} height={300} className='pic' />
            </CarouselItem>
            <CarouselItem>
              <img src={pic3} alt={pic3} width={300} height={300} className='pic' />
            </CarouselItem>
            <CarouselItem>
              <img src={pic4} alt={pic4} width={300} height={300} className='pic' />
            </CarouselItem>
            <CarouselItem>
              <img src={pic5} alt={pic5} width={300} height={300} className='pic' />
            </CarouselItem>
            <CarouselItem>
              <img src={pic6} alt={pic6} width={300} height={300} className='pic' />
            </CarouselItem>
            <CarouselItem>
              <img src={pic7} alt={pic7} width={300} height={300} className='pic' />
            </CarouselItem>
            <CarouselItem>
              <img src={pic8} alt={pic8}width={300} height={300} className='pic' />
            </CarouselItem>
            <CarouselItem>
              <img src={pic9} alt={pic9} width={300} height={300} className='pic' />
            </CarouselItem>
            <CarouselItem>
              <img src={pic10} alt={pic10}width={300} height={300} className='pic' />
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
              <Footer/>
    </div>
  );
}

export default App;
