import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "typeface-roboto";
import store, { persistor } from "../src/store";

import App from "./containers/app";
import * as serviceWorker from "./serviceWorker";
if (process.env.NODE_ENV === "development") {
  window.persistor = persistor;
}
render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
