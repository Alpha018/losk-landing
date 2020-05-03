import styled, { css } from 'styled-components'

type LevelText = 1 | 2 | 3 | 4

function getStyleByLevel(level?: LevelText) {
  if (level === 4) {
    return 12
  }

  if (level === 3) {
    return 14
  }

  if (level === 2) {
    return 18
  }

  if (level === 1) {
    return 24
  }

  return 36
}

export const Title = styled.h1<{ level?: LevelText; color?: string }>`
  font-family: Montserrat, sans-serif;
  margin: 0;
  color: ${props => props.color || '#1f2023'};
  font-size: ${props => getStyleByLevel(props.level)}px;
`

type TypeText = 'info' | 'subtitle' | 'message' | 'label'

function getStyleByType(type: TypeText) {
  if (type === 'subtitle') {
    css`
      font-size: 17px;
      color: #000000a6;
    `
  }

  if (type === 'message') {
    return css`
      font-size: 17px;
      color: #000;
    `
  }

  if (type === 'info')
    return css`
      font-size: 15px;
      line-height: 1.73;
      color: #000;
      text-align: center;
      font-style: italic;
    `

  if (type === 'label')
    return css`
      font-size: 12px;
      color: #6e6e6e;
    `
}

export const Text = styled.span<{ type: TypeText }>`
  font-family: Montserrat, sans-serif;
  ${props => getStyleByType(props.type)}
`
