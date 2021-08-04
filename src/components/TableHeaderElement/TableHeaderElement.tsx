import {HeaderWrapper, HeaderTd, ArrowWrapper, ArrowIcon, TdWrapper} from './TableHeaderElement.styles'


interface TableHeaderElementProps {
    sortOnClick: () => void
    label: string
    blue?: boolean
}

export const TableHeaderElement = ({sortOnClick, label, blue}: TableHeaderElementProps) => {

    return <TdWrapper>
        <HeaderWrapper onClick={sortOnClick}>
            <HeaderTd blue={blue}>
                {label}
            </HeaderTd>
            <ArrowWrapper>
                <ArrowIcon>
                    {'>'}
                </ArrowIcon>
                <ArrowIcon>
                    {'<'}
                </ArrowIcon>
            </ArrowWrapper>
        </HeaderWrapper>
    </TdWrapper> 


}

export default TableHeaderElement;