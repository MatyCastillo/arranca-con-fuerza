import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from 'react';
import Home from "./containers/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import NotFound from "./containers/NotFound/NotFound";
import TopsContainer from "./containers/TopsContainer/TopsContainer";
import ShortsContainer from "./containers/ShortsContainer/ShortsContainer";
import FloatingButton from "./components/FloatingButton/FloatingButton";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <NavBar />
        <FloatingButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/tops-crops" element={<TopsContainer />} />
          <Route exact path="/shorts-calzas" element={<ShortsContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;