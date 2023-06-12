'use client';

import { Button, IconButton, useDisclosure } from '@chakra-ui/react';
import RequestModal from '../modals/RequestModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export type RequestButtonProps = {
  full?: boolean;
  title?: string;
  showIcon?: boolean;
  showButton?: boolean;
};

export default function RequestButton({
  full,
  title,
  showIcon,
  showButton,
}: RequestButtonProps) {
  const modal = useDisclosure();

  return (
    <>
      {showIcon && (
        <IconButton
          size="sm"
          aria-label={'buy'}
          onClick={modal.onToggle}
          variant={'outline'}
          colorScheme="red"
        >
          <FontAwesomeIcon color='black' icon={faCartShopping} />
        </IconButton>
      )}
      {showButton && (
        <Button
          variant={full ? 'solid' : 'outline'}
          colorScheme="red"
          onClick={modal.onToggle}
        >
          Узнать стоимость {title}
        </Button>
      )}
      <RequestModal isOpen={modal.isOpen} onClose={modal.onClose} />
    </>
  );
}
