import React from "react";
import s from "./CartItem.module.scss";
import nikeBlazer from "../../images/jpg/nike-blazer-mid-suede.jpg";
import deleteIcon from "../../images/svg/deleteIcon.svg";

export const CartItem = () => {
  return (
    <div className={s.wrappeer}>
      <img src={nikeBlazer} alt="shoe" />
      <div className={s.descr}>
        <p className={s.name}>Men's sgoes</p>
        <p className={s.name}>Nike Blazer Mid Suede</p>
        <p className={s.price}>5000 grn</p>
      </div>
      <button  type="button"><img src={deleteIcon} alt="deleteIcon" /></button>
    </div>
  )
}