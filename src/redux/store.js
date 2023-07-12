import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import ProductSlicer from './reducer/ProductSlicer';

// reducer
import RegisterSlicer from './reducer/RegisterSlicer';
import UserSlicer from './reducer/UserSlicer';

const store = configureStore({
  reducer: {
    user: UserSlicer,
    register: RegisterSlicer,
    products: ProductSlicer,
  },
  middleware: [logger],
});

export default store;
