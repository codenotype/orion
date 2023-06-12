'use client';

import {
  Button,
  Flex,
  useMediaQuery,
  Image,
  Box,
  Divider,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react';
import HorizontalMenu from './HorizontalMenu';
import SideMenu from './SideMenu';
import Link from 'next/link';
import { partners } from '@/data/partners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { EquipmentCard, equipment } from '@/data/equipment';
import { useRouter } from 'next/navigation';

const widths = ['(max-width: 960px)', '(min-width: 670px)'];

export default function Header() {
  const [less960, more670] = useMediaQuery(widths);

  const nav = useRouter()
  const search = useDisclosure();
  const [searchResult, setSearchResult] = useState<EquipmentCard[]>([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (searchValue === '') {
      setSearchResult([]);

      return;
    }

    const eqs = Object.values(equipment)
      .filter((device) => {
        return JSON.stringify(device).toLowerCase().includes(searchValue.toLowerCase());
      });

    setSearchResult(eqs);
  }, [searchValue]);

  return (
    <header>
      <nav>
        <Flex
          pos={'relative'}
          justify={'space-between'}
          p={4}
          gap={4}
          bg="white"
          boxShadow={'sm'}
        >
          <Button as={Link} href="/">
            Company Logo
          </Button>
          <Box mr="auto">
            <Button
              leftIcon={<FontAwesomeIcon icon={faSearch} />}
              onClick={search.onToggle}
            >
              Search
            </Button>
            <Modal isOpen={search.isOpen} onClose={search.onClose}>
              <ModalOverlay />
              <ModalContent>
                <Flex gap={4} align={'center'} p={4}>
                  <FontAwesomeIcon icon={faSearch} />
                  <Input
                    value={searchValue}
                    onChange={(ev) => setSearchValue(ev.target.value)}
                    variant={'flushed'}
                    border={'none'}
                    placeholder="Search info..."
                    outline={'none'}
                  />
                </Flex>
                {searchResult.length > 0 && (
                  <Flex direction={'column'} p={4} pt={0}>
                    {searchResult.map((res, i) => {
                      return (
                        <Box key={`search-${i}`}>
                          <Button
                            variant={'ghost'}
                            borderRadius={0}
                            w={'full'}
                            justifyContent={'start'}
                            onClick={() => {
                              search.onClose()
                              nav.push(`/microscope/${res.id}`)
                            }}
                          >
                            {res.model}
                          </Button>
                          <Divider />
                        </Box>
                      );
                    })}
                  </Flex>
                )}
              </ModalContent>
            </Modal>
          </Box>
          {less960 ? <SideMenu /> : <HorizontalMenu />}
        </Flex>
      </nav>
    </header>
  );
}
