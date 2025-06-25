// src/components/Dashboard.js
import React from 'react';

const Dashboard = () => {
    // Sample static data (can be replaced with props or context later)
    const totalIncome = 5000;
    const totalExpenses = 3200;
    const netBalance = totalIncome - totalExpenses;

    return (
        <div className="dashboard-container" style={styles.container}>
            <h1 style={styles.header}>Centsible Dashboard</h1>
            <div style={styles.summary}>
                <div style={styles.card}>
                    <h2>Total Income</h2>
                    <p>${totalIncome.toFixed(2)}</p>
                </div>
                <div style={styles.card}>
                    <h2>Total Expenses</h2>
                    <p>${totalExpenses.toFixed(2)}</p>
                </div>
                <div style={styles.card}>
                    <h2>Net Balance</h2>
                    <p style={{ color: netBalance >= 0 ? 'green' : 'red' }}>
                        ${netBalance.toFixed(2)}
                    </p>
                </div>
            </div>

            <div style={styles.section}>
                <h3>Recent Transactions</h3>
                <ul>
                    <li>June 23 - Grocery - $150.00</li>
                    <li>June 22 - Paycheck - $2500.00</li>
                    <li>June 20 - Rent - $1200.00</li>
                </ul>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
        fontFamily: 'sans-serif'
    },
    header: {
        textAlign: 'center',
        marginBottom: '2rem'
    },
    summary: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '2rem'
    },
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        width: '25%',
        textAlign: 'center',
        backgroundColor: '#f9f9f9'
    },
    section: {
        marginTop: '2rem'
    }
};

export default Dashboard;