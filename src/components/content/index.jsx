import { React, useState, useEffect } from "react";
// import axios from "axios";
import s from './Content.module.scss';
import { Card } from "../card";
import search from "../../images/svg/search.svg";
import shortId from 'shortid'

export const Content = ({addToCart}) => {
  const [items, setItems] = useState([]);
  
  
  useEffect(() => {
    fetch('https://6264756ca55d5055be48bdf2.mockapi.io/items')
      .then(res => {
     return res.json()
      })
      .then(json => {
      setItems(json)
   }) 
  }, [])

 
 
  return (
    <div className={s.content}>
      <div className={s.descr_block}>
        <h1>All shoes</h1>
        <div className={s.inputWrapper}><img src={search} alt="search" />
          <input type="text" placeholder="Search..." /></div>
        
      </div>
      <ul className={s.cardsList}>

        {items.map(({imgUrl, name, price, id}) => (
         <li key={shortId.generate()}>
            <Card
              name={name}
              price={price}
              img={imgUrl}
              id={id}
              onClichHeart={() => console.log('heart', id)}
              onAdd={(obj) => addToCart(obj)}
            />
        </li>
      )
       
      )}
        </ul>
    </div>
  )
}