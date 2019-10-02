import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Flex } from '@client/components/core';

const stories = storiesOf('Core components|Button', module);

stories
  .addWithJSX('Default', () => <Button>Click me</Button>)
  .addWithJSX('Colors', () => (
    <Flex flexDirection="row">
      <Button bg="green.3" border={0} color="white" mr={3} fontSize={5} fontWeight={1}>
        Click me
      </Button>
      <Button color="white" borderColor="gray.4" border={0} mr={3} fontSize={4}>
        Click me
      </Button>
      <Button bg="white" borderColor="gray.9" border={2} color="gray.8">
        Click me
      </Button>
    </Flex>
  ))
  .addWithJSX('Button Group', () => (
    <Flex flexDirection="row">
      <Button
        bg="green.3"
        border={0}
        color="white"
        fontSize={3}
        borderRight={1}
        borderColor="white"
        fontWeight={2}
        borderRadius="4px 0 0 4px"
      >
        Click me
      </Button>
      <Button
        bg="red.3"
        border={0}
        color="white"
        fontSize={3}
        borderRight={1}
        borderColor="white"
        fontWeight={2}
      >
        Click me
      </Button>
      <Button
        bg="yellow.3"
        border={0}
        color="white"
        fontSize={3}
        fontWeight={2}
        borderRadius="0 4px 4px 0"
      >
        Click me
      </Button>
    </Flex>
  ));
