import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyling = createGlobalStyle`
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

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    max-width: 1024px;
    background-color: #e0e6ee;
    border-radius: 10px;
    padding: 2%;
    margin-top: 4%;
`
export const StyledLogo = styled.img`
    max-width: 80%;
    margin-bottom: 0.5rem;
`
