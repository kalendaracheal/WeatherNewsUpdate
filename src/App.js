import React from 'react';
import Weather from './Weather';
import News from './News';
import Footer from './Footer';
import NewsItem from './Components/NewsItem';
import NewsList from './Components/NewsList';
import Newsdisplay from './Components/Newsdisplay';

function App() {

 
  return (
    <div>
      {/* <Weather/> */}
      <Newsdisplay/>
      <Footer/> 
    </div>
  );
}

export default App;
