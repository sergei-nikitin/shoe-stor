import React from "react";
import s from "./CartItem.module.scss";
import deleteIcon from "../../images/svg/deleteIcon.svg";

export const CartItem = ({id, onRemove, name, price, imgUrl}) => {
  return (
    <div className={s.wrappeer}>
      <img src={imgUrl} alt="shoe" />
      <div className={s.descr}>
        <p className={s.name}>{ name }</p>
        <p className={s.price}>{price} ₴</p>
      </div>
      <button onClick={() => onRemove(id)}  type="button"><img src={deleteIcon} alt="deleteIcon" /></button>
    </div>
  )
}