import React from 'react';

import './App.css';
import Logo from "./assets/logo.png"

import Header from "./components/Header";
import SearchSortBar from "./components/SearchSortBar";
import NewsContent from "./NewsContent";



function App() {
  return (
    <div className="App">
      <div className="header-img">
        <img className="header-logo" src={Logo} alt="Logo" />
      </div>
      <div className="main-content">
        <Header />
        <SearchSortBar />
        <NewsContent />
        <NewsContent />
        <NewsContent />

      </div>
    </div>
  );
}

export default App;
