import { useMutation } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';
import { toast } from './use-toast';
import { IArtistRegisterApi, registerArtist } from '@/services/artist';

const mutationKey = ['register-artist'];

export const useRegisterArtist = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationKey,
    mutationFn: (input: IArtistRegisterApi) => registerArtist({ ...input }),
    onSuccess() {
      router.push('/');
    },
    onError(error) {
      toast({
        variant: 'destructive',
        description: error.message,
        title: 'Registration failed',
      });
    },
  });

  return mutation;
};
