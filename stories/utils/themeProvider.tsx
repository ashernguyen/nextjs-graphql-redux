import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@client/configs/styles';
import { Box } from '@client/components/core';
import { GlobalStyles } from '@client/components/styledComponents';

const StorybookThemeProvider = story => ( //eslint-disable-line
  <ThemeProvider theme={theme}>
    <Box p={3}>
      <GlobalStyles />
      {story()}
    </Box>
  </ThemeProvider>
);

export default StorybookThemeProvider;
