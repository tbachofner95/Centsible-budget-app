import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import { loginUser } from '../features/auth/authSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, user } = useSelector(state => state.auth);

  const handleLogin = ({ email, password }) => {
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (user) {
      navigate('/budgets');
    }
  }, [user, navigate]);

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: 8 }}>
      <h1>Login to Centsible</h1>
      <AuthForm onSubmit={handleLogin}  />
      {loading && <p>Logging in...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginPage;
