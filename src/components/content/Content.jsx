import { React, useState } from "react";

import axios from "axios";
import s from "./Content.module.scss";
import { Card } from "../card/Card";
import search from "../../images/svg/search.svg";
import close from "../../images/svg/deleteIcon.svg";
import shortId from "shortid";

export const Content = ({
  items,
  addToCart,
  addOnFavorites,
  cartItems,
  isLoading,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };
  const onClearInput = (e) => {
    setSearchValue("");
  };

  const renderItems = () => {
    const filteredItems = items.filter((i) =>
      i.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filteredItems).map((item) => (
      <li key={shortId.generate()}>
        <Card
          loading={isLoading}
          cartItems={cartItems}
          {...item}
          onAdd={(obj) => addToCart(obj)}
          onFavorite={(obj) => addOnFavorites(obj)}
        />
      </li>
    ));
  };

  return (
    <div className={s.content}>
      <div className={s.descr_block}>
        <h1>
          {searchValue ? `Search by request: ` + searchValue : "All shoes"}
        </h1>
        <div className={s.inputWrapper}>
          {!searchValue && (
            <img className={s.search} src={search} alt="search" />
          )}
          {searchValue && (
            <img
              onClick={onClearInput}
              className={s.close}
              src={close}
              alt="close"
            />
          )}

          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>

      <ul className={s.cardsList}>{renderItems()}</ul>
    </div>
  );
};
