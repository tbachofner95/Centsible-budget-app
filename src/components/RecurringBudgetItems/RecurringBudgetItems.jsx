import React from 'react';
import styles from './RecurringBudgetItems.module.css';

const RecurringBudgetItems = ({ items = [], onAdd, onEdit, onDelete }) => {
  return (
    <div className={styles.container}>
      <h2>Recurring Budget Items</h2>

      {items.length === 0 ? (
        <p>No recurring items yet.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Frequency</th>
              <th>Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ id, category, amount, type, frequency, active }) => (
              <tr key={id}>
                <td>{category}</td>
                <td>${parseFloat(amount).toFixed(2)}</td>
                <td>{type}</td>
                <td>{frequency}</td>
                <td>{active ? 'Yes' : 'No'}</td>
                <td>
                  <button onClick={() => onEdit({ id, category, amount, type, frequency, active })}>
                    Edit
                  </button>
                  <button onClick={() => onDelete(id)} className={styles.deleteButton}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button onClick={() => onAdd && onAdd({ /* your new item data here or open form */ })} className={styles.addButton}>
        + Add Recurring Item
      </button>
    </div>
  );
};

export default RecurringBudgetItems;
