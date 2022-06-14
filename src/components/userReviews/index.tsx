import React, { FC } from 'react';
import ShowRating from '../showRating';
const { Seperator, FlexWrapper, ProfileIcon, ProfileDetail, Name, Date, ReviewText } = require('./style.js');


interface TitleProps {
    reviews: any
}

const UserReviews: FC<TitleProps> = ({ reviews }) => {

    return (
        <>
            <FlexWrapper>
                <ProfileIcon src={reviews.user.image_url} />
                <ProfileDetail>
                    <Name>{reviews.user.name}</Name>
                    <Date>{reviews.time_created}</Date>
                </ProfileDetail>
                <div>
                    <ShowRating rating={reviews.rating} />
                    <ReviewText>{reviews.text}</ReviewText>
                </div>
            </FlexWrapper>
            <Seperator />





        </>
    );
};

export default UserReviews;