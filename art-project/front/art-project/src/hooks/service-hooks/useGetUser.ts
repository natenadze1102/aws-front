'use client';

import { getUser } from '@/services/user';
import { useQuery } from '@tanstack/react-query';

export const useGetUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user-info'],

    queryFn: getUser,
  });

  return { user, isLoading };
};
