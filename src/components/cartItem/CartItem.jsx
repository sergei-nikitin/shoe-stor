import { React, useContext } from "react";

import { AppContext } from "../../context";

import s from "./CartItem.module.scss";
import deleteIcon from "../../images/svg/deleteIcon.svg";

export const CartItem = (obj) => {
  const { onRemoveItem } = useContext(AppContext);
  return (
    <div className={s.wrappeer}>
      <img src={obj.imgUrl} alt="shoe" />
      <div className={s.descr}>
        <p className={s.name}>{obj.name}</p>
        <p className={s.price}>{obj.price} ₴</p>
      </div>
      <button onClick={() => onRemoveItem(obj)} type="button">
        <img src={deleteIcon} alt="deleteIcon" />
      </button>
    </div>
  );
};
