import React from 'react';
import Weather from './Weather';
import NewsList from './Components/NewsList';
import Newsdisplay from './Components/Newsdisplay';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {

 
  return (
    <div>
      <Router>
      {/* <Weather/> */}
        <Routes>
        <Route exact path='/Newsdisplay' element={< Newsdisplay />}></Route>
        <Route exact path='/Weather' element={< Weather />}></Route>
        <Route exact path='/NewsList' element={< NewsList />}></Route>

        </Routes>
        </Router>
     
    </div>
  );
}

export default App;
