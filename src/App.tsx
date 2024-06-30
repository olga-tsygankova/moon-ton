import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import { MainPage } from './pages/MainPage/MainPage';
import { NewFormPage } from './pages/NewFormPage';
import { FormPage } from './pages/FormPage';

import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <MantineProvider>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/form-page" element={<FormPage/>}/>
            <Route path="/form" element={<NewFormPage/>}/>
          </Routes>
        </MantineProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
