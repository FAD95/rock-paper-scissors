import React from 'react'
import styled from 'styled-components'
import Score from './score'

const HeaderStyled = styled.div`
  color: white;
  padding: 12px 12px 12px 23px;
  border-radius: 0.5em;
  border: 1px solid rgba(255, 255, 255, 0.29);
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: left;
  }
`

export default function Header() {
  return (
    <HeaderStyled>
      <h1>
        ROCK <br />
        PAPER <br />
        SCISSORS
      </h1>
      <Score />
    </HeaderStyled>
  )
}
