import React, { FC } from 'react';
import ShowRating from '../showRating';
const { Seperator, FlexWrapper, ProfileIcon, ProfileDetail, Name, Date, ReviewText } = require('./style.js');


interface TitleProps {
    reviews: any,
    isMobile: boolean
}

const UserReviews: FC<TitleProps> = ({ reviews, isMobile }) => {

    const changeDateFormat = (date: any) => {
        const dateTime = date.substr(0, 10).split("-");

        const formattedDate = dateTime[2] + "-" + dateTime[1] + "-" + dateTime[0];
        return formattedDate
    }

    return (
        <>
            {isMobile ? 
            <>
                <FlexWrapper>
                    <ProfileIcon src={reviews.user.image_url} isMobile={isMobile}/>
                    <ProfileDetail>
                        <Name isMobile={isMobile}>{reviews.user.name}</Name>
                        <Date isMobile={isMobile}>{changeDateFormat(reviews.time_created)}</Date>
                    </ProfileDetail>
                </FlexWrapper>
                <div style={{marginTop:'12px'}}>
                    <ShowRating rating={reviews.rating}/>
                    <ReviewText isMobile={isMobile}>{reviews.text}</ReviewText>
                </div>
            </>
            
            :<FlexWrapper>
                <ProfileIcon src={reviews.user.image_url} />
                <ProfileDetail>
                    <Name>{reviews.user.name}</Name>
                    <Date>{changeDateFormat(reviews.time_created)}</Date>
                </ProfileDetail>
                <div>
                    <ShowRating rating={reviews.rating} />
                    <ReviewText>{reviews.text}</ReviewText>
                </div>
            </FlexWrapper>}
            <Seperator />





        </>
    );
};

export default UserReviews;