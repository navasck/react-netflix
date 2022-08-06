import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {originals, action, trending, horrorMovies} from './urls'


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Movies'/> 
        <RowPost url={horrorMovies} title='Horror Movies' isSmall={true} />
        <RowPost url={trending} title='Trending' isSmall />
        <RowPost url={action} title='Action' isSmall />
    </div>
  );
}

export default App;
