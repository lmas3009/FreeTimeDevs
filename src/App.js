import React from 'react';
import '../src/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Features from './components/Features';
import Team from './components/Team';
import Process from './components/Process';
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Process />
      <Team />
      <Footer />
    </>
  );
}

export default App;
