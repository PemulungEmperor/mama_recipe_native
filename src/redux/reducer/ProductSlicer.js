import {createSlice} from '@reduxjs/toolkit';

const ProductSlicer = createSlice({
  name: 'products',
  initialState: {isPending: false, isError: false, dataProducts: {}},
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    startGetProduct: (state, action) => {
      state.isPending = true;
    },
    getProduct: (state, action) => {
      state.isPending = false;
      state.isError = false;
      state.dataProducts = action.payload;
    },
  },
});

export const {getProduct, startGetProduct} = ProductSlicer.actions;
export default ProductSlicer.reducer;
