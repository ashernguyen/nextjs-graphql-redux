import { FC } from 'react';
import { fontWeight, buttonStyle, variant } from 'styled-system';
import styled from 'styled-components';
import { themed } from '@client/utils';
import { ButtonProps } from '@client/components/core/types';
import Flex from '@client/components/core/Flex';

const Button: FC<ButtonProps> = styled(Flex)(
  {
    appearance: 'none',
    display: 'inline-flex',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none'
  },
  fontWeight,
  buttonStyle,
  variant({ key: 'buttons' }),
  themed('Button')
);

Button.defaultProps = {
  as: 'button',
  fontSize: 'inherit',
  fontWeight: 3,
  alignItems: 'center',
  justifyContent: 'center',
  px: 3,
  py: 3,
  color: 'white',
  bg: 'orange.3',
  border: 0
};

export default Button;
