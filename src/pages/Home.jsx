import { React } from "react";
import { Content } from "../components/content/Content";

export const Home = ({addToCart, addOnFavorites}) => {  
  return (
    <div>
   <Content addToCart={addToCart} addOnFavorites={addOnFavorites} />
    </div>
  )
}