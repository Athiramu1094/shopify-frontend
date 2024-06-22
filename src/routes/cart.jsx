import React from 'react'
import CartItem from '../components/cartItem'
import { useSelector } from 'react-redux'

function Cart(){

    const items = useSelector(state=> state.cart.items)

    return (
        <div className="main-container">
          <div className="cart-items">
            <section className="cart-items-section">
              <h2>My Cart</h2>
              {items.map(item => (
                <CartItem key={item._id} item={item} />
              ))}
            </section>
          </div>
          <div className="price-details">
            <section className="price-section">
              <h2>Price Details</h2>
              <div>
                <h3>Price Details</h3>
                <span>Total Price: 1490</span>
              </div>
              <div>
                <h2>Price incl. tax</h2>
                <h3>Total Price: 1600</h3>   
              </div>
              <button>Checkout (1600)</button>
            </section>
          </div>
        </div>
      );
    }
    
    export default Cart;