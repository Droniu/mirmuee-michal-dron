import {HeaderWrapper, BlueHeaderTd, ArrowWrapper, ArrowIcon} from './TableHeaderElement.styles'

export const TableHeaderElement = ({sortOnClick, children}: any) => {

    return <HeaderWrapper onClick={sortOnClick}>
         <BlueHeaderTd >
            {children}
        </BlueHeaderTd>
        <ArrowWrapper>
            <ArrowIcon>
                {'>'}
            </ArrowIcon>
            <ArrowIcon>
                {'<'}
            </ArrowIcon>
        </ArrowWrapper>
    </HeaderWrapper>

}

export default TableHeaderElement;