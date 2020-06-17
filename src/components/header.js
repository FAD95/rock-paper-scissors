import React from 'react'
import styled from 'styled-components'
import Score from './score'
import Logo from '../images/logo.svg'

const HeaderStyled = styled.div`
  color: white;
  padding: 12px 12px 12px 23px;
  border-radius: 0.5em;
  border: 1px solid rgba(255, 255, 255, 0.29);
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 7em;
  }
  @media screen and (min-width: 768px) {
    padding: 24px;
    img {
      width: 10em;
    }
  }
`

export default function Header() {
  return (
    <HeaderStyled>
      <img src={Logo} alt="Logo" />
      <Score />
    </HeaderStyled>
  )
}
