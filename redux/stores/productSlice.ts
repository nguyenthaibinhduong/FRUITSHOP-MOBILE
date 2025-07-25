
// src/redux/slices/productSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProductList } from '../thunks/productThunk';

interface ProductQueryState {
  keySearch?: string;
  valueSearch?: string;
  filters: Record<string, any>;
  orderBy?: string;
  orderType?: 'ASC' | 'DESC';
  with?: string[];
  hiddenFields?: string[];
  limit?: number;
category_id:string
  items: any[];         // danh sách sản phẩm
  loading: boolean;
  error?: any;
}


const initialState: ProductQueryState = {
  filters: {},
  category_id:'',
  limit: 10,
  items: [],
  loading: false,
  error: undefined,
};


const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setKeySearch(state, action: PayloadAction<{ key: string; value: string }>) {
      state.keySearch = action.payload.key;
      state.valueSearch = action.payload.value;
    },
    setFilter(state, action: PayloadAction<{ field: string; value: any }>) {
      state.filters[action.payload.field] = action.payload.value;
    },
    clearFilters(state) {
      state.filters = {};
    },
    setOrder(state, action: PayloadAction<{ orderBy: string; orderType: 'ASC' | 'DESC' }>) {
      state.orderBy = action.payload.orderBy;
      state.orderType = action.payload.orderType;
    },
    setWith(state, action: PayloadAction<string[]>) {
      state.with = action.payload;
    },
     setCategory(state, action: PayloadAction<string>) {
      state.category_id = action.payload;
    },
    setHiddenFields(state, action: PayloadAction<string[]>) {
      state.hiddenFields = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    resetQuery(state) {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});


export const buildProductQuery = (state: ProductQueryState): string => {
  const params = new URLSearchParams();

  if (state.keySearch && state.valueSearch) {
    params.append('keySearch', state.keySearch);
    params.append('valueSearch', state.valueSearch);
  }

  if (state.filters) {
    Object.entries(state.filters).forEach(([key, value]) => {
      params.append(`filters[${key}]`, value);
    });
  }

  if (state.orderBy && state.orderType) {
    params.append('orderBy', state.orderBy);
    params.append('orderType', state.orderType);
  }

  if (state.with && state.with.length > 0) {
    params.append('with', state.with.join(','));
  }

  if (state.hiddenFields && state.hiddenFields.length > 0) {
    params.append('hiddenFields', state.hiddenFields.join(','));
  }

  if (state.limit) {
    params.append('limit', state.limit.toString());
  }

  return params.toString();
};
export { fetchProductList };

export const {
  setKeySearch,
  setFilter,
  clearFilters,
  setOrder,
  setWith,
  setHiddenFields,
  setLimit,
  resetQuery,
  setCategory
} = productSlice.actions;

export default productSlice.reducer;
