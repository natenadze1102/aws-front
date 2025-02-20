'use client';

import { getCountries } from '@/services/countries';
import { useQuery } from '@tanstack/react-query';

export const useCountries = () => {
  const { data: countries, isLoading } = useQuery({
    queryKey: ['countries'],

    queryFn: getCountries,
  });

  if (!countries) {
    return { countries: [], isLoading };
  }

  return { countries, isLoading };
};
