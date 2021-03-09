import React, { useState } from 'react';
import styled from 'styled-components';
import { Copy } from '@styled-icons/boxicons-regular';


const Wrapper = styled.div`
    font-family: 'Lato', sans-serif;
    position: relative;
    width: 100%;
    overflow: clip;
    border: 1px solid ${({ theme }) => theme.endpointBorderColor};
    border-radius: 5px;
    background: ${({ theme }) => theme.endpointBackgroundColor};
    height: 150px;
    &.extended {
        height: 100%;
    }
`
const Title = styled.p`
    font-size: 0.75em;
    font-weight: 800;
    color: ${({ theme }) => theme.endpointBorderColor};
    position: absolute;
    top: -2px;
    left: 10px;
`
const CopyDiv = styled.div`
    position: absolute;
    top: 5px;
    right: 10px;
    width: 25px;
    height: 25px;
`

const StyledCopy = styled(Copy)`
    color: ${({ theme }) => theme.endpointBorderColor};
`

const EndpointDiv = styled.div`
    padding: 20px 10px;

`

const EndpointText = styled.p`
    color: ${({ theme }) => theme.endpointBorderColor};
    font-size: 0.9em;
    white-space: pre-wrap;      /* CSS3 */   
    white-space: -moz-pre-wrap; /* Firefox */    
    white-space: -pre-wrap;     /* Opera <7 */   
    white-space: -o-pre-wrap;   /* Opera 7 */    
    word-wrap: break-word;      /* IE */

`

const Fader = styled.div`
    position: absolute;
    bottom: 0px;
    width: 100%;
    background: linear-gradient(to bottom, ${({ theme }) => theme.endpointFaderBackgroundColor2}, ${({ theme }) => theme.endpointFaderBackgroundColor});
    height: 100px;
    &.no-fade{
        background: ${({ theme }) => theme.endpointFaderBackgroundColor3}
    }
`

const ExpandButton = styled.button`
    color: ${({ theme }) => theme.endpointBorderColor};
    font-weight: 400;
    border: 1px solid ${({ theme }) => theme.endpointBorderColor};
    border-bottom: 2px solid ${({ theme }) => theme.endpointBorderColor};
    /* margin-left: 90%; */
    background: ${({ theme }) => theme.endpointFaderBackgroundButton};
    position: absolute;
    right: 10px;
    bottom: 10px;
    border-radius: 2px;
    padding: 2px 4px;
`

const EndpointDisplay = () => {
    const [ extended, setExtended ] = useState(false);
    const classLabel = extended ? 'extended' : ''
    const faderClassLabel = extended ? 'no-fade': ''


    return (
        <Wrapper className={classLabel}>
            <Title>your endpoint</Title>
            <CopyDiv>
                <StyledCopy />
            </CopyDiv>
            <EndpointDiv>
                <EndpointText>
                https://api.twitter.com/2/tweets/search/all?query=from%3Atwitterdev%20endpoints%20new&max_results=500&start_time=2020-01-01T00%3A00%3A00Z&end_time=2020-03-31T11%3A59%3A59Z&tweet.fields=created_at,lang,conversation_id
                </EndpointText>

            </EndpointDiv>
            <Fader className={faderClassLabel}>
                <ExpandButton onClick={() => setExtended(prev => !prev)}>{extended ? 'less... ': 'more...'}</ExpandButton>
            </Fader>
        </Wrapper>
    )

}

export default EndpointDisplay;