import React from 'react'
import styled from 'styled-components'

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

export default function Token({ name = 'default', onClick }) {
  function handleClick() {
    onClick(name)
  }
  return (
    <StyledToken color={colors[name]} name={name} onClick={handleClick}>
      <div className="box">
        <img src={`./images/icon-${name}.svg`} alt="" />
      </div>
    </StyledToken>
  )
}
