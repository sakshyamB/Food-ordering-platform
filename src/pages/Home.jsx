import React, { useState } from "react";
import Nav from "../Componets/Nav";
import Categories from "../Category";
import Foods from "../Food";
import Cart from "../Componets/Cart";

const Home = () => {
  const [FilteredFood, setFilteredFood] = useState(Foods);
  const [search, setsearch] = useState("");
  const [Selected, setSelected] = useState("All");
  const [ShowCart, setShowCart] = useState(false);
  const [CartItems, setCartItems] = useState([]);

  const filter = (categoryName) => {
    setsearch("");
    setSelected(categoryName);
    if (categoryName === "All") {
      setFilteredFood(Foods);
    } else {
      setFilteredFood(Foods.filter((item) => item.category === categoryName));
    }
  };

  const SearchedFood = FilteredFood.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const Addtocart = (food) => {
    setCartItems((prev) => [
      ...prev,
      {
        id: food.id,
        name: food.name,
        price: food.price,
        image: food.image,
        qty: 1,
      },
    ]);
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
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

  return (
    <div className="w-full min-h-screen bg-slate-200">
      <Nav Search={search} setSearch={setsearch} setcart={setShowCart} />

      <div className="flex justify-around gap-4 flex-wrap p-2 md:p-4">
        {Categories.map((item) => (
          <div
            className={`h-20 md:h-40 md:w-40 w-20 transition-transform duration-300 ${
              Selected === item.name
                ? "bg-green-300"
                : "bg-white hover:bg-green-100"
            } cursor-pointer flex rounded-lg shadow-xl items-center flex-col gap-3 justify-center`}
            key={item.id}
            onClick={() => filter(item.name)}
          >
            <span>{item.icon}</span>
            <span className="font-bold text-sm md:text-xl">{item.name}</span>
          </div>
        ))}

        <div className="flex justify-evenly gap-4 flex-wrap p-2 md:p-6 w-full">
          {SearchedFood.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center py-20 text-gray-500">
              <span className="text-5xl mb-4">😔</span>
              <h2 className="text-xl md:text-2xl font-semibold">
                Unfortunately, this item is not available
              </h2>
              <p className="mt-2 text-sm md:text-base">
                Try another category or search something else.
              </p>
            </div>
          ) : (
            SearchedFood.map((item) => (
              <div
                key={item.id}
                className="border-2 hover:border-green-400 group h-60 md:h-80 w-40 md:w-60 shadow-3xl"
              >
                <div className="overflow-hidden">
                  <img
                    className="transition-transform duration-300 group-hover:scale-105 h-30 md:h-45 w-40 md:w-60 object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="text-center font-bold md:text-2xl">{item.name}</div>
                <div className="font-bold text-sm md:text-lg">NPR. {item.price}/-</div>
                <div
                  className={`font-bold ${
                    item.type === "🟢veg" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {item.type}
                </div>
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => Addtocart(item)}
                    className="hover:text-black hover:cursor-pointer p-1 bg-green-300 md:m-4 m-2 rounded-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {ShowCart && (
        <div className="h-full w-[80%] shadow-xl md:w-[55%] lg:w-[40%] xl:w-[30%] bg-white top-0 right-0 fixed">
          <header className="pt-[10%] bg-red-200 text-xl md:text-2xl pl-[5%] flex justify-around">
            <span>Your Items</span>
            <span onClick={() => setShowCart(false)}>❌</span>
          </header>

          <Cart
            cart={CartItems}
            increase={increaseQty}
            decrease={decreaseQty}
            remove={removeItem}
          />

          <div className="p-4 border-t">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>
                Rs.{" "}
                {CartItems.reduce((acc, item) => acc + item.price * item.qty, 0)}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery Fee</span>
              <span>Rs. 50</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Grand Total</span>
              <span>
                Rs.{" "}
                {CartItems.reduce((acc, item) => acc + item.price * item.qty, 0) + 50}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
