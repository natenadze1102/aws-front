'use client';

import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/axios-instance';

export const useProduct = () => {
  const fetchFn = async () => {
    const result = await axiosInstance.get('/products/1'); // Replace with your API endpoint

    return result;
  };

  const query = useQuery({ queryKey: ['product'], queryFn: fetchFn });

  return query.data;
};
