'use client';

import styles from './page.module.css';
import Link from 'next/link';
import { homecards } from '@/data/homecards';
import HomeCard from '@/components/cards/HomeCard';
import {
  Image,
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react';
import { news } from '@/data/news';
import NewsCard from '@/components/cards/NewsCard';
import RedBar from '@/components/common/Redbar';
import { partners } from '@/data/partners';

export default function Home() {
  return (
    <main>
      <Flex direction={['column']} p={4} pb={0}>
        <Heading textAlign={'center'} fontSize={{ base: 24 }}>
          Официальный поставщик
        </Heading>
        <Heading textAlign={'center'} fontSize={{ base: 24 }}>
          Leica Microsystems GmbH
        </Heading>
      </Flex>
      <RedBar />
      <Grid
        p={4}
        templateColumns={{
          sm: '1fr',
          md: '1fr 1fr',
          xl: `repeat(${homecards.length}, 1fr)`,
        }}
        templateRows={{
          sm: `repeat(${homecards.length}, 1fr)`,
          md: '1fr 1fr',
          xl: '1fr',
        }}
        gap={4}
        alignContent={'stretch'}
      >
        {homecards.map((card) => {
          return (
            <GridItem key={card.link}>
              <HomeCard {...card} />
            </GridItem>
          );
        })}
      </Grid>

      <Heading textAlign={'center'}>Новости</Heading>
      <RedBar />
      <Grid
        p={4}
        templateColumns={{ sm: '1fr 1fr', lg: `repeat(3, 1fr)`, xl: `repeat(4, 1fr)` }}
        templateRows={{ sm: '1fr 1fr', lg: '1fr', xl: '1fr' }}
        gap={4}
      >
        {news.slice(0, 4).map((post, i) => {
          return <NewsCard key={`post-${i}`} {...post} />;
        })}
      </Grid>

      <Heading textAlign={'center'}>Наши партнеры</Heading>
      <RedBar />
      <Flex justify={'space-evenly'} align={'center'} p={4} wrap={'wrap'}>
        {partners.map(([img, link], i) => {
          return (
            <Image
              p={4}
              key={`partner-${i}`}
              flexGrow={0}
              flexShrink={1}
              flexBasis={['50%']}
              src={img}
              maxW={'56'}
              fit="contain"
            />
          );
        })}
      </Flex>
    </main>
  );
}
