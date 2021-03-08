import React from 'react';
import styled from 'styled-components';

import DropDown from './DropDown';
import ParamSelector from './ParamSelector'
import useApplicationData from '../hooks/useApplicationData';
import useParamData from '../hooks/useParamData';

const Container = styled.div`
    width: 100%;
    background: black;
`;

const FormWrapper = styled.div`
    max-width: 400px;
    margin: 0px auto;
    background: white;
    padding: 20px;
`

const Form = styled.div`
    width: 100%;
    padding-top: 10px;
`
const ButtonWrapper = styled.div`
    width: 100%;
    margin: 10px auto;
    display: grid;
    position: relative;
    z-index: 90;
`
const Button = styled.button`
    background: linear-gradient(to left, ${({ theme }) => theme.sendButtonGradient1}, ${({ theme }) => theme.sendButtonGradient2});
    color: white;
    font-family: 'Lato', sans-serif;
    font-weight: 800;
    font-size: 1.5em;
    border-radius: 5px;
    border: none;
    padding: 5px 10px;
`

const SelectionForm = () => {
    const { loaded, selectedCity, setSelectedIndex, cityOptions, sendQuery } = useApplicationData();
    const { paramData } = useParamData();

    const paramSelectors = paramData.map( ( p, i ) => {
        return (
            <ParamSelector key={i} {...p}/>
        )
    })
    console.log(paramData)

    const makeSelection = (id) => {
        setSelectedIndex(id)
    }

    return (
        <Container>
            <FormWrapper>
                {loaded && 
                    <Form>
                        <DropDown options={cityOptions} selection={selectedCity.city} makeSelection={makeSelection}/>
                        { paramSelectors }
                        <ButtonWrapper>

                            <Button onClick={sendQuery}>Send</Button>
                        </ButtonWrapper>
                        
                    </Form>
                }

            </FormWrapper>
            
        </Container>
    )
};

export default SelectionForm;