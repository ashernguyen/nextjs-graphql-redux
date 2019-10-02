import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from '@client/components/core';

const stories = storiesOf('Core components|Image', module);

stories.addWithJSX('default', () => (
  <Image
    src="https://lorempixel.com/output/animals-q-c-600-400-9.jpg"
    width={600}
    height={400}
    alt="demo image"
  />
));
