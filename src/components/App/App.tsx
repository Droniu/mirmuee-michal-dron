import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import logo from 'assets/LOGO.svg'
import localJSON from 'assets/data.json'
import WikiItem from 'components/WikiItem';

const GlobalStyling = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    display: flex;
    background-color: #fff;
    width: 100%;
    margin: 0;
    font-family: 'Barlow';

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  background-color: #e0e6ee;
  border-radius: 10px;
  padding: 2%;
  margin-top: 4%;
`
const StyledLogo = styled.img`
  max-width: 80%;
  margin-bottom: 0.5rem;
`


function App() {
  return <>
    <GlobalStyling />
    <StyledContainer>
      <StyledLogo src={logo} alt="logo"/>
      {localJSON.data.films.map((el, index) => <WikiItem id={index} data={localJSON}/>)}
    </StyledContainer>

  </>
}

export default App;
