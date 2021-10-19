import React from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from './components/pages/Home/Home.jsx';
import Services from "./components/pages/Services/Services";

import './App.css';
import Contact from "./components/pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
