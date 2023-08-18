import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const initialState = localStorage.getItem("token");
  const [token, setToken] = useState(initialState);
  const [email, setEmail] = useState("");
  const isLoggedIn = !!token;

  const loginHandler = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const emailHandler = (newEmail) => {
    setEmail(newEmail);
  };

  const contextValue = {
    token,
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    email,
    setEmail: emailHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};