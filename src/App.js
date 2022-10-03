import './App.css';
import Navbar from './navbar';
import Archive from './archive';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, {Suspense, lazy} from 'react';
const Home = lazy(()=> import('./home'))

export default function App() {
  const basename = process.env.BASENAME || "";
  return (
    
    <div className="App">
      <Suspense fallback={<div class="loader">
    <div class="waves"></div>
</div>} >
      <BrowserRouter basename={basename}>
    <Navbar/>
    <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Archive />} path="/archive" />
        </Routes>
    </BrowserRouter>
    </Suspense>
    </div>
  );
}

