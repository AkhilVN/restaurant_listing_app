import React, { FC } from 'react';
const { Details, RestaurantDesc, Indicator, Dot, StatusIndicator,StatusText } = require('./style.js');

interface TitleProps {
  restaurant: any,
  detail: boolean,
  isMobile: boolean
}

const CategoryPrice: FC<TitleProps> = ({ restaurant, detail, isMobile }) => {

  return (
    <RestaurantDesc detail={detail} isMobile={isMobile}>
      <Details detail={detail} isMobile={isMobile}>
        {restaurant.categories[0].title.toUpperCase()}
        <Dot detail={detail} />{restaurant.price ? restaurant.price : '$'}
      </Details>
      {isMobile ? <StatusIndicator isClosed={restaurant.is_closed}><StatusText>{restaurant.is_closed ? 'CLOSED' : 'OPEN'}</StatusText></StatusIndicator> : <Details detail={detail} isMobile={isMobile}><Indicator closed={restaurant.is_closed} detail={detail}></Indicator>{restaurant.is_closed ? 'CLOSED' : 'OPEN NOW'}</Details>}
    </RestaurantDesc>
  );
};

export default CategoryPrice;