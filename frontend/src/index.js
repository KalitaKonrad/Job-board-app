import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/main.css";
import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import "./assets/login.css";

// KEEPING STORE IN LOCAL STORAGE WHEN PAGE IS REFRESHED

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.err(err);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.err(err);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

//                    STORE

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk))); // add persistedState, after allReducers to keep state after refresh

// every time there is dispatch call saveToLocalStorage
// store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
