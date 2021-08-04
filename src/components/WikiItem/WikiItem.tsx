import React from 'react';
import localJSON from 'assets/data.json'
import styled from 'styled-components'
import closedArrow from 'assets/ARROW OPEN.svg'

interface WikiItemProps {
    id: number,
    data: typeof localJSON,
}

const StyledContainer = styled.div`
    margin: 0.5rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
`
const StyledSpan = styled.span`
    color: #00687f;
    font-family: Barlow;
    font-style: normal;
    font-weight: bold;

`

export const WikiItem = (props: WikiItemProps) => {
    return <StyledContainer>
        <StyledSpan>{props.data.data.films[props.id].title}</StyledSpan>
        <img src={closedArrow} alt="Show"></img>
    </StyledContainer>
}
export default WikiItem;