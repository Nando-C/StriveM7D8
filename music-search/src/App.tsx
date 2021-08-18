import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import ITrack from './types/Track'
import CardsDeck from './components/CardsDeck'
import { Container } from 'react-bootstrap';
import TrackDetails from './components/TrackDetails';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [query, setQuery] = useState('')
  const [tracks, setTracks] = useState<ITrack[]>([])
  
  
  const searchFetch = async (q = 'foals') => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${q}`)
      console.log(response);

      let data = (await response.json()).data as ITrack[]
      console.log(data)
      setTracks(data)
      setIsLoading(false)
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    searchFetch()
  }, [])

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path='/' render={(routerProps) => <NavBar {...routerProps} query={query} setQuery={setQuery} searchFetch={searchFetch} />} />
          <Container className='mt-5'>
            <Route path='/' exact render={(routerProps) => <CardsDeck {...routerProps} tracks={tracks} isLoading={isLoading} />} />
            <Route path='/TrackDetails/:trackId' component={TrackDetails} />
          </Container>

          {/* <img src={logo} className="App-logo" alt="logo" />
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
          </a> */}
        </header>
      </div>
    </Router>

  );
}

export default App;
