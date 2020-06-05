import React from 'react'
import styled, { keyframes } from 'styled-components'

const shadow = keyframes`
    to{
          box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.04),0 0 0 40px rgba(255, 255, 255, 0.03), 0 0 0 70px rgba(255, 255, 255, 0.02);
          transform: rotateZ(360deg) scale(1.1)
    }
`
const box = keyframes`
    to{
          transform: rotateY(360deg) 
    }
`

const StyledToken = styled.div`
  width: 130px;
  height: 125px;
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 0 ${({ color }) => color.shadow};
  cursor: pointer;
  border: 16px solid ${({ color }) => color.base};
  background-color: ${({ name }) => (name === 'default' ? '#122343' : 'white')};
  animation: 1s forwards
    ${({ isShadowAnimated }) => (isShadowAnimated ? shadow : '')};

  ${({ isShadowAnimated }) =>
    isShadowAnimated &&
    'box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.04),0 0 0 0px rgba(255, 255, 255, 0.03), 0 0 0 0px rgba(255, 255, 255, 0.02);'}

  &:active {
    transform: scale(0.9);
  }
  .box {
    box-shadow: 0 -4px 0 ${({ name }) => (name === 'default' ? '#122343' : '#babfd4')};
    flex: 1;
    align-self: stretch;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      animation: 1s forwards
        ${({ isShadowAnimated }) => (isShadowAnimated ? box : '')};
    }
  }
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 195px;
  }
`

const colors = {
  paper: {
    base: '#516ef4',
    shadow: '#2543c3',
  },
  rock: {
    base: '#de3a5a',
    shadow: '#980e31',
  },
  scissors: {
    base: '#eca81e',
    shadow: '#c76c14',
  },
  default: {
    base: '#15294d',
    shadow: '#15294d',
  },
}

export default function Token({
  name = 'default',
  onClick,
  isShadowAnimated = false,
}) {
  function handleClick() {
    if (onClick) {
      onClick(name)
    }
  }
  return (
    <StyledToken
      color={colors[name]}
      name={name}
      onClick={handleClick}
      isShadowAnimated={isShadowAnimated}
    >
      <div className="box">
        <img src={`./images/icon-${name}.svg`} alt="" />
      </div>
    </StyledToken>
  )
}
