import React from "react";

const CartItem = ({ item, increase, decrease, remove }) => {
  return (
    <div className="flex items-center gap-4 p-3 border-b">
      <img
        src={item.image}
        alt={item.name}
        className="h-20 w-20 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600">
          Rs. {item.price} × {item.qty} ={" "}
          <span className="font-bold">
            Rs. {item.price * item.qty}
          </span>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => decrease(item.id)}
          disabled={item.qty === 1}
          className={`px-2 border rounded ${
            item.qty === 1 ? "opacity-40 cursor-not-allowed" : ""
          }`}
        >
          −
        </button>

        <span className="px-2">{item.qty}</span>

        <button
          onClick={() => increase(item.id)}
          className="px-2 border rounded"
        >
          +
        </button>
      </div>
      <button
        onClick={() => remove(item.id)}
        className="text-red-500 text-lg"
      >
        ❌
      </button>
    </div>
  );
};

export default CartItem;
