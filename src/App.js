import React from 'react'
import './App.css'
import styled from 'styled-components'
import Header from './components/header'
import Wrapper from './components/wrapper'
import Table from './components/table'
import Rules from './components/rules'

const AppStyled = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');
  background-image: radial-gradient(
    circle at top,
    hsl(214, 47%, 23%) 20%,
    hsl(237, 49%, 15%) 100%
  );
  color: white;
  font-family: 'Barlow Semi Condensed', sans-serif;
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
  return (
    <AppStyled className="App">
      <Wrapper>
        <div className="app-content">
          <Header />
          <Table />
          <Rules />
        </div>
      </Wrapper>
    </AppStyled>
  )
}

export default App
