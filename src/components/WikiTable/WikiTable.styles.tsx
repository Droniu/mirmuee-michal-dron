import styled from 'styled-components'

export const StyledTable = styled.table`
    @media screen and (min-width: 768px) {
        background-color: #fff;
    }

    border-collapse: collapse;
    padding: 1em;
    &:nth-child(odd) {
        background-color: rgba(229, 229, 229, 0.5);
    }
`

export const MobileLabel = styled.td`
    padding: 1rem;
    width: 40%;
`

export const StyledTd = styled.td`
    padding: 1rem;
    color: #474747;
`

export const BlueTd = styled.td`
    padding: 1rem;
    color: #00687F;
`

export const HeaderTd = styled.td`
    padding: 1rem;
`

export const HeaderRow = styled.tr`
    border-bottom: 1px solid #c4c4c4;
`
