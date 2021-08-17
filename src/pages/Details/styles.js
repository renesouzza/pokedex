import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styled from 'styled-components/native';

const Icone = ({nome, tamanho, cor, estilo}) => (
  <Icon name={nome} size={tamanho} color={cor} style={estilo} />
);

export const Background = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => `${props.color}`};
`;

export const ViewContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ViewImage = styled.View`
  flex: 0.7;
  align-items: center;
  justify-content: flex-start;
`;

export const ViewLabel = styled.View`
  flex: 1.5;
  padding: 10px;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

/*export const Image = styled.Image`
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  flex: 1;
  aspect-ratio: 1;
  resize-mode: contain;
  height: 200px;
  width: 200px;
  resizeMode: cover;
  position: absolute;
`;
*/
export const Label = styled.Text`
  padding-horizontal: 8px;
  padding-vertical: 6px;
  border-radius: 15px;
  background-color: rgb(244, 125, 126);
  align-self: flex-start;
  margin-horizontal: 1%;
  margin-bottom: 6px;
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  color: white;
`;

export const Link = styled.TouchableOpacity``;
export const ViewFavorite = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Favorite = styled(Icone).attrs(props => ({
  nome: props.name,
  tamanho: 25,
  cor: '#FFF',
  estilo: {
    paddingLeft: 10,
    alignItems: 'center',
  },
}))``;