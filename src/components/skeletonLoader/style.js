import styled from 'styled-components'

export const SkeletonLoader = styled.div`
    display: block;
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
    background-repeat: repeat-y;
    background-size: 50px 500px;
    background-position: 0 0;
    animation: shine 1s infinite;
    @keyframes shine {
        to {
          background-position: 100% 0;
        }
      }
`;

export const Rectangle = styled(SkeletonLoader)`
      width: ${props => props.width};
      height: ${props => props.height};
      margin-bottom: 16px;
`



