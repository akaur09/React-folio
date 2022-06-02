import './App.css';
import React from 'react';
// import pages
import Navbar from './components/Navigation';
import Footer from './components/Footer';
import Projects from './components/Project';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className="App">
      {/* add pages*/}
      <Header />
      <Navbar />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
