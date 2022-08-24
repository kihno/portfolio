import React from 'react';
import './App.css'
import Header from './components/Header';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Work />
      <Footer />
      <div className="background"></div>
    </div>
  );
}

export default App;
