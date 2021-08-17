import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styled from 'styled-components/native';

const Icone = ({nome, tamanho, cor, estilo}) => (
  <Icon name={nome} size={tamanho} color={cor} style={estilo} />
);

export const Background = styled.SafeAreaView`
  flex: 1;
  background-color: rgb(255, 255, 255);
`;

export const TitleContainer = styled.View`
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: rgb(255, 255, 255);
`;

export const Title = styled.Text`
  font-size: 50px;
  margin-left: 5px;
  color: #000;
  margin-bottom: 10px;
`;

export const SearchInputContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
  background-color: rgb(255, 255, 255);
`;

export const SearchInputSection = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 206, 75);
  height: 40px;
  border-radius: 25px;
  margin: 10px;
`;

export const SearchInputIcon = styled(Icone).attrs({
  nome: 'search',
  tamanho: 25,
  cor: 'rgb(91, 98, 105)',
  estilo: {
    paddingLeft: 10,
    alignItems: 'center',
  },
})``;

export const SearchInputButton = styled.TouchableOpacity``;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgb(91, 98, 105)',
  underlineColorAndroid: 'transparent',
})`
  flex: 1;
  font-weight: bold;
`;

export const Area = styled.View`
  flex-direction: row;
  margin-left: 15px;
  align-items: baseline;
`;

export const Lista = styled.FlatList.attrs({
  marginHorizontal: 15,
})`
  padding-top: 15px;
  background-color: transparent;
  background-color: #fff;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ListaVazia = styled.View`
  padding-top: 15px;
  background-color: transparent;
  background-color: #fff;
  margin-left: 10px;
  margin-right: 10px;
  height: 100%;
`;

export const PokemonContainer = styled.View`
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: rgb(89, 216, 187);
  border-radius: 10px;
`;