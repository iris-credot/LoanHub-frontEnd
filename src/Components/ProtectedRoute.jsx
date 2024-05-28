import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('jwt') !== null;

  if (!isAuthenticated) {
    return <Navigate to="/auth/signin" />;
  }

  return children;
};

export default ProtectedRoute;
