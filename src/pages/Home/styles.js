import styled from 'styled-components/native';
import { darken } from 'polished';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled.View`
  background-color: ${colors.dark};
`;

export const Product = styled.View`
  background: #fff;
  width: 220px;
  margin: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  max-width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #333;
  margin: 4px;
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  color: #333;
  margin: 5px;
  font-weight: bold;
`;

export const AddButton = styled(RectButton)`
  margin-top: auto;
  border-radius: 4px;
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.primary)};

  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;
