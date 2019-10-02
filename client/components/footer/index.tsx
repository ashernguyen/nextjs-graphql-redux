import React, { memo } from 'react';
import { Flex, Text } from '@client/components/core';
import { Container } from '@client/components/styledComponents';

const Footer = memo(() => (
  <Flex as="footer" py={4}>
    <Container>
      <Text fontSize={3} color="gray.8">
        Copyright © 2019 Asher Nguyen
      </Text>
    </Container>
  </Flex>
));

Footer.displayName = 'Footer';

export default Footer;
