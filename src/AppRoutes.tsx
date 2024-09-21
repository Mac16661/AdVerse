import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OrgPage from './pages/OrgPage';
import AppCreator from './pages/AppCreator';
import ProfilePage from './pages/ProfilePage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/org" element={<OrgPage />} />
        <Route path="/app" element={<AppCreator />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;