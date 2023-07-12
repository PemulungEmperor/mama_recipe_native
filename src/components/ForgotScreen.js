import React from 'react';
import {
  Image,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';

// style
import styles from '../styles/myStyle';

const ForgotScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <Image
          Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
          }}
          style={{
            width: 200,
            height: 200,
            borderRadius: 200,
            marginVertical: 25,
          }}
        />
        <Text style={{fontSize: 18, color: '#EFC81A', marginBottom: 5}}>
          Forgot Password?
        </Text>
        <Text>
          We just need your registered e-mail addres to send your password reset
        </Text>
      </View>

      {/* Input form maybe?! */}
      <View>
        <View style={styles.sectionStyle}>
          <AntdesignIcon name="user" size={25} style={{margin: 10}} />
          <TextInput
            style={{flex: 1}}
            placeholder="examplexxx@gmail.com"
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={{alignItems: 'center'}}>
          <SafeAreaView>
            <TouchableOpacity style={styles.button}>
              <Text style={{color: '#ffffff'}}>Reset Password</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
};

export default ForgotScreen;
