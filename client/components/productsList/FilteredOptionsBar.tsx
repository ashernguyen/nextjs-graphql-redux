import React, { FC } from 'react';
import { Box, Flex, Heading } from '@client/components/core';
import { FilteredOptionsProps } from '@client/components/productsList/types';
import SelectFilteredOptions from '@client/components/productsList/FilteredOptions';

const FilteredOptionsBar: FC<FilteredOptionsProps> = ({
  filteredOptions,
  setFilteredOptions,
  sizes
}) => (
  <Box px={[0, 3, 3, 3]} mb={5} width={1}>
    <Flex
      bg="blue.3"
      alignItems="center"
      justifyContent="space-between"
      px={[2, 4, 4, 4]}
      py={[2, 3, 3, 3]}
    >
      <Heading color="white" flex="none" fontSize={[4, 4, 9, 9]}>
        {`Women's top`}
      </Heading>
      <SelectFilteredOptions
        sizes={sizes}
        filteredOptions={filteredOptions}
        setFilteredOptions={setFilteredOptions}
      />
    </Flex>
  </Box>
);

FilteredOptionsBar.displayName = 'FilteredOptionsBar';

export default FilteredOptionsBar;
