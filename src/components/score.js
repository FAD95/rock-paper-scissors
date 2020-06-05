import React, { useContext } from 'react'
import styled from 'styled-components'
import { ScoreContext } from '../App'

const ScoreStyled = styled.div`
  background: white;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  width: 80px;
  small {
    color: #2a45c2;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1px;
  }
  p {
    color: #565468;
    font-size: 40px;
    margin: 0;
    font-weight: 700;
    letter-spacing: -6px;
    position: relative;
    left: -3px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px 20px;
    small {
      font-size: 16px;
    }
    p {
      font-size: 60px;
    }
  }
`

export default function Score() {
  const { score } = useContext(ScoreContext)
  return (
    <ScoreStyled>
      <small>Score</small>
      <p>{score}</p>
    </ScoreStyled>
  )
}
