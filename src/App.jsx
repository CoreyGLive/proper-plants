import { useState } from "react";
import PLANTS from "./data";
import PlantList from "./components/plantlist";
import Cart from "./components/cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    setCart((prevCart) => {
      const found = prevCart.find((item) => item.id === plant.id);
      if (found) {
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...plant, quantity: 1 }];
    });
  }

  function updateQuantity(id, delta) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <div className="App">
      <h1>🌱 Proper Plants</h1>
      <PlantList plants={PLANTS} onAdd={addToCart} />
      <Cart cartItems={cart} onUpdate={updateQuantity} />
    </div>
  );
}

