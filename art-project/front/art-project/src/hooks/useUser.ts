'use client';

import { getUser } from '@/services/user';
import { useQuery } from '@tanstack/react-query';

export const useUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user-info'],

    queryFn: getUser,
  });

  return { user, isLoading };
};
