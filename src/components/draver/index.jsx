import React from "react";
import s from "./Draver.module.scss";
import { CartItem } from "../cartItem/CartItem";
import arrow from "../../images/svg/arrow.svg";
import close from "../../images/svg/deleteIcon.svg";
import { findAllInRenderedTree } from "react-dom/test-utils";
import shortId from 'shortid'

export const Draver = ({ onClose, items = [] }) => {
  




  return (
    <div className={s.overlay}>
      <div className={s.draver}>
        <button onClick={onClose} type="button" className={ s.closeBtn }> <img src={close} alt="close" /> </button>
        <h2>Shopping cart</h2>
        
          <div className={s.itemsList}>
          {items.map(({ name, price, img}) => (
            <CartItem
            key={shortId.generate()}
            name={name}
            price={price}
            imgUrl={img}  
          />
        )   
         )}
          </div>
        
           <div className={s.bottomInfo}>
            <div className={s.textInfo}>
              <p className={s.text}>Total:</p>
              <div className={s.dash}></div>
              <p className={s.price}>5000 ₴</p>
            </div>
            <div className={s.textInfo}>
              <p className={s.text}>Tax 5%:</p>
              <div className={s.dash}></div>
              <p className={s.price}>250 ₴</p>
            </div>
            <button className={s.sheckout}>Checkout <img className={s.arrow} src={arrow} alt="arrow" /></button>
         </div>
      </div>
    </div>
  )
}