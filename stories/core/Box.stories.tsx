import React from 'react';
import { storiesOf } from '@storybook/react';
import { boxProps } from '../utils/knobs';
import { Box } from '@client/components/core';

const stories = storiesOf('Core components|Box', module);

stories
  .addWithJSX('Default', () => <Box>Default as div</Box>)
  .addWithJSX('With custom tag', () => (
    <Box color="green.3" as="section">
      This is section tag
    </Box>
  ))
  .addWithJSX('With styles', () => (
    <Box as="header" p={[3, 3, 3, 4]} fontSize={[3, 4, 4, 4]} color="white" bg="orange.3">
      Box with styles
    </Box>
  ))
  .addWithJSX('Play with styles', () => <Box {...boxProps()}>Box with styles</Box>);
