import React from "react";
import {AspectRatio, Box, Center, Heading, HStack, Image, Stack, Text, VStack} from "native-base";
import {GetSingleOrder} from "../../interfaces/orders";


interface SingleOrderProps {
    order: GetSingleOrder;
}

export const SingleOrder = (props: SingleOrderProps) => {

    const {order} = props

    return (
        <Box alignItems="center" p={4}>
            <Box width='100%' rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
            }} _web={{
                shadow: 2,
                borderWidth: 0
            }} _light={{
                backgroundColor: "gray.50"
            }}>
                <Text bg="orange.300" _dark={{
                    bg: "violet.400"
                }} position="absolute" top="0" px="2" py="1.5">
                    Zamówienie nr: {order.id}
                </Text>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                        </Heading>
                        <Text fontSize="xs" _light={{
                            color: "violet.500"
                        }} _dark={{
                            color: "violet.400"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            {order.total} PLN
                        </Text>
                    </Stack>
                    <Text fontWeight="400">
                        Status: {order.status}
                    </Text>
                    <Text fontWeight="400">
                        Przewoźnik:
                    </Text>
                    <Text fontWeight="400">
                        NR PACZKI: {order.status}
                    </Text>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                        <HStack alignItems="center">
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }} fontWeight="400">
                                {order.date_created}
                            </Text>
                        </HStack>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    )
}