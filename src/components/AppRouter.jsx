import { React, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { Loyaut } from "./Loyaut";
import { Header } from "./header/Header";
import { Draver } from "./draver/Draver";
import { Home } from "../pages/Home";
import { Favorite } from "../pages/Favorite";
import { NotFound } from "../pages/NotFound";

export const AppRouter = () => {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [draver, setDraver] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onOpenkBasket = () => {
    setDraver(true);
  };
  const onCloseBasket = () => {
    setDraver(false);
  };

  useEffect(() => {
    async function fetchData() {
      const baseUrl = "https://6264756ca55d5055be48bdf2.mockapi.io";
      const resCartItams = await axios.get(`${baseUrl}/cart`);
      const resFavorites = await axios.get(`${baseUrl}/favorites`);
      const resItams = await axios.get(`${baseUrl}/items`);

      setIsLoading(false);
      setCartItems(resCartItams.data);
      setFavorites(resFavorites.data);
      setItems(resItams.data);
    }
    fetchData();
  }, []);

  const onRemoveItem = (id) => {
    axios.delete(`https://6264756ca55d5055be48bdf2.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const addToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://6264756ca55d5055be48bdf2.mockapi.io/cart/${obj.id}`
        );
        cartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.post("https://6264756ca55d5055be48bdf2.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addOnFavorites = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://6264756ca55d5055be48bdf2.mockapi.io/favorites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://6264756ca55d5055be48bdf2.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Failed to add to favorite");
    }
  };

  return (
    <div>
      <Header onOpenDraver={onOpenkBasket} />
      {draver && (
        <Draver
          items={cartItems}
          onClose={onCloseBasket}
          onRemove={onRemoveItem}
        />
      )}
      <Routes>
        <Route path="/" element={<Loyaut />}>
          <Route
            index
            element={
              <Home
                items={items}
                cartItems={cartItems}
                addToCart={addToCart}
                addOnFavorites={addOnFavorites}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="favorite"
            element={
              <Favorite favorites={favorites} addOnFavorites={addOnFavorites} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
