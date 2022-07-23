import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Combat from './Components/Combat/Combat'
import List from './Components/List/List'
import Pokemon from './Components/Pokemon/Pokemon'
import History from './Components/History/History';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Search />}>
        <Route index path='/inicio' element={<Home />} />
        <Route path='/historial' element={<History />} />
        <Route path='/lista' element={<List />} />
        <Route path='/combate' element={<Combat />} />
        <Route path='/pokemon' element={<Pokemon />} />
        <Route path='*' element={<Navigate to='/inicio' />} />
        <Route path='' element={<Navigate to='/inicio' />} />
      </Route>
    </Routes>
  </BrowserRouter >
  // </React.StrictMode>
);
