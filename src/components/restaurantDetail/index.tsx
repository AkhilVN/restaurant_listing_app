import React, { FC, useEffect, useState } from 'react';
import { GOOGLE_MAPS_API_KEY } from '../../constants';
import CategoryPrice from '../categoryPrice';
import ShowRating from '../showRating';
const { RestaurantName, MapImageWrapper, MapWrapper, Thumbnail, Location } = require('./style.js');
const { Seperator } = require('../../commonStyle.js');


interface TitleProps {
    restaurantDetail: any,
    isMobile: boolean
}

const Details: FC<TitleProps> = ({ restaurantDetail, isMobile }) => {
    const getLocationThumbnail = (lat: number, lon: number) => {
        const url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=16&size=640x228&markers=color:blue%7C${lat},${lon}&key=${GOOGLE_MAPS_API_KEY}`
        return url
    }
    const { latitude, longitude } = restaurantDetail.coordinates
    return (
        <>
            <RestaurantName isMobile={isMobile}>{restaurantDetail.name}</RestaurantName>
            <ShowRating rating={restaurantDetail.rating} />
            <CategoryPrice restaurant={restaurantDetail} detail={true} isMobile={false}/>
            <Seperator />
            <MapImageWrapper isMobile={isMobile}>
                <MapWrapper isMobile={isMobile}>
                    <Thumbnail src={getLocationThumbnail(latitude, longitude)}/>
                    <Location>{restaurantDetail.location.address1},
                        {restaurantDetail.location.city} {restaurantDetail.location.zip_code}</Location>
                </MapWrapper>
                <div style={{ display: 'flex', overflowX: 'scroll' }}>
                    {restaurantDetail.photos.map((e: '') => <img src={e} width="304px" height="228px" style={{ margin: '0 10px' }} />)}
                </div>
            </MapImageWrapper>
            <Seperator />



        </>
    );
};

export default Details;