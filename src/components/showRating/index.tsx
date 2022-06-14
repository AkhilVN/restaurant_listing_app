import React, { FC } from 'react';

interface TitleProps {
  rating: number,

}

const ShowRating: FC<TitleProps> = ({ rating }) => {

  const showRatings = () => {
    let fullStar = Math.floor(rating)
    let halfStar = (rating * 10) % 10
    halfStar = halfStar && 1
    let emptyStar = 5 - fullStar - halfStar
    const full =
      [...Array(fullStar)].map(() => (
        <i className="fa fa-star checked starSize "></i>
      ))
    const half =
      [...Array(halfStar)].map(() => (
        <i className="fa fa-star-half-full checked starSize "></i>
      ))
    const empty =
      [...Array(emptyStar)].map(() => (
        <i className="fa fa-star-o un-checked starSize "></i>
      ))
    return <span>{full}{half}{empty}</span>
  }

  return (
    <>
      {showRatings()}
    </>

  );
};

export default ShowRating;