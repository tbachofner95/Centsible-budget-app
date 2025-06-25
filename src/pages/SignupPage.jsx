// src/pages/SignupPage.jsx
import React, { useEffect } from 'react';
import SignupForm from '../features/auth/SignupForm';
import { signupUser } from '../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, user } = useSelector(state => state.auth);

  const handleSignup = ({ email, password }) => {
    // TODO: implement signup logic (API call or Firebase)
    dispatch(signupUser({ email, password }));
  };

  useEffect(() => {
    if (user) {
      navigate('/budgets');
    }
  }, [user, navigate]);

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: 8 }}>
      <h1>Create an Account</h1>
      <SignupForm onSubmit={handleSignup} />
      {loading && <p>Signing up...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignupPage;
