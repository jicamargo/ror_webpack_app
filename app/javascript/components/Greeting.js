// Greeting.js
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Greeting = ({ greeting }) => (
  <div>
    <h2>{greeting}</h2>
  </div>
);

const mapStateToProps = (state) => ({
  greeting: state.msg.msg,
});

Greeting.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Greeting);
