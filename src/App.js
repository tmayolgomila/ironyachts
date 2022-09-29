import './App.css';
import Navbar from './navbar';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, {Suspense, lazy} from 'react';
const Home = lazy(()=> import('./home'))

export default function App() {
  const basename = process.env.BASENAME || "";
  return (
    
    <div className="App">
      <Suspense fallback={<div className="wrapper">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
</div>} >
      <BrowserRouter basename={basename}>
    <Navbar/>
    <Routes>
            <Route element={<Home />} path="/" />
            
        </Routes>
    </BrowserRouter>
    </Suspense>
    </div>
  );
}

