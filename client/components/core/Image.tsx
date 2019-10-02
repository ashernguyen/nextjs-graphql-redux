import { FC } from 'react';
import styled from 'styled-components';
import { themed } from '@client/utils';
import { ImageProps } from '@client/components/core/types';
import Box from '@client/components/core/Box';

export const Image: FC<ImageProps> = styled(Box)(
  {
    maxWidth: '100%',
    height: 'auto'
  },
  themed('Image')
);

Image.defaultProps = {
  as: 'img'
};

export default Image;
