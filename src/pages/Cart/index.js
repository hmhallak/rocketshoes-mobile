import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { CartContainer, EmptyText } from './styles';

export default function Cart() {
  return (
    <CartContainer>
      <Icon name="remove-shopping-cart" size={60} color="#eee" />
      <EmptyText>Seu carrinho está vazio.</EmptyText>
    </CartContainer>
  );
}
