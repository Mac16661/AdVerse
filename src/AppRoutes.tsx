import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OrgPage from './pages/OrgPage';
import AppCreator from './pages/AppCreator';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/org" element={<OrgPage />} />
        <Route path="/app" element={<AppCreator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;