import { EquipmentCard } from '@/data/equipment';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
  Box,
} from '@chakra-ui/react';
import Link from 'next/link';
import Details from '../common/Details';
import RequestModal from '../modals/RequestModal';
import RequestButton from '../buttons/RequestButton';
import { useParams } from 'next/navigation';

export type DeviceCard = {
  eq: EquipmentCard;
  tagsH?: string;
  sectionUrl: string;
  full?: boolean;
};

export default function DeviceCard({ eq, tagsH, sectionUrl, full }: DeviceCard) {
  const params = useParams();

  return (
    <Card
      className="section-card"
      key={eq.id}
      variant={'outline'}
      flex={{ sm: '1 1 49%', xl: '1 1 24%' }}
    >
      <CardHeader pb={0} pt={2}>
        <Flex gap={2} align={'center'}>
          <Heading color="red.600">{eq.model}</Heading>
          <Box transform={'translateY(2px)'}>
            <RequestButton showIcon={Boolean(params?.model)} />
          </Box>
        </Flex>
        <Text fontSize={12} fontWeight={500}>
          {eq.area}
        </Text>
        <Divider mt={2} />
      </CardHeader>
      <CardBody>
        <Flex direction={'column'} gap={2}>
          <Flex overflow={'auto'}>
            {eq.images.map((img, i) => {
              return <Image key={`${eq.model}-img-${i}`} src={img} h="48" fit="cover" />;
            })}
          </Flex>
          <Flex
            mt={2}
            wrap="wrap"
            gap={1}
            justify={'start'}
            alignContent={'start'}
            className="section-card-tags"
            h={tagsH}
          >
            {eq.tags.map((tag, i) => (
              <Button flex="1 1 auto" size="xs" key={`model-key-${i}-${eq.id}`}>
                {tag}
              </Button>
            ))}
          </Flex>
          {!full && (
            <Text fontSize={12} textAlign={'justify'}>
              {eq.short}
            </Text>
          )}
          {full && (
            <Flex wrap="wrap" gap={2}>
              <Card variant={'outline'} flex={{ sm: '1 1 100%', lg: '1 1 49%' }} p={4}>
                <Heading fontSize={20} mt={2}>
                  Характеристики
                </Heading>
                <Divider mt={2} borderColor={'red.600'} />
                <Details data={eq} />
              </Card>
              <Flex direction={'column'} gap={2} flex={{ sm: '1 1 100%', lg: '1 1 49%' }}>
                {eq.full.map((block, i) => {
                  return (
                    <Card variant={'outline'} flex="1 1 49%" key={`block-${i}`} p={4}>
                      <Heading fontSize={20} mt={2}>
                        {block.heading}
                      </Heading>
                      <Divider mt={2} borderColor={'red.600'} />
                      <Text mt={2} textAlign={'justify'} wordBreak={'break-word'}>
                        {block.text}
                      </Text>
                    </Card>
                  );
                })}
              </Flex>
            </Flex>
          )}
        </Flex>
      </CardBody>
      <CardFooter pt={0} flexDirection={'column'} gap={2}>
        <RequestButton full={full} title={eq.model} showButton />
        <Flex gap={2} justify={'space-between'}>
          {/*           <Button flex="1 1 auto" variant="outline">
            Характеристики
          </Button> */}
          {sectionUrl && (
            <Button w="full" variant="outline" as={Link} href={`/${sectionUrl}/${eq.id}`}>
              Подробнее
            </Button>
          )}
        </Flex>
      </CardFooter>
    </Card>
  );
}
