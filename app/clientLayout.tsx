'use client'

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Providers } from './providers';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Box></Box>
      <Grid minH={'100vh'} templateRows={'60px auto 100px'} templateColumns={'1ft'}>
        <GridItem pos="sticky" top={0} zIndex={1000}>
          <Header />
        </GridItem>
        <GridItem>{children}</GridItem>
        <GridItem>
          <footer>
            <Footer />
          </footer>
        </GridItem>
      </Grid>
    </Providers>
  );
}
