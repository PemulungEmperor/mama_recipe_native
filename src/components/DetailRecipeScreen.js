import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Ingredients from './subComponents/Ingredients';
import VideoRecipe from './subComponents/VideoRecipe';

// asset import
import liked from '../asset/liked.png';
import saved from '../asset/saved.png';

import MY_LOCAL from '../../processlocal';

const DetailRecipeScreen = ({route}) => {
  const {productName, productDescription, productPhoto, videoId} = route.params;

  // toogle tab
  const [tabIngredient, setTabIngredient] = useState(true);
  const [tabVideo, setTabVideo] = useState(false);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={{
          uri: MY_LOCAL + '/src/asset/' + productPhoto,
        }}
        style={{flex: 1, justifyContent: 'flex-end', height: '52%'}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',

              marginLeft: 30,
              width: '40%',
            }}>
            {productName}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#DCDCDC',
              opacity: 0.8,
              marginTop: 5,
              marginBottom: 20,
              marginLeft: 30,
              width: '40%',
            }}>
            By Chef Madison Gray
          </Text>
          <View style={{flexDirection: 'row', marginRight: 20}}>
            <Image source={saved} style={{width: 40, height: 40}} />
            <Image
              source={liked}
              style={{marginLeft: 10, width: 40, height: 40}}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'column',
            height: '51%',
            backgroundColor: 'white',
            borderRadius: 20,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          }}>
          <View style={{flexDirection: 'row', margin: 25}}>
            {tabIngredient === true ? (
              <TouchableOpacity
                onPress={() => {
                  setTabIngredient(true);
                  setTabVideo(false);
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#EFC81A',
                    textDecorationLine: 'underline',
                    // textDecorationColor: '',
                  }}>
                  Ingredients
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setTabIngredient(true);
                  setTabVideo(false);
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#EFC81A',
                  }}>
                  Ingredients
                </Text>
              </TouchableOpacity>
            )}
            {tabVideo === true ? (
              <TouchableOpacity
                onPress={() => {
                  setTabIngredient(false);
                  setTabVideo(true);
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 15,
                    color: '#EFC81A',
                    textDecorationLine: 'underline',
                    // textDecorationColor: '',
                  }}>
                  Video Recipe
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setTabIngredient(false);
                  setTabVideo(true);
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 15,
                    color: '#EFC81A',
                    // textDecorationLine: 'underline',
                    // textDecorationColor: '',
                  }}>
                  Video Recipe
                </Text>
              </TouchableOpacity>
            )}
          </View>
          {tabIngredient ? (
            <Ingredients ingredients={productDescription} />
          ) : (
            <VideoRecipe videoId={videoId} />
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default DetailRecipeScreen;
