import React from "react";
import s from "./Draver.module.scss";
import { CartItem } from "../cartItem/CartItem";
import arrow from "../../images/svg/arrow.svg";
import arrowLeft from "../../images/svg/arrow-left.svg";
import close from "../../images/svg/deleteIcon.svg";
import box from "../../images/svg/box.svg"
// import { findAllInRenderedTree } from "react-dom/test-utils";
import shortId from 'shortid'

export const Draver = ({ onRemove, onClose, items = [] }) => {
  
  return (
    <div className={s.overlay}>
      <div className={s.draver}>
        <button onClick={onClose} type="button" className={ s.closeBtn }> <img src={close} alt="close" /> </button>
        <h2>Shopping cart</h2>

        {items.length == 0 ?
          <div className={s.empty}>
          <img src={box} alt="box" />
          <h4>Cart is empty</h4>
          <p>Add at least one pair of sneakers to place an order.</p>
           <button onClick={onClose}  className={s.sheckout}>Go back <img className={s.arrowLeft} src={arrowLeft} alt="arrow" /></button>
          </div>
          : 

        <div className={s.itemsList}>
          {items.map((i) => (
            <CartItem
            key={shortId.generate()}
            id={i.id}
            name={i.name}
            price={i.price}
            imgUrl={i.img}  
            onRemove={() => onRemove(i.id)}
          />
        )   
         )}
          </div>

          
        }
        {items.length != 0 &&
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
        }
          
        
          
      </div>
    </div>
  )
}