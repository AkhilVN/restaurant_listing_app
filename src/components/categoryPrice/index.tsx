import React, { FC } from 'react';
const { Details, RestaurantDesc, Indicator, Dot } = require('./style.js');

interface TitleProps {
  restaurant: any,
  detail: boolean
}

const CategoryPrice: FC<TitleProps> = ({ restaurant, detail }) => {

  return (
    <RestaurantDesc detail={detail}>
      <Details detail={detail}>
        {restaurant.categories[0].title.toUpperCase()}
        <Dot detail={detail} />{restaurant.price ? restaurant.price : '$'}
      </Details>
      <Details detail={detail}><Indicator closed={restaurant.is_closed} detail={detail}></Indicator>{restaurant.is_closed ? 'CLOSED' : 'OPEN NOW'}</Details>
    </RestaurantDesc>
  );
};

export default CategoryPrice;