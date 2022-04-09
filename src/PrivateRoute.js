import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from './hooks/user';

export default function PrivateRoute() {
  const { getUser } = useUser();
  return getUser() ? <Outlet /> : <Navigate to="/signup" />;
}
