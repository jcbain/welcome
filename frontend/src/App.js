import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './theme/GlobalStyle';
import SelectionForm from './components/SelectionForm'


const AppContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`

function App() {
  return (
    <AppContainer className="App">
      <GlobalStyle />
      <SelectionForm />

    </AppContainer>
  );
}

export default App;
