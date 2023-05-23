import React, { useState } from 'react';
import { Center, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Text, useToast } from 'native-base';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toast = useToast();

  const handleLogin = async () => {
    // Walidacja danych
    if (username === '' || password === '') {
      toast.show({
        title: 'Błąd logowania',
        description: 'Proszę wprowadzić login i hasło.',
        status: 'warning',
        duration: 3000,
      });
      return;
    }

    try {
      // Wysłanie danych logowania
      const response = await fetch('https://example.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Pomyślne zalogowanie
        toast.show({
          title: 'Sukces',
          description: 'Zalogowano pomyślnie.',
          status: 'success',
          duration: 3000,
        });

        // Wyczyść pola formularza
        setUsername('');
        setPassword('');
      } else {
        // Błąd logowania
        toast.show({
          title: 'Błąd logowania',
          description: 'Błędny adres e-mail lub hasło.',
          status: 'error',
          duration: 3000,
        });
      }
    } catch (error) {
      // Obsługa błędu sieciowego
      console.error(error);
      toast.show({
        title: 'Błąd sieciowy',
        description: 'Wystąpił błąd sieciowy. Spróbuj ponownie.',
        status: 'error',
        duration: 3000,
      });
    }
  };

  return (
  <Center w="100%">
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: 'warmGray.50' }}>
        OrdersManager App
      </Heading>
      <Heading mt="1" _dark={{ color: 'warmGray.200' }} color="coolGray.600" fontWeight="medium" size="xs">
        Zaloguj się aby kontynuować 
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Login</FormControl.Label>
          <Input
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="text"
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Hasło</FormControl.Label>
          <Input
            type="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Link
            _text={{
              fontSize: 'xs',
              fontWeight: '500',
              color: 'indigo.500',
            }}
            alignSelf="flex-end"
            mt={1}
            href=''
          >
            Zapomniałeś hasła?
          </Link>
        </FormControl>
        <Button mt={2} colorScheme="indigo" onPress={handleLogin}>
          Zaloguj się 
        </Button>
        <HStack mt={6} justifyContent="center">
          <Link
            _text={{
              color: 'indigo.500',
              fontWeight: 'medium',
              fontSize: 'sm',
            }}
            href="https://dev-olczak.pl"
          >
            Aplikacja utworzona przez Dawid 'shyBBy' Olczak
          </Link>
        </HStack>
      </VStack>
    </Box>
  </Center>
);

             
}