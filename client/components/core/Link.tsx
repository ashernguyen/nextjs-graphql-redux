import { FC } from 'react';
import styled from 'styled-components';
import { themed } from '@client/utils';
import { LinkProps } from '@client/components/core/types';
import Box from '@client/components/core/Box';

const Link: FC<LinkProps> = styled(Box)(themed('Link'));

Link.defaultProps = {
  as: 'a',
  color: 'blue.3'
};

export default Link;
