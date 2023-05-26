import React, { useState } from 'react';
import { Center, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Text, useToast } from 'native-base';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toast = useToast();

  const handleLogin = async () => {
    // Walidacja danych
    if (email === '' || password === '') {
      toast.show({
        title: 'Błąd logowania',
        description: 'Proszę wprowadzić login i hasło.',
        variant: 'warning',
        duration: 3000,
      });
      return;
    }

    try {
      // Wysłanie danych logowania
      const response = await fetch('http://localhost:3002/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Pomyślne zalogowanie
        toast.show({
          title: 'Sukces',
          description: 'Zalogowano pomyślnie.',
          variant: 'success',
          duration: 3000,
        });

        // Wyczyść pola formularza
        setEmail('');
        setPassword('');
      } else {
        // Błąd logowania
        toast.show({
          title: 'Błąd logowania',
          description: 'Błędny adres e-mail lub hasło.',
          variant: 'error',
          duration: 3000,
        });
      }
    } catch (error) {
      // Obsługa błędu sieciowego
      console.error(error);
      toast.show({
        title: 'Błąd sieciowy',
        description: 'Wystąpił błąd sieciowy. Spróbuj ponownie.',
        variant: 'error',
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
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
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