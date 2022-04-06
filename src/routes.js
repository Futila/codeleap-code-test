import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignUp from './pages/signup';
import Main from './pages/Main';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}
