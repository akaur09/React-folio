import './App.css';
import React from 'react';
// import pages
import Navbar from './components/Navigation';
import Footer from './components/Footer';
import Projects from './components/Project';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* add pages*/}
      <Header />
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
