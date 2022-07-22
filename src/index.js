import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Root from './Components/Root';
import Combat from './Components/Combat/Combat'
import List from './Components/List/List'
import Pokemon from './Components/Pokemon/Pokemon'
import History from './Components/History/History';
import Home from './Components/Home/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Root />}>
        <Route path='/inicio' element={<Home />} />
        <Route path='/pokemon' element={<Pokemon />} />
        <Route path='/historial' element={<History />} />
        <Route path='/lista' element={<List />} />
        <Route path='/combate' element={<Combat />} />
      </Route>
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
