import React from 'react';
import styled, { ThemeProvider }from 'styled-components';

import GlobalStyle from './theme/GlobalStyle';
import useTheme from './hooks/useTheme';
import SelectionForm from './components/SelectionForm'


const AppContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`

function App() {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <AppContainer className="App">
        <GlobalStyle />
        <SelectionForm />

      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
