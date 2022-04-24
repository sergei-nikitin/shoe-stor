import { React, useState } from "react";
import { Header } from "./components/header";
import { Content } from "./components/content";
import { Draver } from "./components/draver";

function App() {
  const [draver, setDraver] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  const onOpenkBasket = () => {
    setDraver(true);
  };
  const onCloseBasket = () => {
    setDraver(false);
  };
  return (
    <div className="wrapper">
      {draver && <Draver items={cartItems} onClose={onCloseBasket} />}

      <Header onOpenkBasket={onOpenkBasket} />
      <Content addToCart={addToCart} />
    </div>
  );
}

export default App;
