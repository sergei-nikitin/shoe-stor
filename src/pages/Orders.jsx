import { React, useEffect, useState } from "react";
import axios from "axios";
// import { AppContext } from "../context";
import { Card } from "../components/card/Card";
import shortId from "shortid";
import s from "../components/content/Content.module.scss";

export const Orders = () => {
  // const { addToCart, addOnFavorites } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const baseUrl = "https://6264756ca55d5055be48bdf2.mockapi.io";
        const { data } = await axios.get(`${baseUrl}/orders`);
        // const resOrders = data.map((obj) => obj.items).flat();
        // setOrders(resOrders);

        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setLoading(false);
      } catch (error) {
        alert("Order failed");
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className={s.fawWrapper}>
      {orders.length !== 0 ? (
        <>
          <h2>Orders: </h2>
          <ul className={s.cardsList}>
            {(isLoading ? [...Array(4)] : orders).map((i) => (
              <li key={shortId.generate()}>
                <Card loading={isLoading} {...i} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2>Wishlist is empty</h2>
      )}
    </div>
  );
};
