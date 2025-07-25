import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import axiosInstance from '@/utils/axiosInstance';

const useFetch = (url:string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response: AxiosResponse<any, any> = await axiosInstance.get(url);
        if (isMounted) {
          setData(response.data?.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // tránh lỗi memory leak
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
