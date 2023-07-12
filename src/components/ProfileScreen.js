/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, {useContext, useEffect} from 'react';
import {Image, SafeAreaView, Text, View, TouchableOpacity} from 'react-native';

// icon
import Feather from 'react-native-vector-icons/Feather';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';
import MY_LOCAL from '../../processlocal';
import {useSelector} from 'react-redux';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const {logout, userInfo} = useContext(AuthContext);

  //data redux store
  const user = useSelector(state => state.user);

  useEffect(() => {}, [user]);
  return (
    <View style={{flex: 1, backgroundColor: '#EFC81A'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{
            width: 100,
            height: 100,
            borderWidth: 0.5,
            borderColor: 'black',
            borderRadius: 100,
          }}
          source={{
            uri:
              MY_LOCAL +
              '/src/asset/profilePic/' +
              user.userCredentials.photo_path,
          }}
        />
        <Text
          style={{
            marginTop: 10,
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
          }}>
          {user.userCredentials.username}
          {/* {user.userCredentials.photo_path} */}
        </Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: 'white',
            borderColor: 'black',
            height: 400,
            margin: 10,
            borderRadius: 10,

            marginTop: -50,
          }}>
          <SafeAreaView style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Feather name="user" size={30} color="#EFC81A" />
                <Text
                  style={{
                    margin: 5,
                    marginLeft: 10,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Edit Profile
                </Text>
              </View>
              <Feather name="chevron-right" size={30} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('MyRecipe')}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Feather name="award" size={30} color="#EFC81A" />
                <Text
                  style={{
                    margin: 5,
                    marginLeft: 10,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  My Recipe
                </Text>
              </View>
              <Feather name="chevron-right" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert('Cooming soon!')}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Feather name="bookmark" size={30} color="#EFC81A" />
                <Text
                  style={{
                    margin: 5,
                    marginLeft: 10,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Saved Recipe
                </Text>
              </View>
              <Feather name="chevron-right" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert('Cooming soon!')}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
              }}>
              <View style={{flexDirection: 'row'}}>
                <AntdesignIcon name="like2" size={30} color="#EFC81A" />
                <Text
                  style={{
                    margin: 5,
                    marginLeft: 10,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Liked Recipe
                </Text>
              </View>
              <Feather name="chevron-right" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
              }}
              onPress={() => logout()}>
              <View style={{flexDirection: 'row'}}>
                <Feather name="log-out" size={30} color="#EFC81A" />
                <Text
                  style={{
                    margin: 5,
                    marginLeft: 10,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  logout
                </Text>
              </View>
              <Feather name="chevron-right" size={30} />
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
