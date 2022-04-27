import { React, useState, useContext } from "react";
import { AppContext } from "../../context";
import ContentLoader from "react-content-loader";
import s from "./Card.module.scss";
import notAdded from "../../images/svg/notAdded.svg";
import added from "../../images/svg/added.svg";
import unliked from "../../images/svg/unliked.svg";
import liked from "../../images/svg/liked.svg";
import defFoto from "../../images/jpg/def.jpg";

export const Card = ({
  id,
  img,
  name,
  price,
  onFavorite,
  onAdd,
  loading = false,
}) => {
  const { isCheckeOnAdded, isCheckeOnFavorites } = useContext(AppContext);

  const handleAddClick = (img, name, price, id) => {
    onAdd({ img, name, price, id });
  };
  const handleLikedClick = (img, name, price, id) => {
    onFavorite({ id, img, name, price });
  };
  // const handleLikedClick = () => {
  //   onFavorite({ id, img, name, price });
  // };

  return (
    <div className={s.wrapper}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={220}
          viewBox="0 0 210 260"
          backgroundColor="#e7f6ff"
          foregroundColor="#ffffff"
        >
          <rect x="60" y="251" rx="0" ry="0" width="60" height="0" />
          <rect x="217" y="95" rx="0" ry="0" width="71" height="31" />
          <rect x="15" y="25" rx="5" ry="5" width="170" height="80" />
          <rect x="15" y="123" rx="5" ry="5" width="170" height="15" />
          <rect x="15" y="165" rx="5" ry="5" width="90" height="15" />
          <rect x="15" y="200" rx="5" ry="5" width="80" height="25" />
          <rect x="145" y="195" rx="5" ry="5" width="30" height="30" />
        </ContentLoader>
      ) : (
        <>
          <button
            onClick={() => handleLikedClick(img, name, price, id)}
            className={s.heartWrapper}
          >
            <img src={isCheckeOnFavorites(id) ? liked : unliked} alt="heart" />
          </button>
          <button
            onClick={() => handleAddClick(img, name, price, id)}
            className={s.plusWrapper}
          >
            <img src={isCheckeOnAdded(id) ? added : notAdded} alt="plus" />
          </button>
          <div className={s.imgWrapper}>
            {img ? (
              <img className={s.shoeImg} src={img} alt="foto" />
            ) : (
              <img className={s.shoeDefImg} src={defFoto} alt="foto" />
            )}
          </div>

          <p className={s.textName}>{name}</p>
          <p className={s.textPrice}>Price:</p>
          <p className={s.price}>{price} ₴</p>
        </>
      )}
    </div>
  );
};
