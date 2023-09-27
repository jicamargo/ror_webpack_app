// reducers/greetingReducer.js
const initialState = {
  msg: 'Initial greeting', 
};

const greetingReducer = (state = initialState, action) => {
  console.log('greetingReducer action:');
  console.log(action);
  console.log('greetingReducer state:');
  console.log(state)
  switch (action.type) {
    case 'SET_GREETING':
      return {
        ...state,
        msg: action.payload, // Updates the greeting in state
      };
    default:
      return state;
  }
};

export default greetingReducer;
