import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MemoryGame from './pages/Memorygame';
import { UserContextProvider } from '../context/userContext';

function App() {
  return (
    <UserContextProvider>
      <Header />
      <Navbar />
      <Toaster position="center" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/memorygame" element={<MemoryGame />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
