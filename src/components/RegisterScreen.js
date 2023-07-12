/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import {Link, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
// style
import styles from '../styles/myStyle';

// api redux
import {registerUser} from '../redux/apiCall';

const RegisterScreen = () => {
  // navigation
  const navigation = useNavigation();
  // redux
  const dispatch = useDispatch();
  // const {isError, isPending} = useSelector(state => state.register);
  // shown password
  // const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  // const togglePassword = () => {
  //   // inverse the boolean state of passwordShown
  //   setPasswordShown(!passwordShown);
  // };

  // for submit form
  const [names, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  // api interaction with axios to register api
  const Register = async () => {
    // validation
    if (!names.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!email.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!password.trim()) {
      alert('Please Enter Password');
      return;
    }
    if (!confirmPassword.trim()) {
      alert('Please Enter Confirm Password');
      return;
    }
    if (password.trim() !== confirmPassword.trim()) {
      alert('Confirm Password Not Matched');
      return;
    }

    try {
      await registerUser(
        JSON.stringify({
          username: names,
          email,
          password,
          confirmPassword,
        }),
        dispatch,
      );
      await alert('Registered Successfully!');
      navigation.navigate('Login');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center', marginVertical: 20}}>
        <Text
          style={{
            fontSize: 25,
            color: '#EFC81A',
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          Let`s Get Started !
        </Text>
        <Text>Create new account to accessall features</Text>
      </View>
      <View>
        <View style={styles.sectionStyle}>
          <AntdesignIcon name="user" size={25} style={{margin: 10}} />
          <TextInput
            style={{flex: 1}}
            placeholder="name"
            underlineColorAndroid="transparent"
            value={names}
            onChangeText={text => setName(text)}
          />
        </View>

        <View style={styles.sectionStyle}>
          <AntdesignIcon name="mail" size={25} style={{margin: 10}} />
          <TextInput
            style={{flex: 1}}
            placeholder="E-mail"
            underlineColorAndroid="transparent"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>

        <View style={styles.sectionStyle}>
          <AntdesignIcon name="phone" size={25} style={{margin: 10}} />
          <TextInput
            style={{flex: 1}}
            placeholder="Phone Number"
            underlineColorAndroid="transparent"
            value={number}
            onChangeText={text => setNumber(text)}
          />
        </View>

        <View style={styles.sectionStyle}>
          <AntdesignIcon name="lock" size={25} style={{margin: 10}} />
          <TextInput
            style={{flex: 1}}
            placeholder="Create New Password"
            underlineColorAndroid="transparent"
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>

        <View style={styles.sectionStyle}>
          <AntdesignIcon name="unlock" size={25} style={{margin: 10}} />
          <TextInput
            style={{flex: 1}}
            placeholder="Confirm Password"
            underlineColorAndroid="transparent"
            value={confirmPassword}
            onChangeText={text => setconfirmPassword(text)}
          />
        </View>

        <View style={{alignItems: 'center'}}>
          <SafeAreaView>
            <TouchableOpacity style={styles.button} onPress={() => Register()}>
              <Text style={{color: '#ffffff'}}>CREATE</Text>
            </TouchableOpacity>
          </SafeAreaView>

          <Text style={{marginTop: 10}}>
            Already have an account?{' '}
            <Link
              to={{screen: 'Login'}}
              style={{
                color: '#EFC81A',
                fontWeight: 'bold',
                margin: 10,
              }}>
              Log in Here
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
