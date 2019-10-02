import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Flex, Text } from '@client/components/core';

const stories = storiesOf('Core components|Flex', module);

stories
  .addWithJSX('Default', () => (
    <Flex width={1} color="white">
      <Flex width={1 / 4} bg="blue.3" p={4} justifyContent="center">
        <Text textAlign="center">1/4</Text>
      </Flex>
      <Flex width={1 / 4} bg="green.3" p={4} justifyContent="center">
        <Text textAlign="center">1/4</Text>
      </Flex>
      <Flex width={1 / 4} bg="yellow.3" p={4} justifyContent="center">
        <Text textAlign="center">1/4</Text>
      </Flex>
      <Flex width={1 / 4} bg="lime.3" p={4} justifyContent="center">
        <Text textAlign="center">1/4</Text>
      </Flex>
    </Flex>
  ))
  .addWithJSX('Flex direction column', () => (
    <Flex width={1} color="white" flexDirection="column">
      <Flex width={1} bg="blue.3" p={4} justifyContent="center">
        <Text textAlign="center">1</Text>
      </Flex>
      <Flex width={3 / 5} bg="green.3" p={4} justifyContent="center">
        <Text textAlign="center">3/5</Text>
      </Flex>
      <Flex width={2 / 3} bg="yellow.3" p={4} justifyContent="center">
        <Text textAlign="center">2/3</Text>
      </Flex>
      <Flex width={1 / 2} bg="red.3" p={4} justifyContent="center">
        <Text textAlign="center">1/2</Text>
      </Flex>
    </Flex>
  ))
  .addWithJSX('Complex flex combination', () => (
    <Flex width={1} color="white" flexDirection="column">
      <Flex width={1} flexDirection="row" justifyContent="center" bg="orange" p={4}>
        <Text textAlign="center">1</Text>
      </Flex>
      <Flex width={1} flexDirection="row">
        <Flex width={1 / 3} flexDirection="column">
          <Flex width={1} bg="green.3" p={4} justifyContent="center">
            <Text textAlign="center">1/3</Text>
          </Flex>
          <Flex width={1} bg="yellow.3" p={4} justifyContent="center">
            <Text textAlign="center">1/3</Text>
          </Flex>
          <Flex width={1} bg="red.3" p={4} justifyContent="center">
            <Text textAlign="center">1/3</Text>
          </Flex>
        </Flex>
        <Flex width={2 / 3} flexDirection="row">
          <Flex width={1 / 2} bg="blue.3" p={4} justifyContent="center" alignItems="center">
            <Text textAlign="center">1/3</Text>
          </Flex>
          <Flex width={1 / 2} bg="gray.3" p={4} justifyContent="center" alignItems="center">
            <Text textAlign="center">1/3</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  ));
