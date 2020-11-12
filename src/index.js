import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import App from './App';

const initialState = [
  {
    dateTime: '29.10.2020, 19:10:42',
    author: 'Elias',
    message: 'First post! GG'
  },
  {
    dateTime: '29.10.2020, 19:14:42',
    author: 'Elias',
    message: 'Now in IRC style'
  }, 
];

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE': {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};


const store = createStore(messageReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
