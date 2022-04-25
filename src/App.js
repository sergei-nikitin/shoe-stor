import { React } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
// import { Loyaut } from "./components/Loyaut";
import axios from "axios";
// import { Home } from "./pages/Home";
// import { Favorite } from "./pages/Favorite";
// import { NotFound } from "./pages/NotFound";
// import { Header } from "./components/header/Header";
// import { Content } from "./components/content/Content";
// import { Draver } from "./components/draver/Draver";

function App() {
  // useEffect(() => {
  //   axios
  //     .get("https://6264756ca55d5055be48bdf2.mockapi.io/cart")
  //     .then((res) => setCartItems(res.data));
  // }, [setCartItems]);

  // const addToCart = (obj) => {
  //   axios.post("https://6264756ca55d5055be48bdf2.mockapi.io/cart", obj);
  //   setCartItems((prev) => [...prev, obj]);
  // };

  // const addOnFavorites = (obj) => {
  //   axios.post("https://6264756ca55d5055be48bdf2.mockapi.io/favorites", obj);
  //   setFavorites(...favorites, obj);
  // };

  // const onRemoveItem = (id) => {
  //   axios.delete(`https://6264756ca55d5055be48bdf2.mockapi.io/cart/${id}`);
  //   setCartItems((prev) => prev.filter((i) => i.id !== id));
  // };

  // const onOpenkBasket = () => {
  //   setDraver(true);
  // };
  // const onCloseBasket = () => {
  //   setDraver(false);
  // };
  return (
    <BrowserRouter>
      <AppRouter />
      {/* <div className="wrapper"> */}
      {/* {draver && (
        <Draver
          onRemove={onRemoveItem}
          items={cartItems}
          onClose={onCloseBasket}
        />
      )}

      <Header onOpenkBasket={onOpenkBasket} />
      <Content addToCart={addToCart} addOnFavorites={addOnFavorites} /> */}
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
