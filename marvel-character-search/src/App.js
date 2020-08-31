import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header';

const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
 


  return ( 
  <div className="container"> 
  <Header />
  </div>
  )
}

export default App;
