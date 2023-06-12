import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';

const RequestModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w={'90%'}>
        <ModalHeader>Оставить заявку</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Ваше ФИО или название компании</FormLabel>
            <Input />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Телефон</FormLabel>
            <Input />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Электронная почта</FormLabel>
            <Input />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Сообщение</FormLabel>
            <Textarea />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3}>
            Отправить
          </Button>
          <Button onClick={onClose}>Отмена</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RequestModal;
