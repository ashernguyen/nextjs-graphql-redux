import { FC } from 'react';
import { fontStyle, fontFamily, fontWeight, textAlign, letterSpacing } from 'styled-system';
import styled from 'styled-components';
import { themed } from '@client/utils';
import { TextProps } from '@client/components/core/types';
import Box from '@client/components/core/Box';

const Text: FC<TextProps> = styled(Box)(
  fontStyle,
  fontFamily,
  fontWeight,
  textAlign,
  letterSpacing,
  themed('Text')
);

Text.defaultProps = {
  as: 'span',
  fontSize: 4,
  fontWeight: 3
};

export default Text;
