import React, {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../../contexts/auth';

export default function Settings() {
  const {user, signOut} = useContext(AuthContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/pokedex.png')}
            style={{width: 200, height: 200}}
            resizeMode="contain"
          />
          <Text
            style={{
              color: '#000',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {user?.nome}
          </Text>
        </View>

        <View
          style={{
            alignSelf: 'stretch',
            textAlign: 'center',
            margin: 15,
          }}>
          <TouchableOpacity onPress={() => signOut()}>
            <View
              style={{
                backgroundColor: '#2196F3',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  padding: 20,
                  color: 'white',
                }}>
                Sair do app
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
