import axios from 'axios';
import {
  startRegister,
  successRegister,
  errorRegister,
} from './reducer/RegisterSlicer';
import {startGetProduct, getProduct} from './reducer/ProductSlicer';

import {startLogin, successLogin, errorLogin} from './reducer/UserSlicer';

export const registerUser = async (userData, dispatch) => {
  dispatch(startRegister());
  try {
    await fetch('http://192.168.31.26:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: userData,
    })
      .then(response => response.json())
      .then(responseData => {
        setTimeout(() => {
          dispatch(successRegister(responseData));
        }, 2000);
      });
  } catch (err) {
    setTimeout(() => {
      dispatch(errorRegister());
    }, 2000);
  }
};

export const loginUser = async (userData, dispatch) => {
  dispatch(startLogin());
  try {
    await fetch('http://192.168.31.26:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: userData,
    })
      .then(response => response.json())
      .then(responseData => {
        setTimeout(() => {
          dispatch(successLogin(responseData));
        }, 2000);
      });
  } catch (err) {
    setTimeout(() => {
      dispatch(errorLogin());
    }, 2000);
  }
};

// get data
export const getDataProduct = async dispatch => {
  dispatch(startGetProduct());
  try {
    const response = await axios.get('http://192.168.31.26:5000/product');
    dispatch(getProduct(response.data));
  } catch (err) {
    dispatch(err);
  }
};
