import React, { useMemo } from 'react';
import styles from './BudgetCategoryList.module.css';

const BudgetCategoryList = ({ items = [] }) => {
  const categoryTotals = useMemo(() => {
    const totals = {};

    items.forEach(item => {
      const { category, amount } = item;
      if (!totals[category]) {
        totals[category] = 0;
      }
      totals[category] += parseFloat(amount);
    });

    return totals;
  }, [items]);

  const categoryNames = Object.keys(categoryTotals);

  return (
    <div className={styles.wrapper}>
      <h2>Spending by Category</h2>
      {categoryNames.length === 0 ? (
        <p className={styles.empty}>No budget data yet.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Category</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {categoryNames.map(category => (
              <tr key={category}>
                <td>{category}</td>
                <td>${categoryTotals[category].toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BudgetCategoryList;
