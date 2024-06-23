import React from "react";
import "./App.css";

import { MainPage } from "./pages/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormPage } from "./pages/FormPage";

import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <BrowserRouter>
      <div className="app" >
        <MantineProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/form-page" element={<FormPage />} />
        </Routes>
        </MantineProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
