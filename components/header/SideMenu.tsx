'use client';

import { menus } from '@/data/menus';
import { tr } from '@/data/translate';
import { Box, Button, Slide, useDisclosure } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SideMenu() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    const outside = (ev: any) => {
      if ((ev.target as HTMLDivElement).classList.contains('chakra-slide')) {
        onClose()
      }
    }

    window.addEventListener('click', outside)

    return () => window.removeEventListener('click', outside)
  }, [isOpen])

  return (
    <>
      <Button minW={'24'} right={4} pos={'absolute'} zIndex={11} onClick={onToggle}>
        {isOpen ? 'Close' : 'Menu'}
      </Button>
      <Slide direction="right" in={isOpen} style={{ zIndex: 10 }}>
        <Accordion
          borderColor={'white'}
          pt={16}
          right={0}
          bottom={0}
          pos={'absolute'}
          bg="white"
          color="black"
          h={'100%'}
          w={['100%', '50%']}
          ml="auto"
          shadow={'xl'}
          allowMultiple
        >
          {menus.map(({ label, items }, i, arr) => {
            return (
              <AccordionItem key={label + 'menu'}>
                <h2>
                  <AccordionButton
                    borderBottom={'1px solid rgba(0,0,0,0.1)'}
                    _expanded={items ? { bg: 'red.600', color: 'white' } : undefined}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      {tr(label)}
                    </Box>
                    {items ? <AccordionIcon /> : null}
                  </AccordionButton>
                </h2>
                {items?.map(([title, link]) => {
                  return (
                    <AccordionPanel
                      key={title + 'panel'}
                      as={Button}
                      isDisabled={!link}
                      w={'full'}
                      borderRadius={0}
                      justifyContent={'flex-start'}
                      alignItems={'flex-end'}
                      bg="white"
                      pb={2}
                      onClick={() => {
                        if (link) {
                          router.push(link);

                          onToggle()
                        }
                      }}
                    >
                      {tr(title)}
                    </AccordionPanel>
                  );
                })}
              </AccordionItem>
            );
          })}
        </Accordion>
      </Slide>
    </>
  );
}
