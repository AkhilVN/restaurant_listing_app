import styled from 'styled-components'

export const Details = styled.p`
    color: #757575;
    font-size: ${props => props.detail ? (props.isMobile ? '28px' : '22px') : (props.isMobile ? '28px' :'12px')};
    line-height: ${props => props.detail ? '32px' : '16px'};
    font-weight: 300;
    margin: 16px 0 20px 0;
    display: flex;
    align-items: center;
`

export const RestaurantDesc = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${props => props.detail && '48px'};
    margin-top: ${props=> props.isMobile && '12px'};
`

export const Indicator = styled.div`
    height: ${props => props.detail ? '22px' : '8px'};
    width: ${props => props.detail ? '22px' : '8px'};
    border-radius: 50%;
    margin-right: 4px;
    background-color: ${props => props.closed ? '#FF3548' : '#00E8A4'};
`

export const Dot = styled.div`
    height:${props => props.detail ? '4px' : '2px'};
    width: ${props => props.detail ? '4px' : '2px'};
    border-radius: 50%;
    margin: 0 4px;
    background-color: #757575;
`

export const StatusIndicator = styled.div`
    background-color: ${props=>props.isClosed ? '#FF3548' : '#00E8A4'};
    border-radius: 16px;
    width: 92px;
    height: 32px;
    text-align: center;
    display: flex;
    align-item: center;
`

export const StatusText = styled.div`
    margin: auto;
`