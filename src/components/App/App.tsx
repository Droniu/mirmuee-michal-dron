import React from 'react';
import logo from 'assets/LOGO.svg'
import { Film, Planet } from 'types'
import localJSON from 'assets/data.json'
import WikiItem from 'components/WikiItem'
import { GlobalStyling, StyledContainer, StyledLogo } from './App.styles'

function App() {
  
  const { films, planets }: {films: Film[]; planets: Planet[]}= localJSON.data;
  
  return (
    <>
      <GlobalStyling />
      <StyledContainer>
        <StyledLogo src={logo} alt="logo"/>
        {films.map((el, index) => (
          <WikiItem key={el.id} id={index} planets={planets} films={films} />
        ))}
      </StyledContainer>
    </>
  )
}

export default App;
