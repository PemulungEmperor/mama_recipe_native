import React, {useContext, useState, useEffect} from 'react';
// import axios from 'axios';
import {Link} from '@react-navigation/native';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';

import {
  Image,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

// redux
// import {useDispatch, useSelector} from 'react-redux';
// import {loginUser} from '../redux/apiCall.js';

import {AuthContext} from '../context/AuthContext';
import MY_LOCAL from '../../processlocal';
// style
import styles from '../styles/myStyle';

const LoginScreen = () => {
  // with useContext
  const {login} = useContext(AuthContext);

  // credentials
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // image random
  const images = ['front0.jpg', 'front1.jpg', 'front2.jpg', 'front3.jpg'];
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={{
            uri: MY_LOCAL + '/src/asset/' + currentImage,
          }}
          style={{
            width: 200,
            height: 200,
            marginVertical: 10,
            borderRadius: 200,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#EFC81A',
            marginBottom: 15,
          }}>
          Welcome !
        </Text>
        <Text>Log in into your exiting account.</Text>
      </View>

      {/* Input form maybe?! */}
      <View>
        <View style={styles.sectionStyle}>
          <AntdesignIcon name="user" size={25} style={{margin: 10}} />
          <TextInput
            style={{flex: 1}}
            placeholder="examplexxx@gmail.com"
            underlineColorAndroid="transparent"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>

        <View style={styles.sectionStyle}>
          <AntdesignIcon name="lock" size={25} style={{margin: 10}} />
          <TextInput
            style={{flex: 1}}
            placeholder="Password"
            underlineColorAndroid="transparent"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>

        {/* <Input
          placeholder="INPUT WITH ICON"
          leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
        /> */}

        <Link
          to={{screen: 'Forgot'}}
          style={{textAlign: 'right', marginRight: 40}}>
          Forgot Password ?
        </Link>

        <View style={{alignItems: 'center'}}>
          <SafeAreaView>
            <TouchableOpacity
              style={styles.button}
              onPress={() => login(email, password)}>
              <Text style={{color: '#ffffff'}}>LOG IN</Text>
            </TouchableOpacity>
          </SafeAreaView>

          <Text style={{marginTop: 10}}>
            Don`t have an account?{' '}
            <Link
              to={{screen: 'Register'}}
              style={{
                color: '#EFC81A',
                fontWeight: 'bold',
                margin: 10,
              }}>
              Sign Up
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
