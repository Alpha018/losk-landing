import styled, { css } from 'styled-components'

export const Label = styled.label<{ visible: boolean }>`
  font-size: 12px;
  letter-spacing: 0.4px;
  color: rgba(0, 0, 0, 0.6);
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: all 0.3s linear;
  background-color: #fff;
  top: -8px;
  left: 12px;
  position: absolute;
`

export const LabelError = styled.label`
  font-size: 12px;
  letter-spacing: 0.4px;
  color: #b00020;
  margin-top: 4px;
`

export const InputBaseStyled = css`
  border-radius: 4px;
  outline: none;
  font-size: 15px;
  line-height: 1.53;
  letter-spacing: 0.15px;
  color: #1f2023;
  font-family: Montserrat, sans-serif;
  box-shadow: none;
  background-color: #fff;

  &:disabled {
    color: rgba(0, 0, 0, 0.6);
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
