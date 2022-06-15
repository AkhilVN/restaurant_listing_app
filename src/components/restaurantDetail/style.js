
import styled from 'styled-components'
import { RestaurantHeader } from '../header/style';

export const RestaurantName = styled(RestaurantHeader)`
  margin-bottom: 16px;
  font-size: ${props=>props.isMobile && '32px'}
`;

export const MapImageWrapper = styled.div`
  display: ${props=>props.isMobile ? 'block': 'flex'};
  margin: 48px 0;
`;

export const MapWrapper = styled.div`
  max-width: 50%;
  margin-bottom: ${props=> props.isMobile && '20px'}
`;

export const Thumbnail = styled.img`
    width: 640px;
    height: 228px;
`;

export const Location = styled.p`
    font-size: 20px;
    line-height: 28px;
    color: #000000;
    margin-top: 15px;

`

export const Images = styled.div`
  display: flex;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`