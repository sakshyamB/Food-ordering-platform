import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, increase, decrease, remove }) => {
  return (
    <div className="fixed top-0 right-0 w-96 h-screen bg-white shadow-xl">
      <h2 className="text-xl font-bold p-4">Your Cart</h2>
      <div className="overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">Your cart is empty 😔</p>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increase={increase}
              decrease={decrease}
              remove={remove}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
