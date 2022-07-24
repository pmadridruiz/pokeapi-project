import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import List from './Components/List/List'
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index path='/inicio' element={<Home />} />
        <Route path='/lista' element={<List />} />
        <Route path='*' element={<Navigate to='/inicio' />} />
        <Route path='' element={<Navigate to='/inicio' />} />
      </Route>
    </Routes>
  </BrowserRouter >
  // </React.StrictMode>
);
