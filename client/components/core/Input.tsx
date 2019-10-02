import { FC } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import Flex from '@client/components/core/Flex';
import { themed } from '@client/utils';
import { InputProps } from '@client/components/core/types';

const Input: FC<InputProps> = styled(Flex)(
  {
    appearance: 'none',
    alignItems: 'center',
    boxShadow: 'none',
    display: 'inline-flex',
    position: 'relative',
    verticalAlign: 'top',
    '&:focus, &:active': {
      outline: 'none'
    },
    '&[disabled]': {
      cursor: 'not-allowed'
    },
    userSelect: 'none',
    cursor: 'pointer'
  },
  variant({ key: 'inputs' }),
  themed('Input')
);

Input.defaultProps = {
  as: 'input',
  fontSize: 3,
  px: 3,
  py: 2,
  border: 1,
  borderColor: 'gray.4',
  bg: 'white',
  color: 'gray.9',
  borderRadius: 2
};

export default Input;
