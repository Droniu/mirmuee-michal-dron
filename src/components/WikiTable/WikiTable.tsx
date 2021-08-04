import React from 'react';
import styled, {css} from 'styled-components';
import localJSON from 'assets/data.json'

interface TableProps {
    index: number,
    film: string,
    planetsData: typeof localJSON.data.planets
}
interface IndexProps {
    index: number,
}

const StyledTable = styled.table<IndexProps>`
    padding: 1em;
    border-collapse: collapse;
    ${ props => (props.index % 2 === 1) && css`
        background-color: rgba(229, 229, 229, 0.5);
  `}
`

const Label = styled.td`
    padding: 1rem;
    width: 40%;
`

const StyledTd = styled.td`
    padding: 1rem;
    color: #474747;
`

const BlueTd = styled.td`
    padding: 1rem;
    color: #00687F;
`

export const WikiTable = (props: TableProps) => {
    return <StyledTable index={props.index}>
        <tbody>
        <tr>
            <Label>
                Planet Name
            </Label>
            <BlueTd>
                {props.planetsData[props.index].name}
            </BlueTd>
        </tr>
        <tr>
            <Label>
                Rotation period
            </Label>
            <StyledTd>
                {props.planetsData[props.index].rotationPeriod}
            </StyledTd>
        </tr>
        <tr>
            <Label>
                Orbital period
            </Label>
            <StyledTd>
                {props.planetsData[props.index].orbitalPeriod}
            </StyledTd>
        </tr>
        <tr>
            <Label>
                Diameter
            </Label>
            <StyledTd>
                {props.planetsData[props.index].diameter}
            </StyledTd>
        </tr>
        <tr>
            <Label>
                Climate
            </Label>
            <StyledTd>
                {props.planetsData[props.index].climates.join(", ")}
            </StyledTd>
        </tr>
        <tr>
            <Label>
                Surface water
            </Label>
            <StyledTd>
                {props.planetsData[props.index].surfaceWater}
            </StyledTd>
        </tr>
        <tr>
            <Label>
                Population
            </Label>
            <StyledTd>
                {props.planetsData[props.index].population}
            </StyledTd>
        </tr>
        </tbody>
    </StyledTable>
}

export default WikiTable;