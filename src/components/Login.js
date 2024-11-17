import React, { useState } from 'react';
import { signInWithGoogle } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      navigate('/dashboard');
    } catch (error) {
      console.error('Error logging in', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login with Google</h2>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Loading...' : 'Login with Google'}
      </button>
    </div>
  );
};

export default Login;
