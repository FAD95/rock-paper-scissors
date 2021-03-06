import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Token from './token'
import { WhiteButton } from './button'
import { ScoreContext } from '../App'
import Triangle from '../images/bg-triangle.svg'

const TableStyled = styled.div`
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  .container {
    display: grid;
    justify-content: ${({ playing }) => (!playing ? 'center' : 'space-around')};
    grid-gap: 50px;
    grid-template-areas:
      'paper scissors'
      'rock rock';
    ${({ playing }) =>
      !playing && `background-image: url(${Triangle});`}
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
    letter-spacing: -2px;
  }
  .results {
    text-align: center;
    h2 {
      text-transform: uppercase;
      font-size: 2.5em;
      letter-spacing: -1px;
      margin: 10px;
    }
  }
  @media screen and (min-width: 768px) {
    .container {
      ${({ playing }) => playing && 'grid-template-columns: 1fr 250px 1fr;'};
      grid-gap: 140px;
      ${({ playing }) => playing && 'grid-gap: 40px;'};
      background-size: 360px;
    }
    .results {
      grid-column: 2/3;
      grid-row: 1;
    }
    .in-game {
      font-size: 1.2em;
      display: flex;
      flex-direction: column;
      > div {
        order: 2;
      }
      > p {
        order: 1;
      }
    }
  }
  @media screen and (min-width: 912px) {
    .container {
      grid-gap: 140px;
    }
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
  const { score, setScore } = useContext(ScoreContext)
  const [playing, setPlaying] = useState(false)
  const [pick, setPick] = useState('')
  const [housePick, setHousePick] = useState('default')
  const [result, setResult] = useState('')

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }
  function launchHousePick() {
    return new Promise((resolve, reject) => {
      let pick
      let interval = setInterval(() => {
        pick = elements[getRandomInt(0, 3)]
        setHousePick(pick)
      }, 75)
      setTimeout(() => {
        clearInterval(interval)
        resolve(pick)
      }, 2000)
    })
  }
  async function onClick(name) {
    setPick(name)
    setPlaying(true)
    const house = await launchHousePick().then()
    const randomResult = victory(name, house)
    setResult(randomResult)

    if (randomResult === 'win') {
      setScore(score + 1)
    }
    if (randomResult === 'lose') {
      setScore(score - 1)
    }
  }
  function victory(pick, house) {
    console.log(pick)

    if (pick === house) {
      return 'draw'
    } else {
      switch (pick) {
        case 'paper':
          if (house === 'rock') {
            return 'win'
          } else return 'lose'
        case 'rock':
          if (house === 'scissors') {
            return 'win'
          } else return 'lose'
        case 'scissors':
          if (house === 'paper') {
            return 'win'
          } else return 'lose'
        default:
          break
      }
    }
  }

  function handlePlayAgainClick() {
    setPlaying(false)
    setResult('')
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
              <Token name={pick} isShadowAnimated={result === 'win'} />
              <p>You Picked</p>
            </div>
            <div className="in-game">
              <Token name={housePick} isShadowAnimated={result === 'lose'} />
              <p>The house Picked</p>
            </div>
            {window.screen.width > 768 && (
              <div className="results">
                {result && (
                  <>
                    <h2> YOU {result}</h2>
                    <WhiteButton onClick={handlePlayAgainClick}>
                      Play Again
                    </WhiteButton>
                  </>
                )}
              </div>
            )}
          </div>
          {window.screen.width < 768 && (
            <div className="results">
              {result && (
                <>
                  <h2> YOU {result}</h2>
                  <WhiteButton onClick={handlePlayAgainClick}>
                    Play Again
                  </WhiteButton>
                </>
              )}
            </div>
          )}
        </>
      )}
    </TableStyled>
  )
}
