import styled from 'styled-components'

export const ContainerMarker = styled.label`
  .input-helper {
    position: relative;
    display: inline-block;

    font-size: 17px;
    color: rgba(0, 0, 0, 0.65);
    font-family: Montserrat, sans-serif;

    &:before {
      content: '';
      display: block;
      position: absolute;
    }
  }

  .input-helper--checkbox {
    padding-left: 34px;
    cursor: pointer;

    &:before {
      top: 0;
      left: 0;
      width: 18px;
      height: 18px;
      border: 2px solid #00000099;
      border-radius: 3px;
    }
  }

  input[type='checkbox'] {
    display: none;
    &:checked + label:before {
      content: '\\2713';
      text-align: center;
    }
  }
`
