import React, { FC, ChangeEvent, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Box, Input } from '@client/components/core';
import { FilteredOptionsProps } from '@client/components/productsList/types';

const FilteredOptions: FC<FilteredOptionsProps> = ({
  filteredOptions: { size },
  setFilteredOptions,
  sizes
}) => {
  if (sizes.length === 0) {
    return null;
  }

  const router = useRouter();

  const onSelectFilteredOption = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!router) return;

      const { pathname, push } = router;

      const value = e.target.value;

      const href = `${pathname}${value.length === 0 ? '' : `?size=${value}`}`;

      setFilteredOptions({ size: value });

      push(href, href, { shallow: true });
    },
    [router]
  );

  const renderOption = useCallback(
    (label: string, idx: number) => (
      <Input as="option" key={`product-size-${idx}`} value={label}>
        {label}
      </Input>
    ),
    []
  );

  return (
    <Box
      bg="white"
      position="relative"
      display="inline-block"
      verticalAlign="top"
      color="gray.8"
      minWidth="140px"
      css={`
        &:after {
          position: absolute;
          top: 50%;
          right: 1rem;
          display: inline-block;
          content: '';
          width: 0;
          height: 0;
          margin-top: -0.15rem;
          pointer-events: none;
          border-top: 0.35rem solid;
          border-right: 0.35rem solid transparent;
          border-bottom: 0.35rem solid transparent;
          border-left: 0.35rem solid transparent;
        }
      `}
    >
      <Input
        borderRadius={0}
        as="select"
        value={size === null ? '' : size}
        onChange={onSelectFilteredOption}
        border={0}
        display="block"
        color="gray.8"
        paddingRight={6}
      >
        <Input as="option" value={''}>
          Filter by size
        </Input>
        {sizes.map(renderOption)}
      </Input>
    </Box>
  );
};

FilteredOptions.displayName = 'FilteredOptions';

export default FilteredOptions;
