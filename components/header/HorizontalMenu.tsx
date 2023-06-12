import { menus } from '@/data/menus';
import { tr } from '@/data/translate';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  useMediaQuery,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function HorizontalMenu() {
  return (
    <Flex gap={4}>
      {menus.map(({ label, items }) => {
        return items ? (
          <Menu key={label}>
            <MenuButton as={Button}>{tr(label)}</MenuButton>
            <MenuList>
              {items.map(([name, link]) => {
                return (
                  <MenuItem key={name} as={Link} href={link || '#'} isDisabled={!link}>
                    {tr(name)}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        ) : (
          <Button key={label}>{label}</Button>
        );
      })}
    </Flex>
  );
}
