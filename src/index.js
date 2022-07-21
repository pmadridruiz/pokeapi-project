import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Root from './Components/Root';
import Combat from './Components/Combat/Combat';
import Finder from './Components/Finder/Finder';
import List from './Components/List/List';
import Pokedex from './Components/Pokedex/Pokedex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="buscar" element={<Finder />} />
          <Route path="batalla" element={<Combat />} />
          <Route path="todos" element={<List />} />
          <Route path="pokedex" element={<Pokedex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
