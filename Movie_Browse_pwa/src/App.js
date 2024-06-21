import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { MovieList } from './Components/MovieList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieDetails } from './Components/MovieDetails';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/movies" exact={true} element={<MovieList />} />
          <Route path="/details" exact={true} element={<MovieDetails />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
