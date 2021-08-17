import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import {Container, ButtonMenu} from './styles';

export default function Header({actionName}) {
  const navigation = useNavigation();
  const iconName = actionName == "back" ? 'keyboard-backspace' : 'menu';

  const callAction = function () {
    if (!actionName) {
      return navigation.toggleDrawer();
    }

    if (actionName == "back") {
      return navigation.goBack();
    }

  };

  return (
    <Container>
      <ButtonMenu onPress={callAction}>
        <Icon name={iconName} color="#FFF" size={25} />
      </ButtonMenu>
    </Container>
  );
}
