import React from 'react';


function CartItem(props) {
  const { item } = props;
  return (
    <div className="cart-item">
      <img src={item.mainImage} alt={item.title} />
      <div className="item-details">
        <h3 className="item-name">{item.title}</h3>
        <span className="item-price">{item.price}</span>
        <div className="quantity-controls">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
