/* eslint-disable react/prop-types */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import MY_LOCAL from '../../../processlocal';

const PopularRecipeCarouselData = ({
  productName,
  productDescription,
  productPhoto,
  videoId,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 180,
        width: 225,
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        marginBottom: 20,
        paddingBottom: 20,
      }}>
      <TouchableWithoutFeedback
        style={{flex: 2}}
        onPress={() =>
          navigation.navigate('DetailRecipe', {
            productName,
            productDescription,
            productPhoto,
            videoId,
          })
        }>
        <Image
          source={{
            uri: MY_LOCAL + '/src/asset/' + productPhoto,
          }}
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'cover',
            borderRadius: 10,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        />
      </TouchableWithoutFeedback>

      <View
        style={{
          flex: 1,
          marginLeft: 20,
          marginTop: 10,
          marginBottom: 10,
          marginRight: 10,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>{productName}</Text>
        <Text style={{fontSize: 10}}>{productDescription}</Text>
      </View>
    </View>
  );
};

export default PopularRecipeCarouselData;
