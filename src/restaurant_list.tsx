import React, { FC, useEffect, useState } from 'react';
import Header from './components/header'
import Filter from './components/filter'
import Restaurants from './components/restaurant';
interface TitleProps {
}

const RestaurantList: FC<TitleProps> = ({ }) => {
  const [openNow, setOpenNow] = useState(false)
  const [price, setPrice] = useState('1,2,3,4')
  const [category, setCategory] = useState('')
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const getPriceValue = (value:any) => {
    const priceQuery  = value === 'All' ? '1,2,3,4' : JSON.stringify(value.length)
    setPrice(priceQuery)
  }

  const getCategory = (value:any) => {
    setCategory(value)
  }
  return (
    <>
      <Header />
      <Filter openStatus = {(value:any)=>setOpenNow(value)} price={(value:any)=> getPriceValue(value)} category={(value:any)=>getCategory(value)}/>
      <Restaurants openStatus={openNow} priceFilter={price} category={category}/>
    </>
  );
};

export default RestaurantList;