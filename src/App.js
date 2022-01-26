import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './containers/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import NotFound from './containers/NotFound/NotFound';
import TopsContainer from './containers/TopsContainer/TopsContainer';
import ShortsContainer from './containers/ShortsContainer/ShortsContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/tops-crops" element={<TopsContainer/>} />
        <Route exact path="/shorts-calzas" element={<ShortsContainer/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
