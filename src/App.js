import React, { createContext, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './components/header'
import Wrapper from './components/wrapper'
import Table from './components/table'
import Rules from './components/rules'

export const ScoreContext = createContext()

const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Barlow Semi Condensed', sans-serif;
    margin: 0;
    padding: 0;
  }
`
const AppStyled = styled.main`
  background-image: radial-gradient(
    circle at top,
    hsl(214, 47%, 23%) 20%,
    hsl(237, 49%, 15%) 100%
  );
  color: white;
  .app-content {
    padding: 2em;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

function App() {
  const [score, setScore] = useState(0)
  return (
    <ScoreContext.Provider
      value={{
        score,
        setScore,
      }}
    >
      <GlobalStyles />
      <AppStyled className="App">
        <Wrapper>
          <div className="app-content">
            <Header />
            <Table />
            <Rules />
          </div>
        </Wrapper>
      </AppStyled>
    </ScoreContext.Provider>
  )
}

export default App
