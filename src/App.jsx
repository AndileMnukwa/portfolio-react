import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <div className="preloader">
          <div className="loader"></div>
          <h2>Loading<span className="dot-animation"></span></h2>
        </div>
      ) : (
        <>
          <Navbar />
          <main className="main-content">
            <Hero />
            <About />
            <Services />
            <MyWork />
            <Contact />
          </main>
          <Footer />
          
          <div className="scroll-to-top">
            <a href="#home">↑</a>
          </div>
        </>
      )}
    </div>
  );
};

export default App;