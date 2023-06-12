import { NewsCard } from '@/types/cards';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function NewsCard(props: NewsCard) {
  const { type, image, datetime, title, text, link } = props;

  return (
    <Card variant={'outline'} p={0}>
      <Grid templateColumns={'1fr'} templateRows={'12rem 2rem 3rem 12rem 3rem'} gap={2}>
        <GridItem>
          <Image
            src={image}
            fit="cover"
            h="48"
            w="100%"
            borderTopLeftRadius={6}
            borderTopRightRadius={6}
          />
          <Divider />
        </GridItem>

        <GridItem pl={4} pr={4}>
          <Text color="blackAlpha.500" fontWeight={500}>
            {datetime}
          </Text>
        </GridItem>

        <GridItem pl={4} pr={4} overflow={'hidden'}>
          <Heading fontSize={18} color="red.700">
            {title}
          </Heading>
        </GridItem>

        <GridItem pl={4} pr={4}>
          <Text textAlign={'justify'}>{text}</Text>
        </GridItem>

        <GridItem pl={4} pr={4}>
          <Divider />
          <Text mt={2} fontWeight={500}>
            <Link href={link}>Подробнее</Link>
          </Text>
        </GridItem>
      </Grid>
    </Card>
  );
}
