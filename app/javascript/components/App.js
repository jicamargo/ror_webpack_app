import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => {
  return (
    <Router>
      <div>
        aca estoy
        <Routes>
          <Route path="/" component={Greeting} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;