import React, { useState, useEffect } from 'react';
import styles from './RecurringBudgetItemForm.module.css';

const frequencies = ['weekly', 'biweekly', 'monthly', 'yearly'];
const types = ['income', 'expense'];

const RecurringBudgetItemForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [frequency, setFrequency] = useState('monthly');
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (initialData) {
      setCategory(initialData.category || '');
      setAmount(initialData.amount || '');
      setType(initialData.type || 'expense');
      setFrequency(initialData.frequency || 'monthly');
      setActive(initialData.active !== undefined ? initialData.active : true);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category || !amount) {
      alert('Please fill in all required fields.');
      return;
    }

    onSubmit({
      ...initialData,
      category,
      amount: parseFloat(amount),
      type,
      frequency,
      active,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>{initialData.id ? 'Edit Recurring Item' : 'Add Recurring Item'}</h3>

      <label>
        Category*:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </label>

      <label>
        Amount*:
        <input
          type="number"
          min="0"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>

      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          {types.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </label>

      <label>
        Frequency:
        <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          {frequencies.map((freq) => (
            <option key={freq} value={freq}>{freq}</option>
          ))}
        </select>
      </label>

      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={active}
          onChange={() => setActive(!active)}
        />
        Active
      </label>

      <div className={styles.buttons}>
        <button type="submit">Save</button>
        <button type="button" className={styles.cancel} onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default RecurringBudgetItemForm;
