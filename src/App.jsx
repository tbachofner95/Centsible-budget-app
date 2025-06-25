import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BudgetCategoryManager from './components/BudgetCategoryManager';
import RecurringTransactionsManager from './components/RecurringTransactionsManager';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BudgetPage from './pages/BudgetPage';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import SettingsPage from './pages/SettingsPage';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        //dispatch();
        //dispatch();
    }, [dispatch]);

    return (
       
        <div className="App">
            <Header />
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/categories' element={<BudgetCategoryManager />} />
                <Route path='/recurring' element={<RecurringTransactionsManager />} />
                <Route path="/budgets" element={<ProtectedRoute><BudgetPage /></ProtectedRoute>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
           </Routes>
            <Footer />
        </div>
        
    );
}

export default App;