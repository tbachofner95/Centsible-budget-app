// src/components/BudgetCategoryManager.js
import React, { useState } from 'react';

const BudgetCategoryManager = () => {
    const [categories, setCategories] = useState([
        { id: 1, name: 'Rent', budget: 1200, spent: 1200 },
        { id: 2, name: 'Groceries', budget: 400, spent: 320 },
        { id: 3, name: 'Entertainment', budget: 200, spent: 150 }
    ]);

    const [newCategory, setNewCategory] = useState({ name: '', budget: '' });

    const handleAddCategory = () => {
        if (!newCategory.name || !newCategory.budget) return;

        const newCat = {
            id: Date.now(),
            name: newCategory.name,
            budget: parseFloat(newCategory.budget),
            spent: 0
        };

        setCategories([...categories, newCat]);
        setNewCategory({ name: '', budget: '' });
    };

    const handleDelete = (id) => {
        setCategories(categories.filter((cat) => cat.id !== id));
    };

    return (
        <div style={styles.container}>
            <h2>Budget Categories</h2>
            <div style={styles.list}>
                {categories.map((cat) => (
                    <div key={cat.id} style={styles.card}>
                        <h4>{cat.name}</h4>
                        <p>Budgeted: ${cat.budget.toFixed(2)}</p>
                        <p>Spent: ${cat.spent.toFixed(2)}</p>
                        <button onClick={() => handleDelete(cat.id)} style={styles.deleteBtn}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            <div style={styles.form}>
                <h3>Add New Category</h3>
                <input
                    type="text"
                    placeholder="Category Name"
                    value={newCategory.name}
                    onChange={(e) =>
                        setNewCategory({ ...newCategory, name: e.target.value })
                    }
                />
                <input
                    type="number"
                    placeholder="Budget Amount"
                    value={newCategory.budget}
                    onChange={(e) =>
                        setNewCategory({ ...newCategory, budget: e.target.value })
                    }
                />
                <button onClick={handleAddCategory}>Add Category</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
        fontFamily: 'sans-serif'
    },
    list: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '2rem'
    },
    card: {
        border: '1px solid #ddd',
        padding: '1rem',
        borderRadius: '8px',
        width: '200px',
        backgroundColor: '#f5f5f5'
    },
    deleteBtn: {
        backgroundColor: '#e74c3c',
        color: 'white',
        border: 'none',
        padding: '0.5rem',
        marginTop: '0.5rem',
        cursor: 'pointer'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        maxWidth: '300px'
    }
};

export default BudgetCategoryManager;