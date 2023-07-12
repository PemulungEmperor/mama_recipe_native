import React, {useContext, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather';

// apicall
import {getDataProduct} from '../redux/apiCall';

// style
import styles from '../styles/myStyle';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';

const AddRecipeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {userInfo} = useContext(AuthContext);
  // image data
  const [cameraPhoto, setCameraPhoto] = useState();
  const [uploadedType, setUploadedType] = useState();
  const [uploadedName, setuploadedName] = useState();

  // rest form
  const [title, setTitle] = useState();
  const [ingredients, setIngredients] = useState();
  const [video, setVideo] = useState();

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
      }
      setCameraPhoto(result.assets[0].uri);
      setuploadedName(result.assets[0].fileName);
      setUploadedType(result.assets[0].type);
    } catch (e) {
      console.log(e);
    }
  };

  // alert 3 option
  const ThreeButtonAlert = () =>
    Alert.alert('Add Image Recipe', 'Pick source', [
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

  const addRecipe = () => {
    // validation
    if (!title) {
      alert('Please Enter Title');
      return;
    }
    if (!ingredients) {
      alert('Please Enter Description');
      return;
    }
    if (!video) {
      alert('Please Enter Video Id');
      return;
    }
    if (!cameraPhoto) {
      alert('Please Enter Recipe`s Image');
      return;
    }

    let formData = new FormData();
    formData.append('user_id', userInfo.userId);
    formData.append('food_name', title);
    formData.append('ingredients', ingredients),
      formData.append('video_recipe', video),
      formData.append('photoPath', {
        uri: cameraPhoto,
        type: uploadedType,
        name: uploadedName,
      });

    fetch('http://192.168.31.26:5000/product', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        response.json();
        getDataProduct(dispatch);

        alert('Successfully add recipe!');

        navigation.navigate('Home');
      })
      .catch(err => console.error(err));
    // login()
  };

  return (
    <ScrollView scrollEventThrottle={16}>
      <View style={{flex: 1, alignItems: 'center', marginTop: 40}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#EFC81A',
            marginBottom: 30,
          }}>
          Add Your Recipe
        </Text>
        <View style={styles.sectionStyle}>
          <Feather name="book-open" size={25} style={{margin: 10}} />
          <TextInput
            style={{flex: 1}}
            placeholder="Title"
            underlineColorAndroid="transparent"
            value={title}
            onChangeText={text => setTitle(text)}
          />
        </View>
        <View style={styles.sectionStyle}>
          <TextInput
            style={{flex: 1, textAlignVertical: 'top', marginLeft: 10}}
            placeholder="Description"
            underlineColorAndroid="transparent"
            multiline
            numberOfLines={6}
            value={ingredients}
            onChangeText={text => setIngredients(text)}
          />
        </View>
        <View style={styles.sectionStyle}>
          <Feather name="video" size={25} style={{margin: 10}} />
          <TextInput
            style={{flex: 1}}
            placeholder="Add Url Id Video"
            underlineColorAndroid="transparent"
            value={video}
            onChangeText={text => setVideo(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.sectionStyle}
          onPress={ThreeButtonAlert}>
          <Feather name="image" size={25} style={{margin: 10}} />

          <Text style={{flex: 1}} underlineColorAndroid="transparent">
            {!uploadedName ? 'Add Image' : uploadedName}
          </Text>
        </TouchableOpacity>
        {cameraPhoto && (
          <View>
            <Image
              style={{margin: 50, width: 250, height: 250, borderRadius: 250}}
              resizeMode="cover"
              source={{uri: cameraPhoto}}
            />
          </View>
        )}

        <SafeAreaView style={{marginBottom: 20}}>
          <TouchableOpacity onPress={addRecipe} style={styles.buttonAddRecipe}>
            <Text style={{fontSize: 18, color: '#ffffff'}}>POST</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default AddRecipeScreen;
