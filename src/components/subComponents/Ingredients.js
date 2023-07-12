import React from 'react';
import {View, Text} from 'react-native';

const Ingredients = ({ingredients}) => {
  return (
    <View
      style={{
        marginLeft: 15,
        alignItems: 'center',
        width: 200,
      }}>
      <Text>{JSON.stringify(ingredients)}</Text>
    </View>
  );
};

export default Ingredients;
