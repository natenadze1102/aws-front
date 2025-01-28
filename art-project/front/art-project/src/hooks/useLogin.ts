import { loginUser } from '@/services/auth';
import { IUserLogin } from '@/services/auth/auth.schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';
import { toast } from './use-toast';

const mutationKey = ['login'];

export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey,
    mutationFn: (input: IUserLogin) => loginUser({ ...input }),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['user-info'] });
      router.push('/');
    },
    onError(error) {
      toast({
        variant: 'destructive',
        description: error.message,
        title: 'Login failed',
      });
    },
  });

  return mutation;
};
