import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import SeekerWelcome from './pages/SeekerWelcome';
import SeekerDashboard from './pages/SeekerDashboard';
import RecruiterWelcome from './pages/RecruiterWelcome';
import RecruiterDashboard from './pages/RecruiterDashboard';
import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/seeker-welcome"
              element={
                <PrivateRoute>
                  <SeekerWelcome />
                </PrivateRoute>
              }
            />
            <Route
              path="/seeker-dashboard"
              element={
                <PrivateRoute>
                  <SeekerDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/recruiter-welcome"
              element={
                <PrivateRoute>
                  <RecruiterWelcome />
                </PrivateRoute>
              }
            />
            <Route
              path="/recruiter-dashboard"
              element={
                <PrivateRoute>
                  <RecruiterDashboard />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

