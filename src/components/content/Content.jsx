import React from "react";
import s from './Content.module.scss';
import { Card } from "../card/Card";
import search  from "../../images/svg/search.svg";

export const Content = () => {
  return (
    <div className={s.content}>
      <div className={s.descr_block}>
        <h1>All shoes</h1>
        <div className={s.inputWrapper}><img src={search} alt="search" />
          <input type="text" placeholder="Search..." /></div>
        
      </div>
        <Card />
    </div>
  )
}