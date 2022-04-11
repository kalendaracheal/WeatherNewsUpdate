import React from 'react';
import Weather from './Weather';
import NewsList from './Components/NewsList';
import Newsdisplay from './Components/Newsdisplay';
import LocalNews from './Components/LocalNews';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {

 
  return (
    <div>
      
      <Router>
      {/* <Weather/> */}
        <Routes>
        <Route exact path='/' element={< Newsdisplay />}></Route>
        <Route exact path='/Weather' element={< Weather />}></Route>
        <Route exact path='/NewsList' element={< NewsList />}></Route>
        <Route exact path='/LocalNews' element={< LocalNews />}></Route>
        <Route exact path='/Newsdisplay' element={< Newsdisplay />}></Route>

        </Routes>
        </Router>
        
     
    </div>
  );
}

export default App;
