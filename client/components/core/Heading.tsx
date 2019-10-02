import { FC } from 'react';
import { variant } from 'styled-system';
import styled from 'styled-components';
import { themed } from '@client/utils';
import { HeadingProps } from '@client/components/core/types';
import Text from '@client/components/core/Text';

const Heading: FC<HeadingProps> = styled(Text)(variant({ key: 'headings' }), themed('Heading'));

Heading.defaultProps = {
  as: 'h2',
  m: 0,
  fontSize: 6,
  fontWeight: 6
};

export default Heading;
