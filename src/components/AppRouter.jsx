import { React, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { Loyaut } from "./Loyaut";
import { Header } from "./header/Header"
import { Draver } from "./draver/Draver";
import { Home } from "../pages/Home";
import { Favorite } from "../pages/Favorite";
import { NotFound } from "../pages/NotFound";

export const AppRouter = () => { 
    const [favorites, setFavorites] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [draver, setDraver] = useState(false);
 
   const onOpenkBasket = () => {
     console.log('hi')
    setDraver(true);
   };
   const onCloseBasket = () => {
    setDraver(false);
  };

    useEffect(() => {
    axios
      .get("https://6264756ca55d5055be48bdf2.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
     console.log(cartItems)
    axios
      .get("https://6264756ca55d5055be48bdf2.mockapi.io/favorites")
      .then((res) => setFavorites(res.data));
     console.log(setFavorites)
    }, []);
  
    const onRemoveItem = (id) => {
    axios.delete(`https://6264756ca55d5055be48bdf2.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };
 

  const addToCart = (obj) => {
    axios.post("https://6264756ca55d5055be48bdf2.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const addOnFavorites = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://6264756ca55d5055be48bdf2.mockapi.io/favorites/${obj.id}`)
      } else {
        const { data } = await axios.post("https://6264756ca55d5055be48bdf2.mockapi.io/favorites", obj);
        setFavorites(...favorites, data);
      }
    } catch (error) {
      alert("Failed to add to favorite")
    }
  }

  return (
    <>

      <Header onOpenDraver={onOpenkBasket} />
       {draver && <Draver items={cartItems} onClose={onCloseBasket} onRemove={onRemoveItem} />}
     <Routes>
            <Route path="/" element={<Loyaut />}>
              <Route index element={<Home addToCart={addToCart} addOnFavorites={addOnFavorites} />} />
              <Route path="favorite" element={<Favorite favorites={favorites} addOnFavorites={addOnFavorites} />} />
              <Route path="*" element={<NotFound />} />
            </Route>
      </Routes> 
      </>
)

}