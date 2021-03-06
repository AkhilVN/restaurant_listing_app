import styled from 'styled-components'

export const RestaurantImage = styled.img`
  height: ${props => props.height};
  width: ${props=> props.width};
`;

export const RestaurantName = styled.p`
  color: #000000;
  font-size: ${props=>props.fontSize ? props.fontSize : '20px'};
  line-height: ${props=>props.fontSize ? props.fontSize+'8px' : '26px'};
  letter-spacing: 1px;
  font-weight: 500;
  margin: 16px 0 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;


export const RestaurantWrapper = styled.div`
    max-width: 304px;
    height: 428px;
    position: relative;
`

export const ButtonWrapper = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
`

export const Button = styled.button`
    width: 100%;
    background-color: #002B56;
    border-color: #002B56;
    height: 48px;
    padding: 16px;
    color: #fff;
`

export const ButtonText = styled.p`
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1px;
`

export const LearnMoreButton = styled.p`
  font-size: 26px;
  color: #002B56;
  
`