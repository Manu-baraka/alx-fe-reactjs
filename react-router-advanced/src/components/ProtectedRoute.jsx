// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("auth"); // fake auth

  return isAuthenticated ? children : <Navigate to="/login" />;
}
