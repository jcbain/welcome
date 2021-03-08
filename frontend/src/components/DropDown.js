import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    width: 90%;
    margin: 10px auto;
    font-family: 'Lato', sans-serif;

`
const Header = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 95% 5%;
    align-items: center;
    border: 2px solid black;
    height: 40px;
    width: calc(100% - 10px);
    padding-left: 5px;
    padding-right: 5px;
    height: 40px;
`

const Title = styled.div`
    position: absolute;
    top: -9px;
    left: 5px;
    background: white;
    font-size: 12px;
    padding-right: 1px;
`

const Selection = styled.p`
    width: 100%;

`

const Arrow = styled.div`
    width: 100%;
    cursor: pointer;

`

const List = styled.div`
    position: absolute;
    width: 100%;
    z-index: 100;
    background: white;
`

const ListItem = styled.div`
    height: 40px;
    width: calc(100% - 10px);
    padding-left: 5px;
    padding-right: 5px;
    &:hover {
        background: lightgray;
    }
`

const Option = styled.p`

`

const DropDown = ({ options, selection, makeSelection }) => {
    const [ open, setOpen ] = useState(false);

    const chooseSelection = (id) => {
        makeSelection(id)
        setOpen(false)
    }

    const optionItems = options.map( (o, i) => {
        return (
            <ListItem key={o.id} onClick={() => chooseSelection(o.id)}>
                <Option>{o.city}</Option>
            </ListItem>
        )
    } )


    return (
        <Wrapper>
            <Header>
                <Title>location</Title>
                <Selection>{selection}</Selection>
                <Arrow onClick={() => setOpen(prev => !prev)}>{open ? '-' : '+'}</Arrow>
            </Header>
            {open && <List>
                    {optionItems}
                </List>
            }

        </Wrapper>
    )
}

export default DropDown;