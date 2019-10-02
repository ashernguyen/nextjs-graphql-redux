import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from '@client/components/core';

storiesOf('Core components|Heading', module)
  .addWithJSX('Default', () => <Heading>This is H2 tag</Heading>)
  .addWithJSX('H1 tag', () => (
    <Heading as="h1" color="gray.8" fontWeight={8}>
      This is H1 tag
    </Heading>
  ))
  .addWithJSX('H3 tag', () => (
    <Heading as="h3" color="gray.8" fontWeight={6}>
      This is H3 tag
    </Heading>
  ))
  .addWithJSX('H4 tag', () => (
    <Heading as="h4" color="gray.8" fontWeight={5}>
      This is H4 tag
    </Heading>
  ))
  .addWithJSX('With styles', () => (
    <Heading as="h4" p={2} fontSize={5} color="indigo.2">
      Heading content
    </Heading>
  ));
