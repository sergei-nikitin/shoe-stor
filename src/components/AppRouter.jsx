import { React, useState, useEffect } from "react";
import { AppContext } from "../context";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import { Loyaut } from "./Loyaut";
import { Header } from "./header/Header";
import { Home } from "../pages/Home";
import { Favorite } from "../pages/Favorite";
import { Orders } from "../pages/Orders";
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
      try {
        const baseUrl = "https://6264756ca55d5055be48bdf2.mockapi.io";
        // Promis.all
        // const [resCartItams, resFavorites, resItams] = await Promise.all([
        //   axios.get(`${baseUrl}/cart`),
        //   axios.get(`${baseUrl}/favorites`),
        //   axios.get(`${baseUrl}/items`),
        // ]);
        const resCartItams = await axios.get(`${baseUrl}/cart`);
        const resFavorites = await axios.get(`${baseUrl}/favorites`);
        const resItams = await axios.get(`${baseUrl}/items`);

        setIsLoading(false);
        setCartItems(resCartItams.data);
        setFavorites(resFavorites.data);
        setItems(resItams.data);
      } catch (error) {
        alert("Something went wrong");
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const onRemoveItem = async (obj) => {
    try {
      setCartItems((prev) =>
        prev.filter((i) => Number(i.id) !== Number(obj.id))
      );
      await axios.delete(
        `https://6264756ca55d5055be48bdf2.mockapi.io/cart/${obj.id}`
      );
    } catch (error) {
      alert("Something went wrong(delete)");
      console.log(error);
    }
  };

  const addToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.parentId)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.parentId))
        );
        await axios.delete(
          `https://6264756ca55d5055be48bdf2.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://6264756ca55d5055be48bdf2.mockapi.io/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                // parentId: data.parentId,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Something went wrong(unSheck)");
      console.log(error);
    }
  };

  const addOnFavorites = async (obj) => {
    // console.log(obj);
    try {
      const findFavItem = favorites.find(
        (favObj) => Number(favObj.parentId) === Number(obj.parentId)
      );
      if (findFavItem) {
        console.log(findFavItem.id);
        console.log(findFavItem.parentId);
        setFavorites((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.parentId))
        );
        await axios.delete(
          `https://6264756ca55d5055be48bdf2.mockapi.io/favorites/${findFavItem.id}`
        );
      } else {
        setFavorites((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://6264756ca55d5055be48bdf2.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Failed to add to favorite");
      console.log(error);
    }
  };

  const isCheckeOnAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };
  const isCheckeOnFavorites = (id) => {
    return favorites.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        favorites,
        cartItems,
        setCartItems,
        isCheckeOnAdded,
        isCheckeOnFavorites,
        addOnFavorites,
        setDraver,
        draver,
        onRemoveItem,
        onCloseBasket,
        addToCart,
      }}
    >
      <Header onOpenDraver={onOpenkBasket} />

      <Routes>
        <Route path="/" element={<Loyaut />}>
          <Route
            // index
            path="/shoe-store/"
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
          <Route path="favorite" element={<Favorite />} />
          <Route path="orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
};
