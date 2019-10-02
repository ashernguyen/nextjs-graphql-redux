import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Flex, Box } from '@client/components/core';
import { Container } from '@client/components/styledComponents';
import Header from '@client/components/header';
import Footer from '@client/components/footer';

const Layout: FC = ({ children }) => {
  const router = useRouter();

  return (
    <Flex flexDirection="column" height="100%">
      <Header pathname={router ? router.pathname : ''} />
      <Box flex="1 0 auto" py={[4, 4, 5, 5]}>
        <Container>{children}</Container>
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
