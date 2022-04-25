import {React, useState} from "react";
import s from "./Card.module.scss"
import notAdded from '../../images/svg/notAdded.svg';
import added from '../../images/svg/added.svg';
import unliked from '../../images/svg/unliked.svg';
import liked from '../../images/svg/liked.svg';
import defFoto from "../../images/jpg/def.jpg";

export const Card = ({id, img, name, price, onFavorite, onAdd, favorited=false }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(favorited);

  const handleAddClick = (img, name, price) => {
    onAdd( {img, name, price});
    setIsAdded(!isAdded);
}
  const handleLikedClick = () => {
    setIsLiked(!isLiked)
    onFavorite({id, img, name, price})
}

  
  return (
    <div className={s.wrapper}>
      <button onClick={handleLikedClick} className={s.heartWrapper}>
        <img src={ isLiked ? liked : unliked } alt="heart" />
      </button>
      <button onClick={() => handleAddClick(img, name, price)} className={s.plusWrapper}>
      {/* <button onClick={handleAddClick} className={s.plusWrapper}> */}
        <img src={ isAdded ? added : notAdded } alt="plus" />
      </button>
      <div className={s.imgWrapper}>
      {img
        ?
        <img className={s.shoeImg} src={img} alt="foto" />
        :
        <img className={s.shoeDefImg} src={defFoto} alt="foto"
        />}
      </div>
      
      <p className={s.textName}>{ name }</p>
      <p className={s.textPrice}>Price:</p>
      <p className={s.price}>{price} ₴</p>
    </div>
  )
}