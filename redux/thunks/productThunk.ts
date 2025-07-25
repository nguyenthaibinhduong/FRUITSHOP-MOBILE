// src/redux/thunks/productThunk.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/utils/axiosInstance';

export const fetchProductList = createAsyncThunk(
  'product/fetchList',
  async ({category_id, queryString}:any, thunkAPI) => {
    try {
      if (category_id) {
         const res = await axiosInstance.get(`/categories/${category_id}?with=products.image,products.categories`);
        if (res?.data?.data?.products) return res.data.data.products;
      } else {
        const res = await axiosInstance.get(`/products?${queryString}`);
        if(res.data.data) return res.data.data.data;
        
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.response?.data || 'Lỗi không xác định');
    }
  }
);

