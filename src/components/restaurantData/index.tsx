import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ShowRating from '../showRating'
import CategoryPrice from '../categoryPrice'
const { RestaurantImage, RestaurantName, RestaurantWrapper, Button, ButtonText, ButtonWrapper, LearnMoreButton } = require('./style.js');

interface TitleProps {
  data: any,
  isMobile: boolean

}

const RestaurantData: FC<TitleProps> = ({ data, isMobile }) => {
  const navigate = useNavigate();

  const redirectToDetails = () => {
    navigate(`/restaurant/${data.id}`)
  }

  return (
    <>{
      isMobile ? 
        <div style={{display:'flex', marginBottom:'20px'}}>
        <RestaurantImage src={data.image_url} width="220px" height="220px"></RestaurantImage>
        <div style={{marginLeft:'12px', width: '70%'}}>
          <RestaurantName fontSize={'32px'}>{data.name}</RestaurantName>
          <ShowRating rating={data.rating} />
          <CategoryPrice restaurant={data} detail={false} isMobile={isMobile}/>
            <LearnMoreButton onClick={()=>redirectToDetails()}>LEARN MORE 
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </LearnMoreButton>
        </div>
        </div>
      :
    <RestaurantWrapper>
      <RestaurantImage src={data.image_url} height= "228px" width="304px"></RestaurantImage>
      <RestaurantName>{data.name}</RestaurantName>
      <ShowRating rating={data.rating} />
      <CategoryPrice restaurant={data} detail={false} isMobile={isMobile}/>
      <ButtonWrapper>
        <Button onClick={() => { redirectToDetails() }}>
          <ButtonText>LEARN MORE</ButtonText>
        </Button>
      </ButtonWrapper>
    </RestaurantWrapper>
    }
    </>
  );
};

export default RestaurantData;