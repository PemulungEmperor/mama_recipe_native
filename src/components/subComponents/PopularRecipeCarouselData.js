import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MY_LOCAL from '../../../processlocal';

// eslint-disable-next-line react/prop-types
const PopularRecipeCarouselData = ({
  productName,
  productPhoto,
  productDescription,
  videoId,
}) => {
  const navigation = useNavigation();

  return (
    <View style={{height: 180, width: 300, marginHorizontal: 20}}>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('DetailRecipe', {
            productName,
            productDescription,
            productPhoto,
            videoId,
          })
        }>
        <View style={{flex: 1}}>
          <View style={{flex: 2}}>
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
              }}
            />
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              width: 120,
              position: 'absolute',
              bottom: 0,
              marginBottom: 20,
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text
                style={{
                  flex: 2,
                  fontSize: 18,
                  color: 'white',
                  fontWeight: 'bold',
                  marginLeft: 20,
                }}>
                {productName}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default PopularRecipeCarouselData;
