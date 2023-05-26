import React from 'react';
import { Center, Spinner } from 'native-base';

const LoadingScreen: React.FC = () => {
    return (
        <Center flex={1}>
            <Spinner size="large" color="blue.500" />
        </Center>
    );
};

export default LoadingScreen;
