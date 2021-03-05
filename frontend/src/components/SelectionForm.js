import React, { useState } from 'react';
import styled from 'styled-components';

import DropDown from './DropDown';

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



const dummyData = [
    {id: 1, label: 'montreal'},
    {id: 2, label: 'toronto'},
    {id: 3, label: 'vancouver'},
    {id: 4, label: 'calgary'}
]

const SelectionForm = () => {
    const [ selectedIndex, setSelectedIndex ] = useState(1)

    const selection = dummyData.find(d => d.id === selectedIndex)
    const options = dummyData.filter(d => d.id !== selectedIndex)

    const makeSelection = (id) => {
        setSelectedIndex(id)
    }

    return (
        <Container>
            <FormWrapper>
                <Form>
                    <DropDown options={options} selection={selection.label} makeSelection={makeSelection}/>
                    
                </Form>

            </FormWrapper>
            
        </Container>
    )
};

export default SelectionForm;