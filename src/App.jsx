import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { ContextProvider } from './context/Context';
import Home from './pages/Home';
import Project from './pages/Project';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/project/:id" element={<Project />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
