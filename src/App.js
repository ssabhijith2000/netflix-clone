 import React from 'react'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import {originals,action} from './constants/urls'
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="app">
    <NavBar/>
    <Banner/>
    <RowPost title = 'Netflix Originals' url = {originals}/>
    <RowPost title = 'Action' isSmall url = {action}/>
  </div>
  );
}

export default App;
