// src/hooks/useProductList.ts
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buildProductQuery } from '@/redux/stores/productSlice';
import { fetchProductList } from '@/redux/thunks/productThunk';
import { RootState, AppDispatch } from '@/redux/stores/store';

export const useProductList = (isFilter = true, page = 1, limit = 50 ) => {
  const dispatch = useDispatch<AppDispatch>();

    const { items, loading, error, category_id,...query }:any = useSelector((state: RootState) => state.product);


  // Tối ưu hóa queryString để chỉ thay đổi khi các phần liên quan thay đổi
  const queryString = useMemo(() => {
    const q = `page=${page}&limit=${limit}&with=image,categories${
      isFilter ? `&${buildProductQuery(query)}` : ''
    }`;
    return q;
  }, [query, page, limit, isFilter]);

  useEffect(() => {
    dispatch(fetchProductList({ category_id, queryString }));
  

  }, [queryString,category_id]);

  return { data: items, loading, error };
};
