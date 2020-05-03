import styled from 'styled-components'

export interface Props {
  baseColor: string
  shineColor: string
  height: number
  width: number
}

export const Skeleton = styled.div<Props>`
  float: left;
  border-radius: 8px;
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
  margin: 0 4px;
  background-image: linear-gradient(
    90deg,
    ${props => props.baseColor} 0px,
    ${props => props.shineColor} 40px,
    ${props => props.baseColor} 80px
  );
  background-size: ${props => `${props.width * 2}px`};
  animation: shimmerHorizontal 1s infinite;

  @keyframes shimmerHorizontal {
    0% {
      background-position: 100% 0;
    }

    100% {
      background-position: -100% 0;
    }
  }
`
