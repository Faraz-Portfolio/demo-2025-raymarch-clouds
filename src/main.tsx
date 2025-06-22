import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UI } from "./Ui.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <UI />
  </>
);
