import { React, useContext } from "react";
import { AppContext } from "../../context";
import arrowLeft from "../../images/svg/arrow-left.svg";

import s from "./Info.module.scss";

export const Info = ({ img, title, description }) => {
  const { setDraver } = useContext(AppContext);
  return (
    <div className={s.empty}>
      <img src={img} alt="box" />
      <h4>{title}</h4>
      <p>{description}</p>
      <button onClick={() => setDraver(false)} className={s.sheckout}>
        Go back <img className={s.arrowLeft} src={arrowLeft} alt="arrow" />
      </button>
    </div>
  );
};
