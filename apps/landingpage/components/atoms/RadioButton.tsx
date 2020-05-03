import styled from 'styled-components'

export const RadioButton = styled.div`
  .container {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 8px;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: white;
    border-radius: 50%;
    border: 2px solid #0089a9;
  }

  .container input:checked ~ .checkmark {
    background-color: white;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    top: 4px;
    left: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #0089a9;
  }
`
