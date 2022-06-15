

import styled from 'styled-components'

export const TotalReviews = styled.p`
    font-size: 22px;
    line-height: 32px;
    color: #666666;
    margin: 48px 0;

`;

export const Seperator = styled.div`
    border: 1px solid #E6E6E6;
    display: flex;
    margin: 60px 0;
`;

export const FlexWrapper = styled.div`
    display: flex;
`

export const ProfileIcon = styled.img`
    width: ${props=> props.isMobile ? '120px' : '80px'};
    height: ${props=> props.isMobile ? '120px' : '80px'};
`
export const ProfileDetail = styled.div`
    margin-left: 32px;
`

export const Name = styled.p`
    font-size: ${props=> props.isMobile ? '28px' :'22px'};
    line-height: 24px;
    color: #000000;
    width: 192px;
`

export const Date = styled.p`
    font-size: ${props=> props.isMobile ? '24px' :'16px'};
    line-height: 24px;
    color: #666666;
    margin-top: 6px;

`

export const ReviewText = styled.p`
    font-size: ${props=> props.isMobile ? '14px' :'20px'};
    line-height: 28px;
    letter-spacing: 1px;
    color: #000000;
    margin-top: 6px;
`

