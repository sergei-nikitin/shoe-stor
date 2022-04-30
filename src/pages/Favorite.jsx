import { React, useContext } from "react";
import { AppContext } from "../context";
import { Card } from "../components/card/Card";
import shortId from "shortid";
import s from "../components/content/Content.module.scss";

export const Favorite = () => {
  const { favorites, addOnFavorites, addToCart } = useContext(AppContext);
  console.log(favorites);
  return (
    <div className={s.fawWrapper}>
      {favorites.length !== 0 ? (
        <>
          <h2>Favorites: </h2>
          <ul className={s.cardsList}>
            {favorites.map((i) => (
              <li key={shortId.generate()}>
                <Card
                  {...i}
                  favorited={true}
                  // onFavorite={addOnFavorites}
                  onFavorite={(obj) => addOnFavorites(obj)}
                  onAdd={(obj) => addToCart(obj)}
                />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2>Wishlist is empty</h2>
      )}
    </div>
  );
};
