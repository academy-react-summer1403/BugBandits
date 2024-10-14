import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./index.css";
import "./assets/Fonts/fonts.css";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import "./assets/Fonts/fonts.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
