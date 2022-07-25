import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import List from './Components/List/List'
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import PokemonPage from './Components/PokemonPage/PokemonPage'
import Pokedex from './Components/Pokedex/Pokedex'
import Batalla from './Components/Batalla/Batalla';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index path='/inicio' element={<Home />} />
        <Route path='/pokedex/' element={<Pokedex />} />
        <Route path='/lista' element={<List />} />
        <Route path='/batalla' element={<Batalla />} />
        <Route path='*' element={<Navigate to='/inicio' />} />
        <Route path='' element={<Navigate to='/inicio' />} />
        <Route path='/pokemon' element={<PokemonPage />} >
          <Route path=":pokename" element={<PokemonPage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter >
  // </React.StrictMode>
);
