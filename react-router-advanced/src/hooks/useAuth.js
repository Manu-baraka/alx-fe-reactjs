// src/hooks/useAuth.js
export function useAuth() {
  // Fake authentication check (simulate login)
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    user,
    isAuthenticated: !!user,
  };
}
