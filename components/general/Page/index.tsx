import React from 'react';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import Header from 'components/general/Header';

const Page: React.SFC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Header />
      {children}
    </div>
  </ThemeProvider>
);

export default Page;
