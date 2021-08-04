import styled, { css } from 'styled-components'

interface CollapsedProp {
    collapsed: boolean
}

export const StyledContainer = styled.div`
    display: flex;
    margin: 0.5em;
    justify-content: space-between;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    background-color: #fff;
    z-index: 12;
    border-radius: 4px;
    box-shadow: 0px 2px 1px rgba(196, 196, 196, 0.2);
`
export const StyledSpan = styled.span`
    color: #00687f;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: bold;
`
export const StyledArrow = styled.img`
    user-select: none;
`
export const Header = styled.div<CollapsedProp>`
    cursor: pointer;
    padding: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    ${(props) =>
        !props.collapsed &&
        css`
            box-shadow: 0px 4px 12px rgba(224, 230, 238, 0.5);
        `}
`
