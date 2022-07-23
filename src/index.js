import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Root from './Components/Root';
import Combat from './Components/Combat/Combat'
import List from './Components/List/List'
import Pokemon from './Components/Pokemon/Pokemon'
import History from './Components/History/History';
import Home from './Components/Home/Home';
import CardPokemon from './Components/Cards/CardPokemon'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Root />}>
        <Route path='/inicio' element={<Home />} />
        <Route path='/historial' element={<History />} />
        <Route path='/lista' element={<List />} />
        <Route path='/combate' element={<Combat />} />
        <Route path='/pokemon' element={<Pokemon />} >
          <Route path='xd' element={<CardPokemon />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter >
  // </React.StrictMode>
);
