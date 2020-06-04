import React, { useState } from 'react'
import styled from 'styled-components'
import Token from './token'

const TableStyled = styled.div`
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  .container {
    display: grid;
    justify-content: center;
    grid-gap: 50px;
    grid-template-areas:
      'paper scissors'
      'rock rock';
    background-image: url(${({ playing }) =>
      !playing ? 'images/bg-triangle.svg' : null});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 225px;
    text-align: center;
    align-items: center;
  }

  .in-game {
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 2px;
  }
  .try-again {
    display: flex;
    align-self: center;
  }
`
const Rock = styled.div`
  grid-area: rock;
  display: flex;
  justify-content: center;
`
const Scissors = styled.div`
  grid-area: scissors;
`
const Paper = styled.div`
  grid-area: paper;
`
const elements = ['paper', 'scissors', 'rock']

export default function Table() {
  const [playing, setPlaying] = useState(false)
  const [pick, setPick] = useState('')

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }
  function onClick(name) {
    console.log('La casa eligio', elements[getRandomInt(0, 3)])
    setPlaying(true)
    setPick(name)
  }
  return (
    <TableStyled playing={playing}>
      {!playing ? (
        <div className="container">
          <Paper>
            <Token name="paper" onClick={onClick} />
          </Paper>
          <Scissors>
            <Token name="scissors" onClick={onClick} />
          </Scissors>
          <Rock>
            <Token name="rock" onClick={onClick} />
          </Rock>
        </div>
      ) : (
        <>
          <div className="container">
            <div className="in-game">
              <Token name={pick} />
              <p>You Picked</p>
            </div>
            <div className="in-game">
              <Token />
              <p>The house Picked</p>
            </div>
          </div>

          <div className="try-again">
            <h3>tryagain</h3>
          </div>
        </>
      )}
    </TableStyled>
  )
}
