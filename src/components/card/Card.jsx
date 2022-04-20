import React from "react";
import s from "./Card.module.scss"
import nikeBlazer from "../../images/jpg/nike-blazer-mid-suede.jpg";
import heart from '../../images/svg/heart.svg';
import plus from '../../images/svg/plus.svg';

export const Card = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.heartWrapper}>
        <img src={heart} alt="heart" />
      </div>
      <div className={s.plusWrapper}>
        <img src={plus} alt="plus" />
      </div>
      <img className={s.shoeImg} src={nikeBlazer} />
      <p className={s.textName}>Men's shoes</p>
      <p className={s.textName}>Nike Blazer Mid Suede</p>
      <p className={s.textPrice}>Price:</p>
      <p className={s.price}>5000 grn</p>
    </div>
  )
}