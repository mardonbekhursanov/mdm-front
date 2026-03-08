import React from 'react';
import ProductHero from './ProductHero/ProductHero';
import ProductBreakdown from './ProductBreakdown/ProductBreakdown';
import OperationsUI from './OperationsUI/OperationsUI';
import HowItWorks from './HowItWorks/HowItWorks';
import ProductCTA from './ProductCTA/ProductCTA';

const Product = () => {
  return (
    <main>
      <ProductHero />
      <ProductBreakdown />
      <OperationsUI />
      <HowItWorks />
      <ProductCTA />
    </main>
  );
};

export default Product;
