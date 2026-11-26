import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";

// reveal styles hide content only while JS runs (see styles: .js .rv)
document.documentElement.classList.add("js");

createRoot(document.getElementById("root")!).render(<App />);
