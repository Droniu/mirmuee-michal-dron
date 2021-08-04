import styled, { css } from "styled-components"

interface BlueProps {
    blue?: boolean
}

export const ArrowIcon = styled.span`
    transform: rotate(-90deg)
`
export const ArrowWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer
`
export const HeaderTd = styled.div<BlueProps>`
    padding: 1rem;
    color: #474747;
    ${ props => (props.blue) && css`
        color: #00687F
  `}
`
export const TdWrapper = styled.td`
    padding: 0rem;
`