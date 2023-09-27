// Greeting.js
import React from 'react';
import { connect } from 'react-redux';

const Greeting = ({ greeting }) => {
  return (
    <div>
      <h2>{greeting}</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
    greeting: state.msg.msg, 
});
export default connect(mapStateToProps)(Greeting);
