import React, { useState } from 'react';
import formatCurrency from '../utils/formatCurrency';
import styles from './RecurringTransactionsManager.module.css';

const RecurringTransactionsManager = () => {
    const [transactions, setTransactions] = useState([]);
    const [form, setForm] = useState({
        name: '',
        amount: '',
        type: 'income',
        frequency: 'monthly'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.amount) return;
        setTransactions([...transactions, { ...form, id: Date.now() }]);
        setForm({ name: '', amount: '', type: 'income', frequency: 'monthly' });
    };

    const handleDelete = (id) => {
        setTransactions(transactions.filter((tx) => tx.id !== id));
    };

    return (
        <div className={styles.container}>
  <h2 className={styles.title}>Recurring Transactions</h2>
  <form onSubmit={handleSubmit} className={styles.form}>
    <input
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      placeholder="Transaction name"
      className={styles.input}
    />
    <input
      type="number"
      name="amount"
      value={form.amount}
      onChange={handleChange}
      placeholder="Amount"
      className={styles.input}
    />
    <div className={styles.flexRow}>
      <select name="type" value={form.type} onChange={handleChange} className={styles.select}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <select name="frequency" value={form.frequency} onChange={handleChange} className={styles.select}>
        <option value="weekly">Weekly</option>
        <option value="biweekly">Bi-Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
    </div>
    <button type="submit" className={styles.button}>Add</button>
  </form>

  <ul className={styles.list}>
    {transactions.map((tx) => (
      <li key={tx.id} className={styles.listItem}>
        <div className={styles.listItemLeft}>
          <p className={styles.name}>{tx.name}</p>
          <p className={styles.details}>{tx.type} – {tx.frequency}</p>
        </div>
        <div className="flex items-center gap-4">
          <span>{formatCurrency(tx.amount)}</span>
          <button
            onClick={() => handleDelete(tx.id)}
            className={styles.deleteButton}
          >
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>
    );
};

export default RecurringTransactionsManager;