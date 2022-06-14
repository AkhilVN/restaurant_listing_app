import styled from 'styled-components'

export const FilterWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const HorizontalLine = styled.div`
    height: 79px;
    margin: 0 -64px;
    border-top: 1px solid #E6E6E6;
    border-bottom: 1px solid #E6E6E6;
    display: flex;
    align-items: center;
    padding: 0 64px;
`
export const FilterBy = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #606060;
`
export const OpenNow = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #002B56;
    margin-left: 28px;
`

export const FilterTab = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #002B56;
    margin-left: 28px;
    width: ${props => props.width};
`


export const FilterDropDown = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Icon = styled.i`
    font-size: 9px !important;
    color: #969696;
`