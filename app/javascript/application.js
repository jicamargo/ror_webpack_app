// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
// import store and provider
import store from './store';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
