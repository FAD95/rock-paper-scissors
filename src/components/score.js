import React from 'react'
import styled from 'styled-components'

const ScoreStyled = styled.div`
    background: white;
    text-align: center;
    padding: 10px 0;
    border-radius: 8px;
    width: 80px;
    small{
        color: #2a45c2;
        text-transform: uppercase;
        font-size: 10px;
        letter-spacing: 1px
    }
    p{
        color: #565468;
        font-size: 40px;
        margin: 0;
        font-weight: 700;
        letter-spacing: -6px;
        position: relative;
        left: -3px
    }
`

export default function Score() {
  return (
    <ScoreStyled>
      <small>Score</small>
      <p>12</p>
    </ScoreStyled>
  )
}
