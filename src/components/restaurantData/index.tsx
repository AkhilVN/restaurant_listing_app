import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ShowRating from '../showRating'
import CategoryPrice from '../categoryPrice'
const { RestaurantImage, RestaurantName, RestaurantWrapper, Button, ButtonText, ButtonWrapper } = require('./style.js');

interface TitleProps {
  data: any,

}

const RestaurantData: FC<TitleProps> = ({ data }) => {
  const navigate = useNavigate();

  const redirectToDetails = () => {
    navigate(`/restaurant/${data.id}`)
  }

  return (
    <RestaurantWrapper>
      <RestaurantImage src={data.image_url} width="60px" height="50px"></RestaurantImage>
      <RestaurantName>{data.name}</RestaurantName>
      <ShowRating rating={data.rating} />
      <CategoryPrice restaurant={data} detail={false} />
      <ButtonWrapper>
        <Button onClick={() => { redirectToDetails() }}>
          <ButtonText>LEARN MORE</ButtonText>
        </Button>
      </ButtonWrapper>
    </RestaurantWrapper>
  );
};

export default RestaurantData;