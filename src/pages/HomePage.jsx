import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Centsible</h1>
      <p className={styles.subtitle}>Your smart budgeting companion</p>
      <div className={styles.content}>
        <p>
          Track income, expenses, and recurring payments with ease. Create personalized budgets and stay in control of your finances.
        </p>
        <button className={styles.button} onClick={handleGetStarted}>
          Get Started for Free
        </button>
        <p className={styles.secondaryText}>
          Already have an account? <span className={styles.loginLink} onClick={() => navigate('/login')}>Log In</span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
