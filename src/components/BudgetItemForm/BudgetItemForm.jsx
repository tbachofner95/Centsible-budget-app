import React, { useState, useEffect } from 'react';
import styles from './BudgetItemForm.module.css';

const BudgetItemForm = ({ mode = 'add', existingItem = null, onSubmit, onCancel }) => {
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurrence, setRecurrence] = useState('monthly');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [frequency, setFrequency] = useState(existingItem?.frequency || 'monthly');
  const [active, setActive] = useState(existingItem?.active ?? true);

  useEffect(() => {
    if (mode === 'edit' && existingItem) {
      setType(existingItem.type);
      setCategory(existingItem.category);
      setAmount(existingItem.amount);
      setIsRecurring(existingItem.isRecurring);
      setRecurrence(existingItem.recurrence || 'monthly');
      setDate(existingItem.date);
      setNotes(existingItem.notes || '');
      setFrequency(existingItem.frequency || 'monthly');
      setActive(existingItem.active ?? true);
    }
  }, [mode, existingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemData = {
      type,
      category,
      amount: parseFloat(amount),
      isRecurring,
      recurrence: isRecurring ? recurrence : null,
      frequency: isRecurring ? frequency : null,
      active: isRecurring ? active : null,
      date: !isRecurring ? date : null,
      notes,
    };
    onSubmit(itemData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>{mode === 'edit' ? 'Edit Budget Item' : 'Add Budget Item'}</h2>

      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </label>

      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </label>

      <label>
        Amount:
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>

      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>

      <label>
        <input
          type="checkbox"
          checked={isRecurring}
          onChange={(e) => setIsRecurring(e.target.checked)}
        />
        Recurring?
      </label>

      {isRecurring && (
        <>
        <label>
          Recurrence:
          <select value={recurrence} onChange={(e) => setRecurrence(e.target.value)}>
            <option value="weekly">Weekly</option>
            <option value="biweekly">Bi-Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </label>

        <label>
      Frequency:
      <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
        <option value="weekly">Weekly</option>
        <option value="biweekly">Bi-Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </label>

    <label>
      <input
        type="checkbox"
        checked={active}
        onChange={(e) => setActive(e.target.checked)}
      />
      Active
    </label>
  </>
      )}

      <label>
        Notes:
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </label>

      <div className={styles.actions}>
        <button type="submit">{mode === 'edit' ? 'Save Changes' : 'Add Item'}</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default BudgetItemForm;
