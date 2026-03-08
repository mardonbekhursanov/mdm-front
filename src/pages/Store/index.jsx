import React from 'react';
import './Store.css';

const Store = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x200/f3f4f6/6b7280?text=ELD+Device+%26+Cable",
      title: "PE11 ELD Device & Cable (Not compatible with PickUp Trucks and Box Trucks)",
      price: "$85.00"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200/f3f4f6/6b7280?text=PT30+ELD+Device",
      title: "PT30 ELD Device",
      price: "$100.00"
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200/f3f4f6/6b7280?text=PT30+OBD+II+16+Pin+cable",
      title: "PT30 - OBD II 16 Pin cable",
      price: "$29.99"
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x200/f3f4f6/6b7280?text=PT30+9-Pin+cable",
      title: "PT30 9-Pin cable",
      price: "$29.99"
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300x200/f3f4f6/6b7280?text=J1939+Y-Splitter+Cable",
      title: "J1939 Y-Splitter Cable (Green 9-Pin)",
      price: "$35.00"
    },
    {
      id: 6,
      image: "https://via.placeholder.com/300x200/f3f4f6/6b7280?text=ELD+On+Board+Sticker",
      title: "ELD ON BOARD Sticker",
      price: "$5.00"
    }
  ];

  return (
    <main className="store-page">
      <div className="store-container">
        <h1 className="store-title">Hardware Store</h1>
        
        <div className="products-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-image" />
              </div>
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Store;
