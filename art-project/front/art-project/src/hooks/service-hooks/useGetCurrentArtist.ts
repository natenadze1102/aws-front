'use client';

import { getCurrentArtist } from '@/services/artist';
import { useQuery } from '@tanstack/react-query';

export const useGetCurrentArtist = () => {
  const { data: artist, isLoading } = useQuery({
    queryKey: ['current-artist-info'],

    queryFn: getCurrentArtist,
  });

  return { artist, isLoading };
};
