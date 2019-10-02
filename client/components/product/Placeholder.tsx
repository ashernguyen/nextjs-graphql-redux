import React, { memo } from 'react';
import { FlexBoxProps } from '@client/components/core/types';
import { Flex } from '@client/components/core';
import { Placeholder } from '@client/components/styledComponents';

const ProductPlaceholder = memo<FlexBoxProps>(({ ...styles }) => (
  <Flex width={1} flexDirection="column" {...styles}>
    <Placeholder width={1} height="280px" mb={3} />
    <Placeholder width={3 / 4} height="20px" mb={3} />
    <Placeholder width={1 / 2} height="20px" />
  </Flex>
));

ProductPlaceholder.displayName = 'ProductPlaceholder';

export default ProductPlaceholder;
