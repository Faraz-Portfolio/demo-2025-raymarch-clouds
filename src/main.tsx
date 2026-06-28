import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { UI } from "./UI";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <UI />
  </>,
);
