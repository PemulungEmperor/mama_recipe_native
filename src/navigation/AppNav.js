import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';

import AppStack from './AppStack';
import AuthStack from './AuthStack';

const AppNav = () => {
  const {isLoading, userToken} = useContext(AuthContext);

  if (isLoading) {
    <View style={{flex: 1, justifyCcontent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" />
    </View>;
  }
  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
