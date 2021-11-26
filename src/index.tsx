import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/index";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Global.Styles";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyCh28yppDN8wCs6CcZYRR9bH3ki-fD_TEo",
  authDomain: "first-project-innowise.firebaseapp.com",
  projectId: "first-project-innowise",
  storageBucket: "first-project-innowise.appspot.com",
  messagingSenderId: "920735638530",
  appId: "1:920735638530:web:ea47b9a16c323cb35ab31b",
  measurementId: "G-JW2Q5E4KMN"
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
