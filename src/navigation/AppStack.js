import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../components/HomeScreen';
import AddRecipeScreen from '../components/AddRecipeScreen';
import ProfileScreen from '../components/ProfileScreen';
import DetailRecipeScreen from '../components/DetailRecipeScreen';
import SearchResultScreen from '../components/SearchResultScreen';
import EditProfileScreen from '../components/EditProfileScreen';
import MyRecipeScreen from '../components/MyRecipeScreen';
import ChangePasswordScreen from '../components/ChangePasswordScreen';
import UpdateRecipeScreen from '../components/UpdateRecipeScreen';
// import CameraScreen from '../components/CameraScreen';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return (
              <Ionicons
                name={focused ? 'ios-home-outline' : 'ios-home-outline'}
                size={size}
                color={color}
              />
            );
          }
          if (route.name === 'AddRecipe') {
            return (
              <Ionicons
                name={focused ? 'add-circle-outline' : 'add-circle-outline'}
                size={size}
                color={color}
              />
            );
          }
          if (route.name === 'Camera') {
            return (
              <Ionicons
                name={focused ? 'camera-outline' : 'camera-outline'}
                size={size}
                color={color}
              />
            );
          }
          if (route.name === 'Profile') {
            return (
              <Ionicons
                name={focused ? 'person-outline' : 'person-outline'}
                size={size}
                color={color}
              />
            );
          }
          return 'not found';
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#EFC81A',
        tabBarItemStyle: {marginLeft: 10},
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AddRecipe"
        component={AddRecipeScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailRecipe"
        component={DetailRecipeScreen}
        options={{
          title: '',
          headerTransparent: true,
          // headerTintColor:''
        }}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResultScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyRecipe"
        component={MyRecipeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="UpdateRecipe"
        component={UpdateRecipeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
