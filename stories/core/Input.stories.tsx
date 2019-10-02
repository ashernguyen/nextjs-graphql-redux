import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '@client/components/core';

const stories = storiesOf('Core components|Input', module);

stories
  .addWithJSX('Default', () => <Input placeholder="Type something here..." type="text" />)
  .addWithJSX('Textarea', () => (
    <Input placeholder="Type something here..." as="textarea" mr={3} height="100px" fontSize={3} />
  ))
  .addWithJSX('Select', () => (
    <Input placeholder="Type something here..." as="select" fontSize={4}>
      <Input as="option">Option 1</Input>
      <Input as="option">Option 2</Input>
      <Input as="option">Option 3</Input>
    </Input>
  ))
  .addWithJSX('Disabled', () => (
    <Input disabled placeholder="Type something here..." type="text" />
  ));
