import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Tracks from './types/Tracks';

function App() {
  const [query, setQuery] = useState('')
  const [tracks, setTracks] = useState<Tracks[]>([])

  const searchFetch = async (q = 'foals') => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${q}`)
      console.log(response);

      let data = (await response.json()).data as Tracks[]
      console.log(data)
      setTracks(data)
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    searchFetch()
  }, [])

  return (
    <Router>
      <Route path='/' render={(routerProps) => <NavBar {...routerProps} query={query} setQuery={setQuery} searchFetch={searchFetch}/>} />

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>

  );
}

export default App;
