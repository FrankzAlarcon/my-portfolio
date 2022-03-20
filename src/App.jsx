import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { ContextProvider } from './context/Context';
import Home from './pages/Home';
import Project from './pages/Project';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
