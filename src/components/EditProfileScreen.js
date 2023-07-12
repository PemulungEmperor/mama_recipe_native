/* eslint-disable global-require */
import React, {useContext, useState} from 'react';

import {
  Image,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';
import {useDispatch, useSelector} from 'react-redux';
// redux
import {changePhotoPath} from '../redux/reducer/UserSlicer';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {userInfo} = useContext(AuthContext);
  const user = useSelector(state => state.user);
  // image data
  const [cameraPhoto, setCameraPhoto] = useState();
  const [uploadedType, setUploadedType] = useState();
  const [uploadedName, setuploadedName] = useState();

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
    includeBae64: 'true',
    path: 'images',
  };
  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      try {
        const result = await launchCamera(options);
        setCameraPhoto(result.assets[0].uri);
        setuploadedName(result.assets[0].fileName);
        setUploadedType(result.assets[0].type);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const openGallery = async () => {
    try {
      const result = await launchImageLibrary(options);
      if (result.assets[0].fileSize > 3097152) {
        Alert.alert(
          'Maximum image size exceeded',
          'Please choose image under 3mb',
          [{text: 'Got It'}],
        );
      } else {
        setCameraPhoto(result.assets[0].uri);
        setuploadedName(result.assets[0].fileName);
        setUploadedType(result.assets[0].type);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // alert 3 option
  const ThreeButtonAlert = () =>
    Alert.alert('Change Profile Picture', 'Pick source', [
      {
        text: 'From Camera',
        onPress: () => openCamera(),
      },
      {
        text: 'From Gallery',
        onPress: () => openGallery(),
      },
      {text: 'Cancel', onPress: () => console.log('OK Pressed')},
    ]);

  const updatePhoto = () => {
    let formData = new FormData();
    formData.append('photoPath', {
      uri: cameraPhoto,
      type: uploadedType,
      name: uploadedName,
    });

    fetch('http://192.168.31.26:5000/native-update-image/' + userInfo.userId, {
      method: 'PUT',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        response.json();
        dispatch(changePhotoPath(uploadedName));

        alert('Successfully changed photo!');

        navigation.navigate('HomeTabs');
      })
      .catch(err => console.error(err));
    // login()
  };

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
            Edit Profile
          </Text>
        </TouchableOpacity>
        <View style={{marginLeft: 30, marginTop: 10}}>
          <View
            style={{
              height: 30,
              width: 350,
              shadowOpacity: 0,
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
            }}>
            <TouchableOpacity onPress={ThreeButtonAlert}>
              <Text style={{color: 'black'}}>Change Profile Picture</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 30,
              width: 350,
              shadowOpacity: 0,
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ChangePassword')}>
              <Text style={{color: 'black'}}>Change Password</Text>
            </TouchableOpacity>
          </View>

          {cameraPhoto && (
            <View>
              <Image
                style={{margin: 50, width: 250, height: 250, borderRadius: 250}}
                resizeMode="cover"
                source={{uri: cameraPhoto}}
              />

              <View>
                <TouchableOpacity
                  onPress={updatePhoto}
                  style={{
                    alignItems: 'center',
                    backgroundColor: '#EFC81A',
                    height: 50,
                    width: 350,
                    borderRadius: 10,
                    marginTop: 30,
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontSize: 16, color: 'white'}}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default EditProfileScreen;
