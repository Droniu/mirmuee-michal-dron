import React, {useState} from 'react';
import localJSON from 'assets/data.json'
import styled, {css} from 'styled-components'
import openArrow from 'assets/ARROW OPEN.svg'
import closeArrow from 'assets/ARROW CLOSE.svg'
import WikiTable from 'components/WikiTable'

interface WikiItemProps {
    id: number,
    data: typeof localJSON,
}

interface CollapsedProp {
    collapsed: boolean
}

const StyledContainer = styled.div`

    display: flex;
    margin: 0.5em;
    justify-content: space-between;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    background-color: #fff;
    z-index: 2;
    border-radius: 4px;
    box-shadow: 0px 2px 1px rgba(196, 196, 196, 0.2);

`
const StyledSpan = styled.span`
    color: #00687f;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: bold;

`
const StyledArrow = styled.img`
    user-select: none;
`
const Header = styled.div<CollapsedProp>`
    padding: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    ${ props => !(props.collapsed) && css`
        box-shadow: 0px 4px 12px rgba(224, 230, 238, 0.5);
  `}
`


export const WikiItem = (props: WikiItemProps) => {

    const [collapsed, setCollapsed] = useState(true)

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
      };

      // From UI/UX perspective, I think toggleCollapse should be
      // on the whole header. Arrow icon is just too small.
      
    return <StyledContainer>
        <Header collapsed={collapsed} onClick={toggleCollapse}>
            <StyledSpan>{props.data.data.films[props.id].title}</StyledSpan>
            <StyledArrow src={collapsed ? openArrow : closeArrow} alt="Show"/>
        </Header>

        {
            !collapsed && props.data.data.planets.map((el, i) => (
                <WikiTable key={el.id} index={i}
                film={props.data.data.films[props.id].id}
                planetsData={props.data.data.planets} />
            ))
        }
    </StyledContainer>
}
export default WikiItem;