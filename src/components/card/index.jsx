import React from "react";
import s from "./Card.module.scss"
import nikeBlazer from "../../images/jpg/nike-blazer.jpg";
import notAdded from '../../images/svg/notAdded.svg';
import added from '../../images/svg/added.svg';
import unliked from '../../images/svg/unliked.svg';
import liked from '../../images/svg/liked.svg';
import defFoto from "../../images/jpg/def.jpg";

export const Card = ({ img, name, price }) => {
  //  const baseUrl = "../../images/jpg/"
  return (
    <div className={s.wrapper}>
      <button className={s.heartWrapper}>
        <img src={unliked} alt="heart" />
      </button>
      <button className={s.plusWrapper}>
        <img src={notAdded} alt="plus" />
      </button>
      {img
        ?
        // <img className={s.shoeImg} src={nikeBlazer} alt="foto" />
        <img className={s.shoeImg} src={img} alt="foto" />
        // <img className={s.shoeImg} src={require(`${img}`)} alt="foto" />
        :
        <img className={s.shoeDefImg} src={defFoto} alt="foto"
        />}
      
      <p className={s.textName}>{ name }</p>
      <p className={s.textPrice}>Price:</p>
      <p className={s.price}>{price} ₴</p>
    </div>
  )
}