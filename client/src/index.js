import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { persistore } from "./Store/store";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./Store/store.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* Wrapping with PersistGate */}
      <PersistGate loading={null} persistor={persistore}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);
