import React, { memo } from 'react';
import NextLink from 'next/link';
import { Flex, Link, Text } from '@client/components/core';
import { NAV_LINKS } from '@client/configs/constants';
import { NavLink } from '@client/types';
import { HeaderProps } from '@client/components/header/types';

const NavBar = memo<HeaderProps>(({ pathname }) => {
  const renderNavLink = ({ label, path }: NavLink, idx: number) => {
    const isActive = path === pathname;

    return (
      <NextLink href={path} key={`nav-link-${idx}`}>
        <Link mr={[0, 3, 3, 3]} ml={[3, 0, 0, 0]}>
          <Text fontSize={[2, 3, 4, 4]} color={isActive ? 'orange.3' : 'white'}>
            {label}
          </Text>
        </Link>
      </NextLink>
    );
  };

  return (
    <Flex alignItems="center" justifyContent="flex-end">
      {NAV_LINKS.map(renderNavLink)}
    </Flex>
  );
});

NavBar.displayName = 'NavBar';

export default NavBar;
