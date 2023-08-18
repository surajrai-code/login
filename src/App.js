import React from 'react';
import { AuthContextProvider } from './Component/AuthContext';
import Header from './Component/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Data from './Component/Data';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;