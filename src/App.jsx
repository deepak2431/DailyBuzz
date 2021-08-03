import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Logo from "./assets/logo.png"

import Header from "./components/Header";
import NewsContent from "./NewsContent";
import NewsPage from "./components/NewsPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <div className="App">
          <div className="header-img">
            <img className="header-logo" src={Logo} alt="Logo" />
          </div>
          <Header />
          <div className="main-content">
            <Route exact path="/"component={NewsContent} />
            <Route 
              path="/news/:id"
              component={NewsPage}
            />
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
