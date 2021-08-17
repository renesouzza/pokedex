// import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox, StatusBar} from 'react-native';

LogBox.ignoreAllLogs();

import AuthProvider from './src/contexts/auth';

import Routes from './src/routes/index';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
