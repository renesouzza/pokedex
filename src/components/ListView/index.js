import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../contexts/auth';

import {
  ViewNameFavorite,
  ViewFavorite,
  Favorite,
  Container,
  Link,
  List,
  ViewContainerItem,
  ViewName,
  Name,
  ViewLabelImage,
  ViewLabel,
  Label,
  ViewImage,
  Image,
} from './styles';

export default function ListView({data, reloadData, nextPage}) {
  const {favorities, addFavorite, removeFavorite} = useContext(AuthContext);
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const favorite = function (item) {
    let id = item.id;
    return favorities.find(item => item.id == id)?.favorite;
  }

  const renderItem = ({item}) => (
    <ViewContainerItem>
      <Link onPress={() => navigation.navigate('Details', {item})}>
        <ViewNameFavorite>
          <ViewName>
            <Name>
              #{String(item.id).padStart(3, '0')} {item.name}
            </Name>
          </ViewName>
          <ViewFavorite>
            <Link onPress={() => {favorite(item) ? removeFavorite(item) : addFavorite(item);}}>
              <Favorite name={favorite(item) ? "favorite" : "favorite-outline"} />
            </Link>
          </ViewFavorite>
        </ViewNameFavorite>
        <ViewLabelImage>
          <ViewLabel>
            <Label>{item.name}</Label>
          </ViewLabel>
          <ViewImage>
            <Image source={{uri: item.image}} />
          </ViewImage>
        </ViewLabelImage>
      </Link>
    </ViewContainerItem>
  );

  return (
    <Container>
      <List
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
        refreshing={refreshing}
        onRefresh={reloadData}
        onEndReached={nextPage}
        onEndReachedThreshold={0.1}
      />
    </Container>
  );
}
