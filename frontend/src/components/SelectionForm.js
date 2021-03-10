import React from 'react';
import styled from 'styled-components';

import DropDown from './DropDown';
import ParamSelector from './ParamSelector';
import Dates from './Dates';
import EndpointDisplay from './EndpointDisplay';
import useApplicationData from '../hooks/useApplicationData';
import useParamData from '../hooks/useParamData';
import useSampleEndpoint from '../hooks/useSampleEndpoint';

const Container = styled.div`
    width: 100%;
    background: white;
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
    margin-top: ${({ theme }) => theme.sectionSpacer};
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
    const { paramData, modifyParam, addParam, removeParam, modifyValue } = useParamData();
    const { loaded, selectedCity, setSelectedIndex, cityOptions, sendQuery, dates, handleDates, defaultDates } = useApplicationData(paramData);

    const endpoint = useSampleEndpoint(paramData, selectedCity, dates)
    const paramSelectors = paramData.map( ( p, i ) => {
        const handleParam = (id) => {
            modifyParam(i, id)
        } 

        const handleRemove = () => {
            removeParam(i)
        }

        const handleValueChange = (e) => {
            modifyValue(i, e)
        }
        return (
            <ParamSelector key={i} 
                addParam={addParam} 
                handleParam={handleParam} 
                isLast={i === paramData.length - 1} 
                handleRemove={handleRemove} 
                handleValueChange={handleValueChange} 
                {...p}/>
        )
    })

    const makeSelection = (id) => {
        setSelectedIndex(id)
    }

    return (
        <Container>
            <FormWrapper>
                {loaded && 
                    <Form>
                        <DropDown options={cityOptions} selection={selectedCity.city} makeSelection={makeSelection}/>
                        <Dates handleDates={handleDates} defaultDates={defaultDates}/>
                        { paramSelectors }
                        <EndpointDisplay endpoint={endpoint}/>
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