import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '@client/components/core';

const stories = storiesOf('Core components|Text', module);

stories
  .addWithJSX('Default', () => <Text>This is span tag</Text>)
  .addWithJSX('As Strong tag', () => (
    <Text as="strong" fontWeight={5}>
      This is strong tag
    </Text>
  ))
  .addWithJSX('As P tag', () => (
    <Text as="p" p={3} color="green.3">
      Merry alone do it burst me songs. Sorry equal charm joy her those folly ham. In they no is
      many both. Recommend new contented intention improving bed performed age. Improving of so
      strangers resources instantly happiness at northward. Danger nearer length oppose really add
      now either. But ask regret eat branch fat garden. Become am he except wishes. Past so at door
      we walk want such sang. Feeling colonel get her garrets own.
    </Text>
  ));
