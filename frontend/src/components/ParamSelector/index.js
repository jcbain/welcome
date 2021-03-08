import React from 'react';
import styled from 'styled-components';

import MiniDropDown from './MiniDropDown';


const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 30% 60% 10%;
`


const ParamSelector = ({...rest}) => {

    return (
        <Wrapper>
            <MiniDropDown {...rest} />
        </Wrapper>
    )
}

export default ParamSelector;