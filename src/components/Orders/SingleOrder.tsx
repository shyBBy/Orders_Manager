import React from "react";
import {Center, Heading, Stack, VStack} from "native-base";
import {ScrollView} from "react-native";

export const SingleOrder = () => {
    return (
        <ScrollView>
            <VStack space="2.5" mt="4" px="8">
                <Heading size="md">row</Heading>
                <Stack direction="row" mb="2.5" mt="1.5" space={3}>
                    <Center size="16" bg="primary.400" rounded="sm" _text={{
                        color: "warmGray.50",
                        fontWeight: "medium"
                    }} shadow={"3"}>
                        Box 1
                    </Center>
                    <Center bg="primary.500" size="16" rounded="sm" _text={{
                        color: "warmGray.50",
                        fontWeight: "medium"
                    }} shadow={"3"}>
                        Box 2
                    </Center>
                    <Center size="16" bg="primary.700" rounded="sm" _text={{
                        color: "warmGray.50",
                        fontWeight: "medium"
                    }} shadow={"3"}>
                        Box 3
                    </Center>
                </Stack>
            </VStack>
        </ScrollView>
    )
}