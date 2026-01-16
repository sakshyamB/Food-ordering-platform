import React, { useState } from "react";
import Nav from "../Componets/Nav";
import Categories from "../Category";
import Foods from "../Food";
import Cart from "../Componets/Cart";

const Home = () => {
  const [filteredFood, setFilteredFood] = useState(Foods);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const filter = (categoryName) => {
    setSearch("");
    setSelected(categoryName);

    if (categoryName === "All") {
      setFilteredFood(Foods);
    } else {
      setFilteredFood(
        Foods.filter((item) => item.category === categoryName)
      );
    }
  };

  const searchedFood = filteredFood.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const addToCart = (food) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === food.id);
      if (existing) {
        return prev.map((item) =>
          item.id === food.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prev,
        { id: food.id, name: food.name, price: food.price, image: food.image, qty: 1 },
      ];
    });
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const deliveryFee = cartItems.length > 0 ? 50 : 0;
  const grandTotal = subtotal + deliveryFee;

  return (
    <div className="w-full min-h-screen bg-slate-200">

      <Nav Search={search} setSearch={setSearch} setcart={setShowCart} />
      <div className="flex justify-around gap-4 flex-wrap p-2 md:p-4">
        {Categories.map((item) => (
          <div
            key={item.id}
            onClick={() => filter(item.name)}
            className={`h-20 md:h-40 md:w-40 w-20 cursor-pointer flex flex-col items-center justify-center gap-3 rounded-lg shadow-xl transition ${
              selected === item.name
                ? "bg-green-300"
                : "bg-white hover:bg-green-100"
            }`}
          >
            <span>{item.icon}</span>
            <span className="font-bold text-sm md:text-xl">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-evenly gap-4 flex-wrap p-2 md:p-6">
        {searchedFood.length === 0 ? (
          <div className="w-full text-center py-20 text-gray-500">
            <span className="text-5xl">😔</span>
            <h2 className="text-xl font-semibold mt-4">
              Item not available
            </h2>
          </div>
        ) : (
          searchedFood.map((item) => (
            <div
              key={item.id}
              className="border-2 hover:border-green-400 h-60 md:h-80 w-40 md:w-60 shadow-xl bg-white"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-32 md:h-44 w-full object-cover"
              />
              <div className="p-2 text-center">
                <h3 className="font-bold md:text-xl">{item.name}</h3>
                <p className="font-bold">NPR {item.price}/-</p>
                <p
                  className={`font-bold ${
                    item.type === "🟢veg" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {item.type}
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-2 bg-green-400 px-3 py-1 rounded hover:bg-green-500"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {showCart && (
        <div className="fixed top-0 right-0 h-full w-[85%] sm:w-[60%] md:w-[45%] lg:w-[35%] bg-white shadow-xl z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 bg-green-200">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button onClick={() => setShowCart(false)}>❌</button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 mt-10">
                Your cart is empty 😔
              </p>
            ) : (
              <Cart
                cart={cartItems}
                increase={increaseQty}
                decrease={decreaseQty}
                remove={removeItem}
              />
            )}
          </div>

          <div className="p-4 border-t">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>Rs. {subtotal}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Delivery Fee</span>
              <span>Rs. {deliveryFee}</span>
            </div>

            <div className="flex justify-between font-bold text-lg">
              <span>Grand Total</span>
              <span>Rs. {grandTotal}</span>
            </div>

            <button
              disabled={cartItems.length === 0}
              onClick={() => {
                alert("Order placed successfully 🎉");
                setCartItems([]);
                setShowCart(false);
              }}
              className={`w-full mt-4 py-3 rounded-lg text-white font-bold ${
                cartItems.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
