'use client'

import DeviceCard from "@/components/cards/DeviceCard";
import { equipment } from "@/data/equipment";
import { Box } from "@chakra-ui/react";
import { useParams } from "next/navigation";

export default function ModelPage() {
    const params = useParams()

    const model = equipment[(params as Record<string, string>).model as string]

    return <>
        {model && (
            <Box mt={2}><DeviceCard full eq={model} sectionUrl={""} /></Box>
        ) || null}
    </>
}