import styled from 'styled-components'

export const AllRestaurants= styled.h1`
  color: #333333;
  font-size: 34px;
  line-height:40px;
  margin: 64px 0 43px 0;
  font-weight: 300 !important;
`;

export const RestaurantWrapper= styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 32px;
`;

export const LoadMoreWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 80px;
`

export const LoadMoreButton = styled.button`
    width: 416px;
    height: 48px;
    border: 1px solid #002B56;
    color: #002B53;

`