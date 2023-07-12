/* eslint-disable global-require */
import React from 'react';
import {View, Image, Text} from 'react-native';

// eslint-disable-next-line react/prop-types
const PopularRecipeCarouselData = ({categoryName}) => {
  let logo;
  if (categoryName === 'Soup') {
    logo = require('../../asset/soupLogo.png');
  } else if (categoryName === 'Seafood') {
    logo = require('../../asset/fishLogo.png');
  } else {
    logo = require('../../asset/tableWareLogo.png');
  }
  return (
    <View style={{height: 100, width: 75, marginLeft: 20}}>
      <View style={{flex: 2}}>
        <Image
          // eslint-disable-next-line import/no-dynamic-require
          source={logo}
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'cover',
            borderRadius: 10,
          }}
        />
      </View>

      <View style={{flex: 1}}>
        <Text
          style={{
            flex: 2,
            fontSize: 12,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {categoryName}
        </Text>
      </View>
    </View>
  );
};

export default PopularRecipeCarouselData;
