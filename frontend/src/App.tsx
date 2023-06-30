import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { Card, CardContent, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import CustomList from './components/CustomList';

function App() {
  const theme = createTheme();

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'http://127.0.0.1:8000/graphql/',
    }),
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed>
        <Card variant="elevation" elevation={0}>
          <CardContent>
            <ApolloProvider client={client}>
              <CustomList />
            </ApolloProvider>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;