import React from 'react';
import styled from 'styled-components';

import DropDown from './DropDown';
import useApplicationData from '../hooks/useApplicationData'

const Container = styled.div`
    width: 100%;
    background: black;
`;

const FormWrapper = styled.div`
    max-width: 400px;
    margin: 0px auto;
    background: white;
`

const Form = styled.div`
    width: 100%;
    padding-top: 10px;
`
const ButtonWrapper = styled.div`
    width: 90%;
    margin: 10px auto;
    display: grid;
    position: relative;
    z-index: 90;
`
const Button = styled.button`
    background: black;
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

    const makeSelection = (id) => {
        setSelectedIndex(id)
    }

    return (
        <Container>
            <FormWrapper>
                <Form>
                    {loaded && <DropDown options={cityOptions} selection={selectedCity.city} makeSelection={makeSelection}/>}
                <ButtonWrapper>

                    {loaded && <Button onClick={sendQuery}>Send</Button>}
                </ButtonWrapper>
                    
                </Form>

            </FormWrapper>
            
        </Container>
    )
};

export default SelectionForm;