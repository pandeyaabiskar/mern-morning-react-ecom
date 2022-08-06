import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productData: [],
  isPending: false,
  error : ''
};

export const getAllProductData = createAsyncThunk("product/getAllProductData", async () => {
  try {
    const { data } = await axios("http://localhost:4000/api/products");
    return data;
  } catch (err) {
    return err
  }
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProductData.pending] : (state) => {
      state.isPending = true;
    },
    [getAllProductData.fulfilled] : (state, action) => {
      state.productData = action.payload;
      state.isPending = false;
    },
    [getAllProductData.rejected] : (state, action) => {
      state.error = action.payload
      state.isPending = false;
    }
  }
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
