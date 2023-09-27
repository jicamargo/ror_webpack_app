// App.js
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchGreeting from '../actions/greetingActions';
import Greeting from './Greeting';

const App = ({ fetchGreeting }) => {
  useEffect(() => {
    fetchGreeting(); // get the greeting from the API on load
  }, [fetchGreeting]);

  return (
    <BrowserRouter>
      <div>
        <h1>Welcome to Rails-React App</h1>
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

App.propTypes = {
  fetchGreeting: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
