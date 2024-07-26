import React from 'react';
import ExperienceCanvas from './components/ExperienceCanvas';
import Loader from './components/Loader';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ExperienceCanvas />
      <Loader />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;