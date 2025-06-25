// src/utils/formatCurrency.js

const formatCurrency = (amount, locale = 'en-US', currency = 'USD') => {
  if (isNaN(amount)) return '$0.00';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export default formatCurrency;
