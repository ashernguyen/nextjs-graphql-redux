import { FC } from 'react';
import {
  space,
  color,
  display,
  width,
  height,
  maxHeight,
  minHeight,
  maxWidth,
  minWidth,
  borders,
  flex,
  order,
  alignSelf,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  overflow,
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  fontSize,
  fontStyle,
  textStyle,
  opacity,
  boxShadow,
  lineHeight,
  verticalAlign
} from 'styled-system';
import styled from 'styled-components';
import { BoxProps } from '@client/components/core/types';
import { themed } from '@client/utils';

const Box: FC<BoxProps> = styled('div')(
  {
    boxSizing: 'border-box'
  },
  space,
  color,
  display,
  width,
  height,
  maxHeight,
  minHeight,
  maxWidth,
  minWidth,
  borders,
  flex,
  order,
  alignSelf,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  overflow,
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  fontSize,
  fontStyle,
  textStyle,
  opacity,
  boxShadow,
  lineHeight,
  verticalAlign,
  themed('Box')
);

export default Box;
