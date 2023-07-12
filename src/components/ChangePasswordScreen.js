/* eslint-disable global-require */
import React, {useState} from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
// style
import styles from '../styles/myStyle';

const ChangePasswordScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfile')}
          style={{flexDirection: 'row'}}>
          <Image
            source={require('../asset/back.png')}
            style={{
              borderWidth: 0.5,
              borderRadius: 10,
              margin: 20,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: '#EFC81A',
              marginLeft: 50,
              margin: 30,
            }}>
            Change Password
          </Text>
        </TouchableOpacity>

        <View style={styles.sectionStyle}>
          <AntdesignIcon name="lock" size={25} style={{margin: 10}} />
          <TextInput
            style={{flex: 1}}
            placeholder="New Password"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.sectionStyle}>
          <AntdesignIcon name="unlock" size={25} style={{margin: 10}} />
          <TextInput
            style={{flex: 1}}
            placeholder="Confirm New Password"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <SafeAreaView>
            <TouchableOpacity style={styles.button} onPress={() => Register()}>
              <Text style={{color: '#ffffff'}}>Change Password</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
