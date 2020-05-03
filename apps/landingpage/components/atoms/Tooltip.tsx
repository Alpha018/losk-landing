import styled from 'styled-components'

export const ToolTip = styled.i`
  position: absolute;
  right: 35px;
  font-style: normal;

  .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
  }

  .img-position {
    position: absolute;
    cursor: pointer;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 280px;
    background-color: #555;
    color: #fff;
    padding: 12px 16px;
    border-radius: 8px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -268px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltip .tooltiptext::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 90%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`
