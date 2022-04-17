import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost title='netflix Movies'/> 
        <RowPost title='Action' isSmall={true} />
        <RowPost title='Comedy' isSmall />
    </div>
  );
}

export default App;
