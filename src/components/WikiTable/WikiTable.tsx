import React from 'react';
import styled, {css} from 'styled-components';
import localJSON from 'assets/data.json'

interface TableProps {
    index: number,
    film: string,
    planetsData: typeof localJSON.data.planets
}

const StyledTable = styled.table`
    margin: 1rem;
    border-collapse: collapse;

`

const BlueTd = styled.td`
    color: #00687F;
`

export const WikiTable = (props: TableProps) => {
    return <StyledTable>
        <tr>
            <td>
                Planet Name
            </td>
            <BlueTd>
                {props.planetsData[props.index].name}
            </BlueTd>
        </tr>
    </StyledTable>
}

export default WikiTable;