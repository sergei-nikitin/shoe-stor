import {React, useState} from "react";
import s from "./Card.module.scss"
import notAdded from '../../images/svg/notAdded.svg';
import added from '../../images/svg/added.svg';
import unliked from '../../images/svg/unliked.svg';
import liked from '../../images/svg/liked.svg';
import defFoto from "../../images/jpg/def.jpg";

export const Card = ({ img, name, price, onFavorit, onAdd }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

 

  const handleAddClick = () => {
    
    setIsAdded(!isAdded)
    onAdd({img, name, price})
}
  const handleLikedClick = () => {
  setIsLiked(!isLiked)
}

  
  return (
    <div className={s.wrapper}>
      <button onClick={handleLikedClick} className={s.heartWrapper}>
        <img src={ isLiked ? liked : unliked} alt="heart" />
      </button>
      <button onClick={handleAddClick} className={s.plusWrapper}>
        <img src={isAdded ? added : notAdded} alt="plus" />
      </button>
      
      {img
        ?
        <img className={s.shoeImg} src={img} alt="foto" />
        :
        <img className={s.shoeDefImg} src={defFoto} alt="foto"
        />}
      
      <p className={s.textName}>{ name }</p>
      <p className={s.textPrice}>Price:</p>
      <p className={s.price}>{price} ₴</p>
    </div>
  )
}