import "./globalStyles/index.css"
import React from "react";
import ReactDOM from "react-dom/client";
import { PixabayApi } from "./components/PixabayApi/PixabayApi.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode >
    <PixabayApi />
  </React.StrictMode>,
);
