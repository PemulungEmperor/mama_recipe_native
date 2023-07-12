import React, {useEffect} from 'react';
import {View, ScrollView, Image, Text} from 'react-native';
import {useSelector} from 'react-redux';

const ProductResult = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
          }}
          style={{
            width: 125,
            height: 125,
            borderRadius: 20,
            margin: 20,
            marginLeft: 30,
          }}
        />
        <View style={{width: 100, justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: '500',
              margin: 20,
              marginLeft: 5,
            }}>
            Adobo Chicken
          </Text>
        </View>

        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../asset/saved.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 20,
            }}
          />
          <Image
            source={require('../asset/liked.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 20,
              marginLeft: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductResult;
