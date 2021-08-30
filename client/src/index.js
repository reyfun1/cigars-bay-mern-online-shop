import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import '../src/styles/main.css'
import App from './App';

// Import stuff for redux
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
