'use client';

import DeviceCard from '@/components/cards/DeviceCard';
import { equipment } from '@/data/equipment';
import { tr } from '@/data/translate';
import { Box, Flex } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export type SectionProps = {
  data: any[];
};

export default function Page() {
  const p = useParams();

  const [maxHeight, setMaxHeight] = useState<string | undefined>(undefined);

  const sectionCards = Object.values(equipment).filter((eq) => {
    return eq?.tags?.find((tag: string) => {
      return tag.toLowerCase() === tr(p?.section as string).toLowerCase();
    });
  });

  useEffect(() => {
    const cards = document.querySelectorAll('.section-card-tags');

    let maxHeight = 0;

    cards.forEach((tagClass) => {
      const h = tagClass.getBoundingClientRect().height;

      if (h > maxHeight) {
        maxHeight = h;
      }
    });

    setMaxHeight(maxHeight + 'px');
  }, []);

  return (
    <Box mt={2} p={4}>
      <Flex wrap={'wrap'} gap={2}>
        {sectionCards.map((eq, i) => {
          return (
            <Box
              key={`${eq.model}-${i}`}
              flex={{ sm: '1 1 100%', md: '1 1 49%', xl: '1 1 24%' }}
            >
              <DeviceCard
                eq={eq}
                tagsH={maxHeight}
                sectionUrl={(p?.section as string) || ''}
              />
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}
