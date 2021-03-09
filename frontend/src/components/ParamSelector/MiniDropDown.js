import React, { useState } from 'react';
import styled from 'styled-components';
import { DownArrow, UpArrow } from '@styled-icons/boxicons-regular';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    margin: 10px auto;
    font-family: 'Lato', sans-serif;

`
const Header = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 90% 10%;
    align-items: center;
    height: 30px;
    padding-right: 10px;
    height: 30px;
`

const Selection = styled.p`
    width: 100%;
    font-size: 0.75em;
    margin-block-start: 0px;
    margin-block-end: 0px;
    line-height: 30px;
    color: ${({ theme }) => theme.plusButtonColor};
    font-weight: 800;

`

const Arrow = styled.div`
    width: 100%;
    cursor: pointer;
`

const StyledUpArrow = styled(UpArrow)`
    color: ${({ theme }) => theme.dropDownArrowColor};
`

const List = styled.div`
    position: absolute;
    width: 100%;
    z-index: 100;
    background: ${({ theme }) => theme.dropDownItemsColors};
    border: 2px solid ${({ theme }) => theme.dropDownItemsBorder};
    border-radius: 2px;
`

const ListItem = styled.div`
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    border-bottom: 0px solid white;
    border-top: 0px solid white;
    &:hover {
        background: linear-gradient(to left, ${({ theme }) => theme.dropDownHighLightGradient1}, ${({ theme }) => theme.dropDownHighLightGradient2});
        color:  white;
    }
`

const Option = styled.p`
    font-size: 0.75em;
    margin-block-start: 0px;
    margin-block-end: 0px;
    line-height: 30px;
`

const MiniDropDown = ({selection, options, handleParam}) => {
    const [ open, setOpen ] = useState(false);

    const chooseSelection = (id) => {
        handleParam(id)
        setOpen(false)
    }

    const optionItems = options.map( (o, i) => {
        return (
            <ListItem key={o.id} onClick={() => chooseSelection(o.id)}>
                <Option>{o.label}</Option>
            </ListItem>
        )
    } )

    return (
        <Wrapper>
        <Header>
            <Selection>{selection.label}</Selection>
            <Arrow onClick={() => setOpen(prev => !prev)}>{open ? <StyledUpArrow /> : <DownArrow /> }</Arrow>
        </Header>
        {open && <List>
                {optionItems}
            </List>
        }

    </Wrapper>

    )
}

export default MiniDropDown;