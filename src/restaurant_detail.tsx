import React, { FC, useEffect, useState } from 'react';
import {AdapterClient} from './apiApaptor'
import Details from './components/restaurantDetail'
import RestaurantReviews from './components/restaurantReviews'
import { RestaurantDetailLoader, RestaurantReviewLoader} from './components/skeletonLoader'
interface TitleProps {
}

const RestaurantDetail: FC<TitleProps> = ({  }) => {
    const [restaurants, setRestaurants] = useState(null)
    const [reviews, setReviews] = useState(null)
    const id = window.location.href.split('/').reverse()[0]

    useEffect( () => {
      window.scrollTo(0,0);
        getRestaurantDetail();
        getRestaurantReviews();
      }, [])
      const getRestaurantDetail = async() => {
        const adaptor = new AdapterClient()
        const details =  await adaptor.restaurantDetails(id)
        setRestaurants(details)
      }
      const getRestaurantReviews = async() => {
        const adaptor = new AdapterClient()
        const review =  await adaptor.restaurantReviews(id)
        setReviews(review)
      }
  return (
    <>
            {restaurants ? <Details restaurantDetail={restaurants}/> : <RestaurantDetailLoader/>}
            {reviews ? <RestaurantReviews restaurantReviews={reviews}/> : <RestaurantReviewLoader/>}


    </>
  );
};

export default RestaurantDetail;