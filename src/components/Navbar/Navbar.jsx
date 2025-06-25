import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Navbar.module.css';
import { logout } from '../../features/auth/authSlice';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    setMenuOpen(false);
    navigate('/login');
  };
  
  const toggleMenu = () => setMenuOpen(prev => !prev);


  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/"className={styles.navbarLogo}>Centsible</Link>
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls='main-menu'>
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
        </button>
      </div>
<ul id="main-menu" className={`${styles.navLinks} ${menuOpen ? styles.navActive : ''}`}>
  <li>
    <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setMenuOpen(false)}>
      Home
    </NavLink>
  </li>
  {user ? (
    <>
      <li>
        <NavLink to="/budgets" end className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setMenuOpen(false)}>
          Budget
        </NavLink>
      </li>
      <li>
        <NavLink to="/settings" end className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setMenuOpen(false)}>
          Settings
        </NavLink>
      </li>
      <li>
        <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
      </li>
    </>
  ) : (
    <>
      <li>
        <NavLink to="/login" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setMenuOpen(false)}>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setMenuOpen(false)}>
          Signup
        </NavLink>
      </li>
    </>
  )}
</ul>

     
    </nav>
  );
};

export default Navbar;
