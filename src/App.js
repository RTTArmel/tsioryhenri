import React, { Component } from 'react';
import Accueil from './Component/Accueil/Accueil';
import Apropos from './Component/Apropos/Apropos';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
              <div>
                <nav>
                      <a><Link to="/">Accueil</Link></a>
                      <a><Link to="/about">A propos</Link></a>
                      <a><Link to="/contact">Contact</Link></a>
                </nav>

                <Route path="/" exact component={Accueil} />
                <Route path="/about" component={Apropos} />
                <Route path="/contact" component={Contact} />
                <div className="foot"><Footer /></div>
              </div>
        </Router>
    );
  }
}

export default App;