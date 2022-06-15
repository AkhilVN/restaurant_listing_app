import React, { FC } from 'react';
import UserReviews from '../userReviews'
const { TotalReviews } = require('./style.js');


interface TitleProps {
  restaurantReviews: any,
  isMobile: boolean
}

const RestaurantReviews: FC<TitleProps> = ({ restaurantReviews, isMobile }) => {
  const { reviews, total } = restaurantReviews
  return (
    <>
      <TotalReviews>{total} Reviews</TotalReviews>
      <div>{reviews.map((event: any) => <UserReviews reviews={event} isMobile={isMobile}/>)}</div>



    </>
  );
};

export default RestaurantReviews;