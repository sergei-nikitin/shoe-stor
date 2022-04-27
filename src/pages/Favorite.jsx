import {React} from "react";
import { Card } from "../components/card/Card";
import shortId from 'shortid'
import s from '../components/content/Content.module.scss';

export const Favorite = ({ favorites = [], addOnFavorites }) => {
  // console.log("favoritees: ", favorites)

  return (
    <div className={s.fawWrapper}>
     
      {favorites.length !== 0 ?
        <>
           <h2>Favorites: </h2>
      <ul className={s.cardsList}>
        {favorites.map((i) => (
          <li key={shortId.generate()}>
            <Card
              {...i}
              favorited={true}
              onFavorite={addOnFavorites}
              // onAdd={(obj) => addToCart(obj)}
              // onFavorite={(obj) => addOnFavorites(obj)}
            />
          </li>
         
        ))}
        
          </ul>
           </>
        :
        <h2>Wishlist is empty</h2>
     }
    </div>
  )
}