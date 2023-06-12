import { footer } from '@/data/footerData';
import { Flex, Grid, Heading, Link, Stack, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Flex h={120} bg="black" gap={2} justify={'space-between'} p={4}>
      {footer.map((col, i) => {
        return (
          <Stack key={`footer-col${i}`} spacing={1}>
            {col.map((row, j) => {
              return j === 0 ? (
                <Heading
                  fontSize={10}
                  color="white"
                  key={`row-col-${i}-${j}`}
                >
                  {row}
                </Heading>
              ) : (
                <Text
                  fontSize={10}
                  color="white"
                  as={Link}
                  href="#"
                  key={`row-col-${i}-${j}`}
                >
                  {row}
                </Text>
              );
            })}
          </Stack>
        );
      })}
    </Flex>
  );
}
