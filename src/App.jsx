import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Feature from './components/Feature';
import Projects from './components/Projects';
import Contact from './components/Contact';
//import { Outlet } from "react-router-dom";


function App() {
  return (
    <div>
      <Header />
      <Projects/>
      <Footer />
    </div>
  );
}

export default App;
