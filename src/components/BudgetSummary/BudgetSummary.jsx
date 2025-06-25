import React, { useMemo } from 'react';
import styles from './BudgetSummary.module.css';
import formatCurrency from '../../utils/formatCurrency';


const BudgetSummary = ({ items = [] }) => {
  const { totalIncome, totalExpenses, balance } = useMemo(() => {
    let income = 0;
    let expenses = 0;

    items.forEach(item => {
      if (item.type === 'income') {
        income += parseFloat(item.amount);
      } else if (item.type === 'expense') {
        expenses += parseFloat(item.amount);
      }
    });

    return {
      totalIncome: income,
      totalExpenses: expenses,
      balance: income - expenses,
    };
  }, [items]);

  return (
    <div className={styles.summary}>
      <h2>Budget Summary</h2>
      <div className={styles.row}>
        <span>Total Income:</span>
        <span className={styles.income}>{formatCurrency(totalIncome)}</span>
      </div>
      <div className={styles.row}>
        <span>Total Expenses:</span>
        <span className={styles.expense}>{formatCurrency(totalExpenses)}</span>
      </div>
      <div className={styles.row}>
        <span>Remaining Balance:</span>
        <span
          className={balance >= 0 ? styles.positive : styles.negative}
        >{formatCurrency(balance)}
        </span>
      </div>
    </div>
  );
};

export default BudgetSummary;
