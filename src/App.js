import './App.css';
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const basename = process.env.BASENAME || "";
  return (
    
    <div className="App">
      <BrowserRouter basename={basename}>
    <Navbar/>
    <Routes>
            <Route element={<Home />} path="/" />
            
        </Routes>
    </BrowserRouter>
    </div>
  );
}

