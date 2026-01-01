const Foods = [
  { id: 1, name: "Pancakes", category: "Breakfast", type: "🟢veg", price: 120, image: "/images/Foods/Food1.jpg.png" },
  { id: 2, name: "Omelette", category: "Breakfast", type: "🔴non-veg", price: 100, image: "/images/Foods/Food2.jpg.png" },
  { id: 3, name: "French Toast", category: "Breakfast", type: "🟢veg", price: 130, image: "/images/Foods/Food3.jpg.png" },
  { id: 4, name: "Cereal Bowl", category: "Breakfast", type: "🟢veg", price: 90, image: "/images/Foods/Food4.jpg.png" },
  { id: 5, name: "Smoothie", category: "Drinks", type: "🟢veg", price: 150, image: "/images/Foods/Food5.jpg.png" },
  { id: 6, name: "Bagel Sandwich", category: "Breakfast", type: "🟢veg", price: 110, image: "/images/Foods/Food6.jpg.png" },

  { id: 7, name: "veg Burger", category: "Main", type: "🟢veg", price: 180, image: "/images/Foods/Food7.jpg.png" },
  { id: 8, name: "Chicken Burger", category: "Main", type: "🔴non-veg", price: 200, image: "/images/Foods/Food8.jpg.png" },
  { id: 9, name: "Pizza Margherita", category: "Main", type: "🟢veg", price: 250, image: "/images/Foods/Food9.jpg.png" },
  { id: 10, name: "Pasta Alfredo", category: "Main", type: "🟢veg", price: 220, image: "/images/Foods/Food10.jpg.png" },
  { id: 11, name: "Grilled Sandwich", category: "Main", type: "🟢veg", price: 170, image: "/images/Foods/Food11.jpg.png" },
  { id: 12, name: "Fried Rice", category: "Main", type: "🟢veg", price: 200, image: "/images/Foods/Food12.jpg.png" },
  { id: 13, name: "veg Curry", category: "Main", type: "🟢veg", price: 190, image: "/images/Foods/Food13.jpg.png" },
  { id: 14, name: "Chicken Curry", category: "Main", type: "🔴non-veg", price: 220, image: "/images/Foods/Food14.jpg.png" },

  { id: 15, name: "Chocolate Cake", category: "Dessert", type: "🟢veg", price: 180, image: "/images/Foods/Food15.jpg.png" },
  { id: 16, name: "Brownie", category: "Dessert", type: "🟢veg", price: 150, image: "/images/Foods/Food16.jpg.png" },
  { id: 17, name: "Ice Cream", category: "Dessert", type: "🟢veg", price: 120, image: "/images/Foods/Food17.jpg.png" },
  { id: 18, name: "Fruit Tart", category: "Dessert", type: "🟢veg", price: 160, image: "/images/Foods/Food18.jpg.png" },
  { id: 19, name: "Cupcake", category: "Dessert", type: "🟢veg", price: 100, image: "/images/Foods/Food19.jpg.png" },
  { id: 20, name: "Chocolate Pudding", category: "Dessert", type: "🟢veg", price: 140, image: "/images/Foods/Food20.jpg.png" },

  { id: 21, name: "Tomato Soup", category: "Soup", type: "🟢veg", price: 120, image: "/images/Foods/Food21.jpg.png" },
  { id: 22, name: "Chicken Soup", category: "Soup", type: "🔴non-veg", price: 140, image: "/images/Foods/Food22.jpg.png" },
  { id: 23, name: "veg Minestrone", category: "Soup", type: "🟢veg", price: 130, image: "/images/Foods/Food23.jpg.png" },
  { id: 24, name: "Cream of Mushroom", category: "Soup", type: "🟢veg", price: 150, image: "/images/Foods/Food24.jpg.png" },
  { id: 25, name: "Carrot Soup", category: "Soup", type: "🟢veg", price: 130, image: "/images/Foods/Food25.jpg.png" },

  { id: 26, name: "Lemonade", category: "Drinks", type: "🟢veg", price: 80, image: "/images/Foods/Food26.jpg.png" },
  { id: 27, name: "Cold Coffee", category: "Drinks", type: "🟢veg", price: 120, image: "/images/Foods/Food27.jpg.png" },
  { id: 28, name: "Orange Juice", category: "Drinks", type: "🟢veg", price: 90, image: "/images/Foods/Food28.jpg.png" },
  { id: 29, name: "Milkshake", category: "Drinks", type: "🟢veg", price: 130, image: "/images/Foods/Food29.jpg.png" },
  { id: 30, name: "Iced Tea", category: "Drinks", type: "🟢veg", price: 100, image: "/images/Foods/Food30.jpg.png" },
  { id: 31, name: "Strawberry Shake", category: "Drinks", type: "🟢veg", price: 120, image: "/images/Foods/Food31.jpg.png" },

  { id: 32, name: "Caesar Salad", category: "Salads", type: "🔴non-veg", price: 140, image: "/images/Foods/Food32.jpg.png" },
  { id: 33, name: "Greek Salad", category: "Salads", type: "🟢veg", price: 150, image: "/images/Foods/Food33.jpg.png" },
  { id: 34, name: "Fruit Salad", category: "Salads", type: "🟢veg", price: 120, image: "/images/Foods/Food34.jpg.png" },
  { id: 35, name: "Garden Salad", category: "Salads", type: "🟢veg", price: 130, image: "/images/Foods/Food35.jpg.png" },
  { id: 36, name: "Quinoa Salad", category: "Salads", type: "🟢veg", price: 160, image: "/images/Foods/Food36.jpg.png" },
  { id: 37, name: "Cobb Salad", category: "Salads", type: "🔴non-veg", price: 150, image: "/images/Foods/Food37.jpg.png" },

  { id: 38, name: "veg Sandwich", category: "Main", type: "🟢veg", price: 180, image: "/images/Foods/Food38.jpg.png" },
  { id: 39, name: "Chicken Nuggets", category: "Main", type: "🔴non-veg", price: 200, image: "/images/Foods/Food39.jpg.png" },
  { id: 40, name: "Pasta Bolognese", category: "Main", type: "🔴non-veg", price: 230, image: "/images/Foods/Food40.jpg.png" },
];

export default Foods;
