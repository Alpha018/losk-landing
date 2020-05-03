import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const stylesTheme = {
  dark: { background: '#1f2023', color: '#fff' },
  primary: { background: '#0089a9', color: '#fafaf8' },
  light: { background: '#fff', color: '#000000a6', border: '1px solid #e0e0e0' }
}

interface ButtonProps extends ButtonHTMLAttributes<{}> {
  theme?: keyof typeof stylesTheme
}

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafaf8;
  min-width: 110px;
  min-height: 45px;
  font-size: 14px;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  border-radius: 4px;
  color: #000000a6;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
`

const Button = (props: ButtonProps) => {
  const { theme, ...restProps } = props

  return (
    <ButtonStyled {...restProps} style={{ ...restProps.style, ...stylesTheme[theme] }}>
      {props.children}
    </ButtonStyled>
  )
}

export default Button
