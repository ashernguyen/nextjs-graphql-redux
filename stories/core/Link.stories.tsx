import React from 'react';
import { storiesOf } from '@storybook/react';
import { Link } from '@client/components/core';

const stories = storiesOf('Core components|Link', module);

stories.addWithJSX('Default', () => <Link href="www.google.com">Search with Google</Link>);
