import React, { FC } from 'react';
import UserReviews from '../userReviews'
const { TotalReviews } = require('./style.js');


interface TitleProps {
  restaurantReviews: any
}

const RestaurantReviews: FC<TitleProps> = ({ restaurantReviews }) => {
  const { reviews, total } = restaurantReviews
  return (
    <>
      <TotalReviews>{total} Reviews</TotalReviews>
      <div>{reviews.map((event: any) => <UserReviews reviews={event} />)}</div>



    </>
  );
};

export default RestaurantReviews;