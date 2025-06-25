// src/pages/SettingsPage.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SettingsPage.module.css';
import { updateSettings } from '../features/settings/settingsSlice';


const SettingsPage = () => {
    const settings = useSelector(state => state.settings);
    const dispatch = useDispatch();

    
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [currency, setCurrency] = useState('USD');

  const handleSave = (e) => {
    e.preventDefault();
    // Here you'd call your API or update settings in global state
    alert('Settings saved!');
  };

  return (
    <div className={styles.settingsContainer}>
      <h2>Account Settings</h2>
      <form onSubmit={handleSave} className={styles.settingsForm}>
        <div className={styles.formGroup}>
          <label htmlFor="currency">Preferred Currency:</label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="JPY">JPY - Japanese Yen</option>
          </select>
        </div>

        <div className={styles.formGroupCheckbox}>
          <input
            type="checkbox"
            id="emailNotifications"
            checked={emailNotifications}
            onChange={(e) => setEmailNotifications(e.target.checked)}
          />
          <label htmlFor="emailNotifications">
            Receive email notifications
          </label>
        </div>

        <button type="submit" className={styles.saveButton}>Save Changes</button>
      </form>
    </div>
  );
};

export default SettingsPage;
