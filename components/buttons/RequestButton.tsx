'use client'

import { Button, useDisclosure } from "@chakra-ui/react";
import RequestModal from "../modals/RequestModal";

export type RequestButtonProps = {
    full?: boolean
    title?: string
}

export default function RequestButton({ full, title }: RequestButtonProps) {
    const modal = useDisclosure()

    return (
        <>
        <Button variant={full ? 'solid' : 'outline'} colorScheme="red" onClick={modal.onToggle}>
          Узнать стоимость {title}
        </Button>
        <RequestModal isOpen={modal.isOpen} onClose={modal.onClose} />
        </>
    )
}