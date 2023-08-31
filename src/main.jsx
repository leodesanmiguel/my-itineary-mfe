import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { storeData } from "./redux";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={storeData}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
  </Provider>
);
