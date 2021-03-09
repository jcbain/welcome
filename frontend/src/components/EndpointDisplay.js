import React, { useState, useEffect } from 'react';
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
    height: 125px;
    margin-top: ${({ theme }) => theme.sectionSpacer};
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
    z-index: 80;
    &.no-fade{
        background: ${({ theme }) => theme.endpointFaderBackgroundColor3}
    }
`

const ExpandButton = styled.button`
    color: ${({ theme }) => theme.endpointBorderColor};
    font-weight: 700;
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

const Notification = styled.div`
    font-size: .8em;
    position: absolute;
    top: 20%;
    left: calc(50% - 95px);
    width: 150px;
    margin: auto;    
    background: white;
    color: ${({ theme }) => theme.notifyBoxColor};
    padding: 10px 20px;
    border: 2px solid ${({ theme }) => theme.notifyBoxColor};
    text-align: center;
    border-radius: 5px;
    z-index: 90;
    opacity: 0;
    transition: opacity 0.25s ease-out;
    &.notify {
        opacity: 1;
    }
`


const EndpointDisplay = ({endpoint}) => {
    const [ extended, setExtended ] = useState(false);
    const [ copyLabel, setCopyLabel ] = useState('')
    const classLabel = extended ? 'extended' : ''
    const faderClassLabel = extended ? 'no-fade': ''

    useEffect(() => {
        if(copyLabel === '') return;
        const timer = setTimeout(() => {
            setCopyLabel('')
        }, 1500)
        return () => clearTimeout(timer)
    }, [copyLabel])

    const handleCopy = () => {
        setCopyLabel('notify')
        navigator.clipboard.writeText(endpoint)
    }

    return (
        <Wrapper className={classLabel}>
            <Notification className={copyLabel}>Value copied to clipboard</Notification>
            <Title>your endpoint</Title>
            <CopyDiv onClick={handleCopy}>
                <StyledCopy />
            </CopyDiv>
            <EndpointDiv>
                <EndpointText>
                    {endpoint}
                </EndpointText>

            </EndpointDiv>
            <Fader className={faderClassLabel}>
                <ExpandButton onClick={() => setExtended(prev => !prev)}>{extended ? 'less... ': 'more...'}</ExpandButton>
            </Fader>
        </Wrapper>
    )

}

export default EndpointDisplay;