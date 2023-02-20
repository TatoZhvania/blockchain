import React from 'react'
import About from './components/About';
import Developers from './components/Developers';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Developers />
      <Footer />
    </div>
  );
}

export default App;
