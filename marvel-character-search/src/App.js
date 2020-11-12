import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header';

const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  const fetchItems = async () => {
    const pubkey = "1141818520a744bbba8827740c0b78e7"
    const result = await axios(
      `http://gateway.marvel.com/characters`
    )
    console.log(result.data)
  }

  fetchItems()
}, [])

  return ( 
  <div className="container"> 
  <Header />
  </div>
  )
}

export default App;