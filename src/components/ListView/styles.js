import React from 'react';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

const Icone = ({nome, tamanho, cor, estilo}) => (
  <MaterialCommunityIcons
    name={nome}
    size={tamanho}
    color={cor}
    style={estilo}
  />
);

export const Container = styled.View`
  flex: 1;
  margin: 8px;
`;

export const Link = styled.TouchableOpacity``;

export const List = styled.FlatList``;

export const ViewContainerItem = styled.View`
  flex: 1;
  padding: 3px;
  max-width: 50%;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
`;

export const ViewNameFavorite = styled.View`
  flex-direction: row;
  background-color: transparent;
`;

export const ViewName = styled.View`
  flex: 2;
  height: 40px;
  padding-top: 10px;
  padding-left: 10px;
  border-top-start-radius: 15px;
  background-color: rgb(243, 106, 107);
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Name = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 15px;
`;

export const ViewFavorite = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-top-end-radius: 15px;
  background-color: rgb(243, 106, 107);
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

export const ViewLabelImage = styled.View`
  flex-direction: row;
  background-color: transparent;
`;

export const ViewLabel = styled.View`
  flex: 1;
  padding: 5px;
  height: 80px;
  background-color: rgb(243, 106, 107);
  border-bottom-start-radius: 15px;
`;

export const Label = styled.Text`
  padding-horizontal: 8px;
  padding-vertical: 6px;
  border-radius: 15px;
  background-color: rgb(244, 125, 126);
  align-self: flex-start;
  margin-horizontal: 1%;
  margin-bottom: 6px;
  min-width: 48%;
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  color: white;
`;

export const ViewImage = styled.View`
  flex: 2;
  height: 80px;
  background-color: rgb(243, 106, 107);
  align-items: center;
  justify-content: center;
  border-bottom-end-radius: 15px;
`;

export const Image = styled.Image`
  height: 95px;
  width: 95px;
`;
