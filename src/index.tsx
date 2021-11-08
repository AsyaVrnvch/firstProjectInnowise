import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body{
    margin:0px;
    padding:0px;
    font-size:22px;
    box-sizing:border-box;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle/>
      <App />
    </Provider>  
  </BrowserRouter>,
  document.getElementById('root')
);