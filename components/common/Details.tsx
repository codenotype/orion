import { EquipmentCard } from '@/data/equipment';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

export type Detail = {
  data: EquipmentCard;
};

export default function Details({ data }: Detail) {
  return (
    <TableContainer whiteSpace='break-spaces'>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th pl={0}>Параметр</Th>
            <Th pl={0}>Описание</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.params.map(([param, value], i) => {
            return (
              <Tr key={`${data.id}-detail-${i}`}>
                <Td pl={0}>{param}</Td>
                <Td pl={0}>{value}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
