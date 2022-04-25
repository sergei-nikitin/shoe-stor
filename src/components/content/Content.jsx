import { React, useState, useEffect } from "react";
import axios from "axios";
import s from './Content.module.scss';
import { Card } from "../card/Card";
import search from "../../images/svg/search.svg";
import close from "../../images/svg/deleteIcon.svg";
import shortId from 'shortid'

export const Content = ({addToCart, addOnFavorites}) => {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  
  
  useEffect(() => {
    axios.get('https://6264756ca55d5055be48bdf2.mockapi.io/items').then(res => { setItems(res.data) })
  }, [])

  const onChangeSearchInput = (e) => {
   setSearchValue(e.target.value)
  }
  const onClearInput = (e) => {
    setSearchValue('')
  }
 
  return (
    <div className={s.content}>
      <div className={s.descr_block}>
        <h1>{ searchValue ? `Search by request: `+  searchValue : 'All shoes'}</h1>
        <div className={s.inputWrapper}>
          
          {!searchValue &&  <img
            className={s.search}
            src={search}
            alt="search" />}
          {searchValue &&  <img
            onClick={onClearInput}
            className={s.close}
            src={close}
            alt="close" />}
         
          <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Search..." /></div>
        
      </div>

      <ul className={s.cardsList}>
        {items.filter(i => i.name.toLowerCase().includes(searchValue.toLowerCase())).map(({imgUrl, name, price}) => (
         <li key={shortId.generate()}>
            <Card
              name={name}
              price={price}
              img={imgUrl}
              // id={id}
              // onClichHeart={() => console.log('heart', id)}
              onAdd={(obj) => addToCart(obj)}
              onFavorite={(obj) => addOnFavorites(obj)}
            />
        </li>
      ) 
      )}
        </ul>
    </div>
  )
}