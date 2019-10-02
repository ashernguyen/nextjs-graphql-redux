import React, { FC } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { globalStyles, theme } from '@client/configs/styles';
import { Flex, Box } from '@client/components/core';
import { FlexBoxProps, BoxProps } from '@client/components/core/types';

export const GlobalStyles = createGlobalStyle`${globalStyles}`;

export const Container: FC<FlexBoxProps> = ({ children, ...rest }) => (
  <Flex {...rest} maxWidth={['100%', '100%', '80rem', '100rem']} mx="auto" px={[3, 3, 5, 5]}>
    {children}
  </Flex>
);

export const placeHolderShimmer = keyframes`
  0% {
    background-position: -500px 0;
  }

  100% {
    background-position: 500px 0;
  }
`;

export const Placeholder: FC<BoxProps> = styled(Box)`
  position: relative;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeHolderShimmer};
  animation-timing-function: linear;
  background: ${theme.colors.gray[1]};
  background: linear-gradient(
    to right,
    ${theme.colors.gray[1]} 8%,
    ${theme.colors.gray[0]} 18%,
    ${theme.colors.gray[1]} 33%,
    ${theme.colors.gray[1]} 100%
  );
  background-size: 1000px ${({ height }) => height};
`;
