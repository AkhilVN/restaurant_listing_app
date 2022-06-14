import React, { FC } from 'react';
const { Rectangle } = require('./style.js');

interface TitleProps {

}

export const RestaurantDataLoader: FC<TitleProps> = ({ }) => {
  return (
    <div style={{ maxWidth: '304px' }}>
      <Rectangle width="304px" height="228px" />
      <Rectangle width="150px" height="28px" />
      <Rectangle width="120px" height="20px" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Rectangle width="120px" height="16px" />
        <Rectangle width="70px" height="16px" />
      </div>
      <Rectangle width="304px" height="48px" />
    </div>

  );
};


export const RestaurantDetailLoader: FC<TitleProps> = ({ }) => {
  return (
    <>
      <Rectangle width="200px" height="64px" />
      <Rectangle width="120px" height="28px" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Rectangle width="120px" height="16px" />
        <Rectangle width="70px" height="16px" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '150px' }}>
        <Rectangle width="640px" height="228px" />
        <Rectangle width="200px" height="228px" />
        <Rectangle width="200px" height="228px" />
        <Rectangle width="200px" height="228px" />
      </div>

    </>

  );
};

export const RestaurantReviewLoader: FC<TitleProps> = ({ }) => {
  return (
    <>
      {[...Array(3)].map(() =>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '150px' }}>
          <div style={{ display: 'flex' }}>
            <Rectangle width="80px" height="80px" />
            <div style={{ marginLeft: '20px' }}>
              <Rectangle width="200px" height="22px" />
              <Rectangle width="140px" height="20px" />
            </div>
          </div>
          <div>
            {[...Array(3)].map(() => <Rectangle width="800px" height="16px" />)}
          </div>
        </div>
      )}

    </>

  );
};
