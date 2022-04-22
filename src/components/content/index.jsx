import React from "react";
import s from './Content.module.scss';
import { Card } from "../card";
import search from "../../images/svg/search.svg";
import shortId from 'shortid'
// import db from "../../db.json";
import nikeBlazer from "../../images/jpg/nike-blazer.jpg";
import airmax from "../../images/jpg/airmax270.jpg"
import blazerWhite from "../../images/jpg/blazer-white.jpg"
import curry from "../../images/jpg/curry8.jpg"
import kurie from "../../images/jpg/kyrie7.jpg"
import jordan from "../../images/jpg/jordan11.jpg"
import lebron from "../../images/jpg/lebron18.jpg"
import lebron13 from "../../images/jpg/lebron13-low.jpg"
import jordan11 from "../../images/jpg/jordan11.jpg"
import arka from "../../images/jpg/arka-boku.jpg"
import flyTrap from "../../images/jpg/flytap4.jpg"

export const Content = () => {
  const db = [
     {
       "id": 1,
       "name": "Nike Blazer Mid Suede",
       "price": 3500,
       "imgUrl": nikeBlazer
    },
     {
       "id": 2,
       "name": "Nike Air Max 270",
       "price": 5500,
       "imgUrl": airmax
    },
     {
       "id": 3,
       "name": "Nike Blazer Mid Suede",
       "price": 3500,
       "imgUrl": blazerWhite
    },
     {
       "id": 5,
       "name": "Under Armour Curry 8",
       "price": 5000,
       "imgUrl": curry
    },
     {
       "id": 6,
       "name": "Nike Kyrie 7",
       "price": 6500,
       "imgUrl": kurie
    },
     {
       "id": 7,
       "name": "Jordan Air Jordan 11",
       "price": 7000,
       "imgUrl": jordan
    },
     {
       "id": 8,
       "name": "Nike LeBron XVIII",
       "price": 5500,
       "imgUrl": lebron
    },
     {
       "id": 9,
       "name": "Nike Lebron XVIII Low",
       "price": 6000,
       "imgUrl": lebron13
    },
     {
       "id": 10,
        "name": "Nike Blazer Mid Suede",
       "price": 3500,
       "imgUrl": nikeBlazer
    },
     {
       "id": 11,
       "name": "Jordan Air Jordan 11",
       "price": 7000,
       "imgUrl": jordan11
    },
     {
       "id": 13,
       "name": "Мужские Кроссовки Nike Kyrie Flytrap IV",
       "price": 7500,
       "imgUrl": flyTrap
    },
     {
       "id": 12,
       "name": "Puma X Aka Boku Future Rider",
       "price": 5500,
       "imgUrl" : arka
    }
  ]
  return (
    <div className={s.content}>
      <div className={s.descr_block}>
        <h1>All shoes</h1>
        <div className={s.inputWrapper}><img src={search} alt="search" />
          <input type="text" placeholder="Search..." /></div>
        
      </div>
      <ul className={s.cardsList}>

        {db.map(({imgUrl, name, price, id}) => (
         <li key={shortId.generate()}>
          <Card name={name} price={price} img={imgUrl} id={id} />
        </li>
      )
       
      )}
        </ul>
    </div>
  )
}