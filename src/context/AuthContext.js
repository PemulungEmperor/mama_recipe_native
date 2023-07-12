/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

// redux
import {
  startLogin,
  successLogin,
  errorLogin,
} from '../redux/reducer/UserSlicer';
import {useDispatch} from 'react-redux';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
  const [isLoading, setisLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  // credential data
  const [userInfo, setUserinfo] = useState(null);

  // redux
  const dispatch = useDispatch();

  const login = (email, password) => {
    setisLoading(true);
    dispatch(startLogin());
    axios
      .post('http://192.168.31.26:5000/login', {
        email,
        password,
      })
      .then(res => {
        console.log(res.data);
        const result = res.data;
        setUserinfo(result);
        setUserToken(result.accessToken);

        AsyncStorage.setItem('userToken', result.accessToken);
        AsyncStorage.setItem('userInfo', JSON.stringify(result));
        dispatch(successLogin(result));
      })
      .catch(e => {
        console.log(e);
        dispatch(errorLogin());
      });

    setisLoading(false);
  };

  const logout = () => {
    setisLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('userInfo');
    setisLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      const lastUserToken = await AsyncStorage.getItem('userToken');
      let lastUserInfo = await AsyncStorage.getItem('userInfo');
      lastUserInfo = JSON.parse(lastUserInfo);

      if (lastUserInfo) {
        setUserToken(lastUserToken);
        setUserinfo(lastUserInfo);
      }
      setisLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{isLoading, userToken, login, logout, userInfo}}>
      {children}
    </AuthContext.Provider>
  );
};
