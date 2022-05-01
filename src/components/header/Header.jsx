import { React, useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../context";
import { Draver } from "../draver/Draver";

import s from "./Header.module.scss";
import logo from "../../images/png/logo.png";
import user from "../../images/svg/user.svg";

export const Header = ({ onOpenDraver }) => {
  const { draver, onRemoveItem, onCloseBasket, cartItems } =
    useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  return (
    <header className={s.header}>
      <Draver
        isOpened={draver}
        totalPrice={totalPrice}
        items={cartItems}
        onClose={onCloseBasket}
        onRemove={onRemoveItem}
      />
      <Link to="/shoe-stor/">
        <div className={s.containers}>
          <img className={s.logo} src={logo} />
          <div className={s.descr}>
            <h3>shoe store</h3>
            <p>My study project</p>
          </div>
        </div>
      </Link>
      <div className={s.containers}>
        <button type="button" onClick={onOpenDraver}>
          <svg
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.545 18.182a.818.818 0 1 0 0-1.637.818.818 0 0 0 0 1.637ZM16.546 18.182a.818.818 0 1 0 0-1.637.818.818 0 0 0 0 1.637ZM1 1h3.273l2.192 10.956a1.636 1.636 0 0 0 1.637 1.317h7.953a1.636 1.636 0 0 0 1.636-1.317L19 5.09H5.09"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>{totalPrice} ₴</span>
        </button>

        <Link to="/shoe-stor/favorite">
          <svg
            width="22"
            height="19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1 0c1.63 0 2.998.55 4.105 1.648 1.108 1.099 1.662 2.44 1.662 4.023 0 .775-.163 1.559-.489 2.35a13.462 13.462 0 0 1-1.075 2.11c-.391.613-1.05 1.405-1.98 2.374-.928.97-1.71 1.753-2.345 2.35-.635.599-1.653 1.511-3.054 2.74l-1.515 1.357-1.515-1.31c-1.368-1.26-2.378-2.188-3.03-2.786a53.412 53.412 0 0 1-2.37-2.35c-.928-.97-1.588-1.762-1.98-2.376a12.166 12.166 0 0 1-1.05-2.108A6.422 6.422 0 0 1 0 5.67c0-1.583.554-2.924 1.662-4.023C2.769.549 4.122 0 5.718 0c1.89 0 3.453.727 4.69 2.181C11.648.727 13.212 0 15.1 0Zm-4.593 16.092A169.312 169.312 0 0 0 14 12.917a46.75 46.75 0 0 0 2.419-2.496c.88-.97 1.49-1.818 1.832-2.545a5.134 5.134 0 0 0 .513-2.205c0-1.034-.35-1.89-1.05-2.569-.7-.679-1.572-1.018-2.615-1.018-.782 0-1.523.226-2.223.679-.7.452-1.197 1.034-1.49 1.745H9.431C9.17 3.797 8.69 3.215 7.99 2.763a4.11 4.11 0 0 0-2.272-.679c-1.043 0-1.906.34-2.59 1.018C2.443 3.781 2.1 4.637 2.1 5.671c0 .743.163 1.478.489 2.205.326.727.937 1.576 1.833 2.545.896.97 1.71 1.801 2.443 2.496a250.19 250.19 0 0 0 3.445 3.175l.098.097.098-.097Z"
              fill="#9B9B9B"
            />
          </svg>
        </Link>
        <Link to="/shoe-stor/orders">
          <button type="button">
            <img src={user} />
          </button>
        </Link>
      </div>
    </header>
  );
};
