import React from "react";
import "./App.css";

import { MainPage } from "./pages/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormPage } from "./pages/FormPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app" >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/form-page" element={<FormPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
