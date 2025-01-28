'use client';

import { getCountries } from '@/services/countries';
import { useQuery } from '@tanstack/react-query';

export const useCountries = () => {
  const { data: countries, isLoading } = useQuery({
    queryKey: ['countries'],

    queryFn: getCountries,
  });

  return { countries, isLoading };
};
