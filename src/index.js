import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/Router";

import { Provider } from "react-redux";

import store from "./redux/store";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
