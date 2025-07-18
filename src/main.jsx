import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Objective from "./Pages/Objective";
import Connect from "./Pages/connect";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Objective />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
