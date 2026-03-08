import React from 'react';
import SalesHero from './SalesHero/SalesHero';
import SalesForm from './SalesForm/SalesForm';

const Sales = () => {
  return (
    <main className="sales-page">
      <SalesHero />
      <SalesForm />
    </main>
  );
};

export default Sales;
