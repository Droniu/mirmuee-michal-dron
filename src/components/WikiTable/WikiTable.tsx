import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import localJSON from 'assets/data.json'
import { useEffect } from 'react';

interface TableProps {
    film: string,
    mobile: boolean,
    planetsData: typeof localJSON.data.planets
}
interface IndexProps {
    index: number,
}

const StyledTable = styled.table<IndexProps>`
    @media screen and (min-width: 768px) {
        background-color: #fff;

    }

    border-collapse: collapse;
    padding: 1em;
    &:nth-child(odd) {
        background-color: rgba(229, 229, 229, 0.5);
    }
`

const MobileLabel = styled.td`
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
    
    
    if (!props.mobile) {
        return <StyledTable index={0}> 
            <thead>
                <tr>
                    <BlueTd>
                        Planet Name
                    </BlueTd>

                </tr>
            </thead>
        </StyledTable>
    } else {
        // On mobile, the view consists of many subtables.
        return <> 
        {
            props.planetsData.map((el, i) => {
                let match = false
                for (const film of el.filmConnection.films) {
                    if (film.id === props.film) {
                        match = true
                        break
                    }
                }
                return match && <StyledTable key={el.id} index={i}>
                    <tbody>
        <tr>
            <MobileLabel>
                Planet Name
            </MobileLabel>
            <BlueTd>
                {el.name}
            </BlueTd>
        </tr>
        <tr>
            <MobileLabel>
                Rotation period
            </MobileLabel>
            <StyledTd>
                {el.rotationPeriod}
            </StyledTd>
        </tr>
        <tr>
            <MobileLabel>
                Orbital period
            </MobileLabel>
            <StyledTd>
                {el.orbitalPeriod}
            </StyledTd>
        </tr>
        <tr>
            <MobileLabel>
                Diameter
            </MobileLabel>
            <StyledTd>
                {el.diameter}
            </StyledTd>
        </tr>
        <tr>
            <MobileLabel>
                Climate
            </MobileLabel>
            <StyledTd>
                {el.climates.join(", ")}
            </StyledTd>
        </tr>
        <tr>
            <MobileLabel>
                Surface water
            </MobileLabel>
            <StyledTd>
                {el.surfaceWater}
            </StyledTd>
        </tr>
        <tr>
            <MobileLabel>
                Population
            </MobileLabel>
            <StyledTd>
                {el.population}
            </StyledTd>
        </tr>
        </tbody>
            </StyledTable>
        })
        }</>    
    }
}

export default WikiTable;