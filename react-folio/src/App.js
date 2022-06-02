import './App.css';
import React from 'react';
// add react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Navbar from './components/Navigation';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Project';
// fix the function to add teh routes correctly to make them load faster
function App() {
  return (
    <div className="App">
      <Router>
        <div className='flex-column justify-flex-start min-100-vh'>
        <Header />
          <Navbar />
          <div className='container'>
           <Routes>
             <Route 
              path="/"
              element= {<About />}
              />
              <Route 
              path="/"
              element= {<Projects />}
              />
           </Routes>
          </div>
          <Footer /> 
        </div>
      </Router>      
    </div>
  );
}

export default App;
