import React from "react";
import s from "./Card.module.scss"
import nikeBlazer from "../../images/jpg/nike-blazer-mid-suede.jpg";
import notAdded from '../../images/svg/notAdded.svg';
import added from '../../images/svg/added.svg';
import unliked from '../../images/svg/unliked.svg';
import liked from '../../images/svg/liked.svg';

export const Card = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.heartWrapper}>
        <img src={unliked} alt="heart" />
      </div>
      <div className={s.plusWrapper}>
        <img src={notAdded} alt="plus" />
      </div>
      <img className={s.shoeImg} src={nikeBlazer} />
      <p className={s.textName}>Men's shoes</p>
      <p className={s.textName}>Nike Blazer Mid Suede</p>
      <p className={s.textPrice}>Price:</p>
      <p className={s.price}>5000 grn</p>
    </div>
  )
}