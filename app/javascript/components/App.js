// App.js
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGreeting } from '../actions/greetingActions'; // Ajusta la ruta según tu estructura de archivos
import Greeting from './Greeting';

const App = ({ fetchGreeting }) => {
  useEffect(() => {
    console.log('App.js useEffect para llamar a fetchGreeting');
    fetchGreeting(); // get the greeting from the API on load
  }, [fetchGreeting]);

  return (
    <BrowserRouter>
      <div>
        <h1>Welcome to RoR and React Example</h1>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const mapDispatchToProps = {
  fetchGreeting,
};

export default connect(null, mapDispatchToProps)(App);
