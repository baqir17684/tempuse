import React from 'react';
import './App.css';

const products = [
  {
    id: 1,
    title: '柒喵狗狗玩具耐咬磨牙中大型犬发声狗...',
    price: 123.02,
    label: '狗狗最爱',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: '美人喵宠物零食冻干无拼桶',
    price: 213.99,
    label: '喵星人最爱',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: '柒喵狗狗玩具耐咬磨牙中大型犬发声狗...',
    price: 123.02,
    label: '双十一低价',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: '美人喵宠物零食冻干无拼桶',
    price: 213.99,
    label: '最近7天最低价',
    image: 'https://via.placeholder.com/150',
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <p className="product-title">{product.title}</p>
        <p className="product-price">&yen; {product.price.toFixed(2)}</p>
        <span className="product-label">{product.label}</span>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <h1 className="title">宠物礼品派对</h1>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;

/* CSS (App.css) */
.app {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #fff8e5;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.product-card {
  width: 200px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 16px;
  text-align: center;
}

.product-image {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 12px;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-title {
  font-size: 16px;
  color: #555;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.product-price {
  font-size: 20px;
  font-weight: bold;
  color: #e60023;
}

.product-label {
  font-size: 14px;
  color: #e69822;
  background: #fff3e5;
  padding: 4px 8px;
  border-radius: 8px;
}
