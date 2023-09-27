// actions/greetingActions.js
export const fetchGreeting = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/random_greeting'); // Ajusta la URL según tu endpoint de la API
      if (!response.ok) {
        throw new Error('No se pudo obtener el saludo'); // Maneja errores de respuesta
      }
      const data = await response.json();
      console.log('fetchGreeting data:');
      console.log(data);
      dispatch({ type: 'SET_GREETING', payload: data.text }); // Actualiza el estado con el mensaje
    } catch (error) {
      console.error('Error al obtener el saludo:', error);
    }
  };
};
