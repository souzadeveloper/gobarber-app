import React from 'react';
import { Text } from 'react-native';

import Background from '~/Components/Background';
import Input from '~/Components/Input';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Text>SignIn</Text>
      <Input
        style={{ marginTop: 30 }}
        icon="call"
        placeholder="Digite seu nome"
      />
    </Background>
  );
}
