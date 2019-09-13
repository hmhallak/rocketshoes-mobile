import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const CartContainer = styled.View`
  background: #fff;
  margin: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 10px;
  align-items: center;
`;

export const EmptyText = styled.Text`
  color: ${colors.dark};
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
`;
