import { useState, useEffect } from 'react'
import openArrow from 'assets/ARROW OPEN.svg'
import closeArrow from 'assets/ARROW CLOSE.svg'
import WikiTable from 'components/WikiTable'
import { Planet, Film } from 'types'
import {
    StyledContainer,
    StyledSpan,
    StyledArrow,
    Header,
} from './WikiItem.styles'

interface WikiItemProps {
    id: number
    planets: Planet[]
    films: Film[]
}

export const WikiItem = ({ id, planets, films }: WikiItemProps) => {
    const [collapsed, setCollapsed] = useState(true)
    const [width, setWidth] = useState<number>(window.innerWidth)

    const toggleCollapse = () => {
        setCollapsed(!collapsed)
    }
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    let isMobile: boolean = width <= 768

    // From UI/UX perspective, I think toggleCollapse should be
    // on the whole header. Arrow icon is just too small.

    return (
        <StyledContainer>
            <Header collapsed={collapsed} onClick={toggleCollapse}>
                <StyledSpan>{films[id].title}</StyledSpan>
                <StyledArrow
                    src={collapsed ? openArrow : closeArrow}
                    alt="Show"
                />
            </Header>
            {!collapsed ? (
                <WikiTable
                    film={films[id].id}
                    planetsData={planets}
                    mobile={isMobile}
                />
            ) : null}
        </StyledContainer>
    )
}
export default WikiItem
