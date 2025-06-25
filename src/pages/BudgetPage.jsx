import React, { useState } from 'react';
import BudgetItemForm from '../components/BudgetItemForm';
import BudgetSummary from '../components/BudgetSummary';
import BudgetCategoryList from '../components/BudgetCategoryList';
import RecurringBudgetItems from '../components/RecurringBudgetItems';

const BudgetPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [budgetItems, setBudgetItems] = useState([]);
  const [recurringItems, setRecurringItems] = useState([]);
  const [editingRecurringItem, setEditingRecurringItem] = useState(null);
// add new state
const [showRecurringForm, setShowRecurringForm] = useState(false);
  
  
// Handlers for recurring items
  const handleAddRecurring = (item) => {
  setRecurringItems(prev => [...prev, { id: Date.now(), ...item }]);
};

const handleEditRecurring = (updatedItem) => {
  setRecurringItems(prev =>
    prev.map(item => (item.id === updatedItem.id ? updatedItem : item))
  );
};

const handleDeleteRecurring = (id) => {
  setRecurringItems(prev => prev.filter(item => item.id !== id));
};
// open/close form handlers
const openRecurringForm = (item = null) => {
  setEditingRecurringItem(item);
  setShowRecurringForm(true);
};

const closeRecurringForm = () => {
  setEditingRecurringItem(null);
  setShowRecurringForm(false);
};
// other handlers (existing)
   const handleAddItem = (itemData) => {
    // Ideally, you'd POST this to your backend or update global state
    setBudgetItems(prev => [...prev, { id: Date.now(), ...itemData }]);
    setShowForm(false);
  };

  return (

    <main style={{ maxWidth: '700px', margin: '0 auto', padding: '1rem'}}>
      <h1>My Budget</h1>

      <BudgetSummary items={[...budgetItems, ...recurringItems]} />

      <BudgetCategoryList items={budgetItems} />

      <RecurringBudgetItems items={recurringItems} onAdd={() => openRecurringForm()} onEdit={(item) => openRecurringForm(item)} onDelete={handleDeleteRecurring} />

      <button onClick={() => setShowForm(true)} style={{ marginTop: '1rem' }}>+ Add Budget Item</button>

      {showForm && (
        <BudgetItemForm
          mode="add"
          existingItem={editingRecurringItem}
          onSubmit={(updatedItem) => {
            handleEditRecurring(updatedItem);
          closeRecurringForm();
          }}
          onCancel={closeRecurringForm}
        />
        )}

        {showRecurringForm && (
  <BudgetItemForm
    mode={editingRecurringItem ? 'edit' : 'add'}
    existingItem={editingRecurringItem}
    onSubmit={(itemData) => {
      if (editingRecurringItem) {
        handleEditRecurring({ id: editingRecurringItem.id, ...itemData});
      } else {
        handleAddRecurring(itemData);
      }
      closeRecurringForm();
    }}
    onCancel={closeRecurringForm}
  />
)}

      <section style={{ marginTop: '2rem' }}>
        <h2>Budget Items</h2>
      <ul>
        {budgetItems.map((item) => (
          <li key={item.id}>
            [{item.type}] {item.category}: ${item.amount} on {item.date}
          </li>
        ))}
      </ul>
    </section>
    </main>
  );
};

export default BudgetPage;
