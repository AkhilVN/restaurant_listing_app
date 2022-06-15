import React, { FC, useEffect, useState } from 'react';
const { AllRestaurants, RestaurantWrapper, LoadMoreWrapper, LoadMoreButton } = require('./style.js');
import RestaurantData from '../restaurantData';
import { AdapterClient } from '../../apiApaptor'
import { RestaurantDataLoader } from '../skeletonLoader';

interface TitleProps {
  openStatus: any,
  priceFilter: any,
  category: any
}

const Restaurants: FC<TitleProps> = ({openStatus, priceFilter, category }) => {
  const [restaurants, setRestaurants] = useState([])
  const [offset, setOffset] = useState(1)
  const [loading, setLoading] = useState(false)
  const [restaurantLoading, setRestaurantLoading] = useState(false)

  const dynamicWidth= window.screen.width
  const isMobile = dynamicWidth <= 440

  useEffect(() => {
    loadRestaurants();
  }, [openStatus,priceFilter,category])

  const loadRestaurants = async () => {
    setRestaurantLoading(true)
    const adaptor = new AdapterClient()
    const { businesses } = await adaptor.searchRestaurant(`limit=8&offset=${offset}&open_now=${openStatus}&price=${priceFilter}&categories=${category}`)
    setRestaurants(businesses)
    setRestaurantLoading(false)
  }
  const loadMoreRestaurants = async () => {
    setLoading(true)
    const adaptor = new AdapterClient()
    const { businesses } = await adaptor.searchRestaurant(`limit=8&offset=${offset + 1}&open_now=${openStatus}&price=${priceFilter}&categories=${category}`)
    setOffset(offset + 1)
    setRestaurants(restaurants.concat(businesses))
    setLoading(false)
  }
  return (
    <>
      <AllRestaurants>All Restaurants</AllRestaurants>
      <RestaurantWrapper isMobile={isMobile}>
        {!restaurantLoading ? (restaurants.length ? restaurants.map(event => <RestaurantData data={event} isMobile={isMobile}/>) : <h3> No Restaurants Found</h3>) : [...Array(8)].map(
          () => <RestaurantDataLoader />)}
      </RestaurantWrapper>
      <LoadMoreWrapper><LoadMoreButton onClick={() => loadMoreRestaurants()}>{!loading ? 'LOAD MORE' : <p className="loader" />}</LoadMoreButton></LoadMoreWrapper>
    </>
  );
};

export default Restaurants;