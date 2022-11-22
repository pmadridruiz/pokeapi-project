import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import List from './Components/List/List'
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import PokemonPage from './Components/PokemonPage/PokemonPage'
import Pokedex from './Components/Pokedex/Pokedex';
import Batalla from './Components/Batalla/Batalla';
import FavoritePage from './Components/Favorites/FavoritePage';
import HistoryPage from './Components/History/HistoryPage';
import { GlobalProvider } from './Context/GlobalState';
import { Auth0Provider } from '@auth0/auth0-react'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Auth0Provider domain='dev-i8z1aybtwhwdzoor.us.auth0.com' clientId='AlC88zVgIvDgGICZP0kwu37iVMNzVlYO' redirectUri={window.location.origin}>
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index path='/inicio' element={<Home />} />
            <Route path='/pokedex/' element={<Pokedex />} />
            <Route path='/lista' element={<List />} />
            <Route path='/batalla' element={<Batalla />} />
            <Route path='/pokemon' element={<PokemonPage />} >
              <Route path=":pokename" element={<PokemonPage />} />
            </Route>
            <Route path='/favoritos' element={<FavoritePage />} />
            <Route path='/historial' element={<HistoryPage />} />
            <Route path='*' element={<Navigate to='/inicio' />} />
            <Route path='' element={<Navigate to='/inicio' />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </GlobalProvider>
  </Auth0Provider>
  // </React.StrictMode>
);
