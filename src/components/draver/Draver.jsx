import { React, useState, useContext } from "react";
import { AppContext } from "../../context";
import axios from "axios";
import s from "./Draver.module.scss";
import { CartItem } from "../cartItem/CartItem";
import { Info } from "../info/Info";
import arrow from "../../images/svg/arrow.svg";
import close from "../../images/svg/deleteIcon.svg";
import box from "../../images/svg/box.svg";
import orderComplite from "../../images/svg/complete-order.svg";
import shortId from "shortid";

export const Draver = ({
  isOpened = false,
  totalPrice,
  onRemove,
  onClose,
  items = [],
}) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const [orderId, setOrderId] = useState(null);
  const [orderComplete, setOrderComplite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onOrderCompliteClick = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://6264756ca55d5055be48bdf2.mockapi.io/orders",
        { items: cartItems }
      );
      setOrderId(data.id);
      setOrderComplite(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          `https://6264756ca55d5055be48bdf2.mockapi.io/cart/${item.id}`
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Failed to create order :(");
    }
    setIsLoading(false);
  };

  const onOverlayClick = (e) => {
    if (e.target.id === "draver-overlay") {
      onClose();
    }
  };
  const persent = totalPrice * 0.05;

  return (
    <div
      onClick={onOverlayClick}
      id="draver-overlay"
      className={`${s.overlay} ${
        isOpened ? s.overlayVisible : s.overlayHidden
      }`}
    >
      <div
        className={`${s.draver} ${isOpened ? s.draverVisible : s.draverHidden}`}
      >
        <button onClick={onClose} type="button" className={s.closeBtn}>
          {" "}
          <img src={close} alt="close" />{" "}
        </button>
        <h2>Shopping cart</h2>

        {items.length == 0 ? (
          <Info
            img={orderComplete ? orderComplite : box}
            title={
              orderComplete ? "Order is processed!" : "Shoping cart is empty"
            }
            description={
              orderComplete
                ? `Your order #${orderId} will be delivered to courier soon`
                : "Add at least one pair of sneakers to place an order."
            }
            onClose={onClose}
          />
        ) : (
          <div className={s.itemsList}>
            {items.map((i) => (
              <CartItem
                key={shortId.generate()}
                parentid={i.parentId}
                id={i.id}
                name={i.name}
                price={i.price}
                imgUrl={i.img}
                onRemove={() => onRemove(i.parentId)}
                // onRemove={() => onRemove(i.id)}
              />
            ))}
          </div>
        )}
        {items.length != 0 && (
          <div className={s.bottomInfo}>
            <div className={s.textInfo}>
              <p className={s.text}>Total:</p>
              <div className={s.dash}></div>
              <p className={s.price}>{totalPrice} ₴</p>
            </div>
            <div className={s.textInfo}>
              <p className={s.text}>Tax 5%:</p>
              <div className={s.dash}></div>
              <p className={s.price}>{persent} ₴</p>
            </div>
            <button
              disabled={isLoading}
              onClick={onOrderCompliteClick}
              className={s.sheckout}
            >
              Checkout <img className={s.arrow} src={arrow} alt="arrow" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
