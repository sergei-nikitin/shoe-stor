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

// ({ imgUrl, name, price, id }) => (
//   <li key={shortId.generate()}>
//     <Card
//       loading={isLoading}
//       cartItems={cartItems}
//       name={name}
//       price={price}
//       img={imgUrl}
//       id={id}
//       onAdd={(obj) => addToCart(obj)}
//       onFavorite={(obj) => addOnFavorites(obj)}
//       add={cartItems.some((obj) => Number(obj.id) === Number(id))}
//     />
