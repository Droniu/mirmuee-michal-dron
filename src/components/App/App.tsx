import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import logo from 'assets/LOGO.svg'

const GlobalStyling = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    display: flex;
    background-color: #fff;
    width: 100%;

  }
  /* I'm not sure if this is the proper way to handle the
  root element styling, but I couldn't find good solution */
  #root {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #fff;

  }
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 66%;
  background-color: #e0e6ee;
  border-radius: 10px;
  padding: 5%;
  margin-top: 4%;
`
const StyledLogo = styled.img`
  max-width: 80%;
`

function App() {
  return <>
    <GlobalStyling />
    <StyledContainer>
      <StyledLogo src={logo} alt="logo"/>

    </StyledContainer>

  </>
}

export default App;
