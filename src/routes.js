import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import SignUp from './pages/signup';
import Main from './pages/Main';
import NotFoundPage from './components/NotFoundPage';

import PrivateRoute from './PrivateRoute';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Navigate replace to="/signup" />} />
      <Route element={<PrivateRoute />}>
        <Route path="/main" element={<Main />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
