import React, {useState, useContext, useEffect} from 'react';
import Header from '../../components/Header';
import {AuthContext} from '../../contexts/auth';

import {Text, View, Image} from 'react-native';

import {Background, ViewContainer, Label, Link, Favorite, ViewFavorite} from './styles';

import {
  getPokemons,
  getPokemonByName,
  formatItems,
  formatDetail,
} from '../../services/pokemonApi';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function Details({route}) {
  const {favorities, addFavorite, removeFavorite} = useContext(AuthContext);
  const [item, setItem] = useState([]);
  const id = route.params?.item?.id;
  
  const favorite = favorities?.find(item => item.id == id)?.favorite;

  useEffect(() => {
    async function searchPokemon(filter) {
      console.log(filter);
      await getPokemonByName(filter)
        .then(response => {
          const result = formatDetail(response.data);

          setItem(result);
        })
        .catch(err => {
          console.error('ops! ocorreu um erro' + err);
        });
    }

    !!id && searchPokemon(id);
  }, [id]);

  return (
    <Background color={item?.color}>
      <Header actionName="back" />

      <ViewContainer>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: '#FFF'}}>{item?.name}</Text>
          <Text style={{fontSize: 15, color: '#FFF', fontWeight: 'bold'}}>
            #{String(item.id).padStart(3, '0')}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            {item?.types?.map(item => {
              return <Label>{item?.name}</Label>;
            })}
          </View>
          <View style={{alignItems: 'center'}}>
            {/* <Text style={{fontSize: 15, color: '#FFF'}}>Seed Pokemon</Text> */}
            <ViewFavorite>
              <Link
                onPress={() => {
                  favorite ? removeFavorite(item) : addFavorite(item);
                }}>
                <Favorite
                  name={favorite ? 'favorite' : 'favorite-outline'}
                />
              </Link>
            </ViewFavorite>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            zIndex: 999,
          }}>
          <Image
            style={{
              marginBottom: -40,
              resizeMode: 'contain',
              flex: 1,
              width: undefined,
              height: undefined,
            }}
            source={{uri: item?.image}}
          />
        </View>

        <View
          style={{
            flex: 2.5,
            flexDirection: 'column',
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: 'rgb(245, 245, 246)',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'column',
            }}></View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <NavigationContainer independent={true}>
              <Tab.Navigator
                initialRouteName="About"
                activeColor="red"
                tabBarOptions={{
                  activeTintColor: '#000',
                  inactiveTintColor: 'grey',
                  style: {
                    borderTopColor: 'transparent',
                    backgroundColor: 'transparent',
                    elevation: 0,
                  },
                }}>
                <Tab.Screen
                  name="Abilities"
                  children={() => <AbilitiesScreen pokemon={item} />}
                />
                <Tab.Screen
                  name="Moves"
                  children={() => <MovesScreen pokemon={item} />}
                />
                <Tab.Screen
                  name="Stats"
                  children={() => <StatsScreen pokemon={item} />}
                />
                <Tab.Screen
                  name="Types"
                  children={() => <TypesScreen pokemon={item} />}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </View>
        </View>
      </ViewContainer>
    </Background>
  );
}

function AbilitiesScreen({pokemon}) {
  console.log('ABBBBABABA', pokemon);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {pokemon?.abilities?.map(item => {
        return <Text>{item?.name}</Text>;
      })}
    </View>
  );
}

function MovesScreen({pokemon}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {pokemon?.moves?.map(item => {
        return <Text>{item?.name}</Text>;
      })}
    </View>
  );
}

function StatsScreen({pokemon}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {pokemon?.stats?.map(item => {
        return (
          <>
            <Text>{item?.name}</Text>
            <Text>{item?.base_stat}</Text>
            <Text>{item?.effort}</Text>
          </>
        );
      })}
    </View>
  );
}

function TypesScreen({pokemon}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {pokemon?.types?.map(item => {
        return <Text>{item?.name}</Text>;
      })}
    </View>
  );
}
