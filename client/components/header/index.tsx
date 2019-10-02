import React, { memo } from 'react';
import { Box, Heading } from '@client/components/core';
import { Container } from '@client/components/styledComponents';
import NavBar from '@client/components/header/NavBar';
import { HeaderProps } from '@client/components/header/types';

const Header = memo<HeaderProps>(({ pathname }) => (
  <Box width={1} bg="gray.8">
    <Container justifyContent="space-between">
      <Heading color="white" fontSize={[3, 4, 6, 7]} px={[0, 3, 3, 3]} py={3} fontWeight={2}>
        AKQA CODING CHALLENGE
      </Heading>
      <NavBar pathname={pathname} />
    </Container>
  </Box>
));

Header.displayName = 'Header';

export default Header;
