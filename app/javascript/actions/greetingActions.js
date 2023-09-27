// actions/greetingActions.js
export const fetchGreeting = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/random_greeting'); 
      if (!response.ok) {
        throw new Error('Cannot fetch the greeting');
      }
      const data = await response.json();
      dispatch({ type: 'SET_GREETING', payload: data.text }); 
    } catch (error) {
      console.error('Error fetching the greeting', error);
    }
  };
};
