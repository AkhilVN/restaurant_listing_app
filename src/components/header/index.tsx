import React, { FC } from 'react';
const { RestaurantHeader, RestaurantDesc } = require('../header/style.js');

interface TitleProps {
}

const Header: FC<TitleProps> = ({ }) => {
  return (
    <>
      <RestaurantHeader>Restaurants</RestaurantHeader>
      <RestaurantDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</RestaurantDesc>
    </>
  );
};

export default Header;