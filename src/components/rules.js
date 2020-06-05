import React, { useState } from 'react'
import Button from './button'
import styled from 'styled-components'

const RulesStyled = styled.div`
  text-align: center;
  &::before {
    content: '';
    display: ${({ visible }) => (visible ? 'block' : 'none')};
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .close-button {
    margin-top: 2em;
  }
  .rules-overlay {
    background-color: white;
    position: fixed;
    padding: 4em;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    h2 {
      color: #384262;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: -2px;
      margin-bottom: 1em;
    }
  }
  @media screen and (min-width: 768px) {
    .button {
      position: fixed;
      right: 2em;
      bottom: 2em;
    }
    .rules-overlay {
      width: 400px;
      margin: auto;
      border-radius: 10px;
      top: 0;
      bottom: initial;
      transform: translateY(50%);
      padding: 2em;

      h2 {
        align-self: flex-start;
        font-size: 32px;
        margin: 0 0 1.3em 0;
      }
    }
    .close-button {
      margin: 0;
      position: absolute;
      right: 2em;
      top: 2em;
      cursor: pointer;
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
    <RulesStyled visible={visible}>
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
      <Button className="button" onClick={handleToggleClick}>
        Rules
      </Button>
    </RulesStyled>
  )
}
