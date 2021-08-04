import { useState } from 'react'
import { Planet } from 'types'
import {
    StyledTable,
    StyledTd,
    BlueTd,
    HeaderRow,
    MobileLabel,
} from './WikiTable.styles'
import TableHeaderElement from 'components/TableHeaderElement'

interface TableProps {
    film: string
    mobile: boolean
    planetsData: Planet[]
}

const sortAsc = (a: Planet, b: Planet, sortField: keyof Planet): number => {
    if (a[sortField] === null) {
        return -1
    }
    if (b[sortField] === null) {
        return 1
    }
    if (a[sortField]! < b[sortField]!) {
        return -1
    }
    if (a[sortField]! > b[sortField]!) {
        return 1
    }
    return 0
}

export const WikiTable = ({ planetsData, mobile, film }: TableProps) => {
    const [sortField, setSortField] = useState<keyof Planet | null>(null)
    const [isAsc, setAsc] = useState<boolean>(true)
    // let sortedPlanets = [...planetsData]

    if (sortField !== null) {
        planetsData.sort((a: Planet, b: Planet) => {
            return (isAsc ? 1 : -1) * sortAsc(a, b, sortField)
        })
    }

    const sortOnClick = (key: keyof Planet): void => {
        setSortField(key)
        setAsc((prev: boolean) => !prev)
    }

    if (!mobile) {
        return (
            <StyledTable>
                <thead>
                    <HeaderRow>
                        <TableHeaderElement
                            sortOnClick={() => sortOnClick('name')}
                            label="Planet name"
                            blue
                        />
                        <TableHeaderElement
                            sortOnClick={() => sortOnClick('rotationPeriod')}
                            label="Rotation Period"
                        />
                        <TableHeaderElement
                            sortOnClick={() => sortOnClick('orbitalPeriod')}
                            label="Orbital Period"
                        />
                        <TableHeaderElement
                            sortOnClick={() => sortOnClick('diameter')}
                            label="Diameter"
                        />
                        <TableHeaderElement
                            sortOnClick={() => sortOnClick('climates')}
                            label="Climate"
                        />
                        <TableHeaderElement
                            sortOnClick={() => sortOnClick('surfaceWater')}
                            label="Surface Water"
                        />
                        <TableHeaderElement
                            sortOnClick={() => sortOnClick('population')}
                            label="Population"
                        />
                    </HeaderRow>
                </thead>
                <tbody>
                    {planetsData.map((el, i) => {
                        let match = false
                        for (const f of el.filmConnection.films) {
                            if (f.id === film) {
                                match = true
                                break
                            }
                        }
                        return (
                            match && (
                                <tr key={el.id}>
                                    <BlueTd>{el.name}</BlueTd>
                                    <StyledTd>{el.rotationPeriod}</StyledTd>
                                    <StyledTd>{el.orbitalPeriod}</StyledTd>
                                    <StyledTd>{el.diameter}</StyledTd>
                                    <StyledTd>
                                        {el.climates.join(', ')}
                                    </StyledTd>
                                    <StyledTd>{el.surfaceWater}</StyledTd>
                                    <StyledTd>{el.population}</StyledTd>
                                </tr>
                            )
                        )
                    })}
                </tbody>
            </StyledTable>
        )
    } else {
        // On mobile, the view consists of many subtables.
        return (
            <>
                {planetsData.map((el) => {
                    let match = false
                    for (const f of el.filmConnection.films) {
                        if (f.id === film) {
                            match = true
                            break
                        }
                    }
                    return (
                        match && (
                            <StyledTable key={el.id}>
                                <tbody>
                                    <tr>
                                        <MobileLabel>Planet Name</MobileLabel>
                                        <BlueTd>{el.name}</BlueTd>
                                    </tr>
                                    <tr>
                                        <MobileLabel>
                                            Rotation period
                                        </MobileLabel>
                                        <StyledTd>{el.rotationPeriod}</StyledTd>
                                    </tr>
                                    <tr>
                                        <MobileLabel>
                                            Orbital period
                                        </MobileLabel>
                                        <StyledTd>{el.orbitalPeriod}</StyledTd>
                                    </tr>
                                    <tr>
                                        <MobileLabel>Diameter</MobileLabel>
                                        <StyledTd>{el.diameter}</StyledTd>
                                    </tr>
                                    <tr>
                                        <MobileLabel>Climate</MobileLabel>
                                        <StyledTd>
                                            {el.climates.join(', ')}
                                        </StyledTd>
                                    </tr>
                                    <tr>
                                        <MobileLabel>Surface water</MobileLabel>
                                        <StyledTd>{el.surfaceWater}</StyledTd>
                                    </tr>
                                    <tr>
                                        <MobileLabel>Population</MobileLabel>
                                        <StyledTd>{el.population}</StyledTd>
                                    </tr>
                                </tbody>
                            </StyledTable>
                        )
                    )
                })}
            </>
        )
    }
}

export default WikiTable
