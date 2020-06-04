import React, { useState } from 'react'
import Button from './button'
import styled from 'styled-components'

const RulesStyled = styled.div`
  text-align: center;
  .close-button {
    margin-top: 2em;
  }
  .rules-overlay {
    background-color: white;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 4em;
    h2 {
      color: #384262;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: -2px;
      margin-bottom: 1em;
    }
  }
`

export default function Rules() {
  const [visible, setVisible] = useState(false)
  function handleToggleClick() {
    setVisible(!visible)
    console.log('clicked')
  }
  return (
    <RulesStyled>
      {visible && (
        <div className="rules-overlay">
          <h2>Rules</h2>
          <img src="./images/image-rules.svg" alt="Game Rules" />
          <img
            className="close-button"
            onClick={handleToggleClick}
            src="./images/icon-close.svg"
            alt="Close "
          />
        </div>
      )}
      <Button onClick={handleToggleClick} />
    </RulesStyled>
  )
}
