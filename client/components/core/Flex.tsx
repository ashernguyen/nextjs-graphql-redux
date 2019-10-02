import { FC } from 'react';
import { flexWrap, flexDirection, alignItems, justifyContent } from 'styled-system';
import styled from 'styled-components';
import { themed } from '@client/utils';
import { FlexBoxProps } from '@client/components/core/types';
import Box from '@client/components/core/Box';

const Flex: FC<FlexBoxProps> = styled(Box)(
  {
    display: 'flex'
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  themed('Flex')
);

export default Flex;
