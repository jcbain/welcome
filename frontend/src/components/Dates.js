import React from 'react';
import styled from 'styled-components';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const Wrapper = styled.div`
    font-family: 'Lato', sans-serif;
    width: 100%;
    margin-top: ${({ theme }) => theme.sectionSpacer};
    margin-left: auto;
    margin-right: auto;
`

const StyledRange = styled(DatePicker.RangePicker)`
    width: 100%;
    border:none;
`


const Dates = ({handleDates, defaultDates}) => {


    return (
        <Wrapper>
            <StyledRange defaultValue={defaultDates} onChange={handleDates}/>
        </Wrapper>
    )
}

export default Dates;