/* eslint-disable global-require */
import React, {useContext, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';
import axios from 'axios';
import MY_LOCAL from '../../processlocal';
import Feather from 'react-native-vector-icons/Feather';
import {getDataProduct} from '../redux/apiCall';
import {useDispatch} from 'react-redux';

const MyRecipeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {userInfo} = useContext(AuthContext);
  const [userProduct, setUserProduct] = useState([]);

  const getUserProduct = async () => {
    const response = await axios.get(
      'http://192.168.31.26:5000/productUser/102',
    );
    setUserProduct(response.data);
  };

  const deleteProduct = id => {
    Alert.alert('Are you sure delete this?', 'Confirmation', [
      {
        text: 'Yes',
        onPress: async () => {
          await axios.delete('http://192.168.31.26:5000/product/delete/' + id);
          getDataProduct(dispatch);
          alert('Successfully delete recipe!');
          navigation.navigate('HomeTabs');
        },
      },

      {text: 'Cancel', onPress: () => console.log('OK Pressed')},
    ]);
  };

  useEffect(() => {
    getUserProduct();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeTabs')}
          style={{flexDirection: 'row'}}>
          <Image
            source={require('../asset/back.png')}
            style={{
              borderWidth: 0.5,
              borderRadius: 10,
              marginLeft: 30,
              margin: 20,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: '#EFC81A',
              marginLeft: 60,
              margin: 30,
            }}>
            My Recipe
          </Text>
        </TouchableOpacity>
        {
          /* <View style={{flex: 1}}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
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
          </TouchableOpacity>
        </View> */
          <FlatList
            data={userProduct}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableWithoutFeedback
                style={{flex: 1}}
                onPress={() =>
                  navigation.navigate('DetailRecipe', {
                    productName: item.food_name,
                    productDescription: item.ingredients,
                    productPhoto: item.photo_path,
                    videoId: item.video_recipe,
                  })
                }>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={{
                      uri: MY_LOCAL + '/src/asset/' + item.photo_path,
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
                      {item.food_name}
                    </Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('UpdateRecipe', {
                          productId: item.id,
                        })
                      }>
                      <Feather name="edit" size={30} color={'#EFC81A'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{marginLeft: 15}}
                      onPress={() => deleteProduct(item.id)}>
                      <Feather name="trash" size={30} color={'#cc2d2d'} />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        }
      </View>
    </View>
  );
};

export default MyRecipeScreen;
