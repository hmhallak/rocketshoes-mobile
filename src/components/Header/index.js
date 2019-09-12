import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Wrapper, Container, Logo, ItemCount, BasketContainer } from './styles';

export default function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={24} color="#FFF" />
          <ItemCount>0</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
