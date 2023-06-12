'use client';

import { tr } from '@/data/translate';
import { Homecard } from '@/types/cards';
import {
  Image,
  Card,
  CardBody,
  CardHeader,
  Heading,
  CardFooter,
  Button,
  Divider,
  Box,
  Text,
  useDisclosure,
  Tag,
  Flex,
} from '@chakra-ui/react';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

type Props = {
  scale?: number;
} & Homecard;

export default function HomeCard({ title, image, link, text, tags = [] }: Props) {
  return (
    <Card h={'full'} variant={'outline'} bg={'white'} w='full'>
      <CardBody pt={5}>
        <Flex direction={'column'} justify={'space-between'} h="full" gap={4}>
          <Box overflow={'hidden'}>
            <Box as={Link} href={link}>
              <Image src={image} fit="cover" w="full" h="80" borderRadius={10} />
            </Box>
            <Flex
              mt={4}
              gap={2}
              wrap="wrap"
              justify={'space-between'}
            >
              {tags.map((tag, i) => {
                return (
                  <Button key={`tag-${i}`} flex="1 1 auto" size="sm" as={Link} href="#">
                    {tag}
                  </Button>
                );
              })}
            </Flex>
          </Box>

          <Button
            as={Link}
            href={link}
            isDisabled={!link}
            w="full"
            variant={'outline'}
            colorScheme="red"
            justifyContent={'space-between'}
            color="red.700"
            rightIcon={
              <Box color="red.700">
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </Box>
            }
          >
            {tr(title).toLocaleUpperCase()}
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
}
