import React from 'react';
import styled from 'styled-components';
import { Plus } from '@styled-icons/boxicons-regular';


import MiniDropDown from './MiniDropDown';

const Wrapper = styled.div`
    width: 100%;
    margin: 10px auto;
`

const ContentWrapper = styled.div`
    display: grid;
    column-gap: 5%;
    grid-template-columns: 30% 45% 15%;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;

`

const ButtonContainer = styled.div`
    position: relative;
    width: 100%;

`

const PlusDiv = styled.button`
    float: right;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.plusButtonColor};
    height: 25px;
    width: 25px;
    border-radius: 5px;
    margin-right: auto;
`;


const SmallPlus = styled(Plus)`
    width: 15px;
    color: white;
`

const Input = styled.input`
    width: 100%;
    height: 30px;
    padding-left: 5px;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
`


const ParamSelector = ({...rest}) => {

    return (
        <Wrapper>
            <ContentWrapper>
                <MiniDropDown {...rest} />
                <Input align="bottom" type="text" placeholder={"your dank query"}></Input>
                <ButtonContainer>

                    <PlusDiv>
                        <SmallPlus />
                    </PlusDiv>
                </ButtonContainer>
            </ContentWrapper>
        </Wrapper>
    )
}

export default ParamSelector;