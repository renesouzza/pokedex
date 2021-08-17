import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {
  CommonActions,
  DrawerActions,
  useLinkBuilder,
} from '@react-navigation/native';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {AuthContext} from '../../contexts/auth';

export default function CustomContentDrawer(props) {
  const {user, signOut} = useContext(AuthContext);
  const buildLink = useLinkBuilder();

  const state = props.state;
  const navigation = props.navigation;
  const descriptors = props.descriptors;
  const activeTintColor = props.activeTintColor;
  const inactiveTintColor = props.inactiveTintColor;
  const activeBackgroundColor = props.activeBackgroundColor;
  const inactiveBackgroundColor = props.inactiveBackgroundColor;
  const itemStyle = props.itemStyle;
  const labelStyle = props.labelStyle;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
        <Image
          source={require('../../assets/icon.png')}
          style={{width: 85, height: 85}}
          resizeMode="contain"
        />

        <Text style={{color: '#FFF', fontSize: 18, marginTop: 5}}>
          Bem-vindo
        </Text>
        <Text
          style={{
            color: '#FFF',
            fontSize: 17,
            fontWeight: 'bold',
            paddingBottom: 25,
          }}>
          {user && user.nome}
        </Text>
      </View>
      {/* <Text style={styles.border}></Text> */}
      <DrawerContentScrollView {...props}>
        {state.routes.map((route, i) => {
          if (route.name === 'App') return;
          const focused = i === state.index;
          const {title, drawerLabel, drawerIcon} =
            descriptors[route.key].options;

          return (
            <DrawerItem
              key={route.key}
              label={
                drawerLabel !== undefined
                  ? drawerLabel
                  : title !== undefined
                  ? title
                  : route.name
              }
              icon={drawerIcon}
              focused={focused}
              activeTintColor={activeTintColor}
              inactiveTintColor={inactiveTintColor}
              activeBackgroundColor={activeBackgroundColor}
              inactiveBackgroundColor={inactiveBackgroundColor}
              labelStyle={labelStyle}
              style={itemStyle}
              to={buildLink(route.name, route.params)}
              onPress={() => {
                navigation.dispatch({
                  ...(focused
                    ? DrawerActions.closeDrawer()
                    : CommonActions.navigate(route.name)),
                  target: state.key,
                });
              }}
            />
          );
        })}
      </DrawerContentScrollView>
      <View style={styles.bottomView}>
        <View
          style={styles.bottomViewContent}>
          <DrawerItem
            {...props}
            label="Sair do app"
            inactiveBackgroundColor="#c62c36"
            onPress={() => signOut()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'white',
    marginTop: '33%',
    marginLeft: 14,
  },
  subtitle: {
    color: 'white',
    marginLeft: 14,
  },
  border: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#33383b',
    height: 0,
  },
  bottomView: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    width: '100%',
    backgroundColor: 'rgb(16, 16, 16)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  bottomViewContent: {
    flex: 1,
    flexDirection: 'column',
  }
});
