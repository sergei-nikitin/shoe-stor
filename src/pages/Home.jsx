import { React } from "react";
import { Content } from "../components/content/Content";

export const Home = ({
  isLoading,
  items,
  addToCart,
  addOnFavorites,
  cartItems,
}) => {
  return (
    <div>
      <Content
        items={items}
        cartItems={cartItems}
        addToCart={addToCart}
        addOnFavorites={addOnFavorites}
        isLoading={isLoading}
      />
    </div>
  );
};
