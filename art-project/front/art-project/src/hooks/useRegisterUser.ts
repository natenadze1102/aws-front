import { IUserRegisterApi, registerUser } from '@/services/user';
import { useMutation } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';
import { toast } from './use-toast';

const mutationKey = ['register-user'];

export const useRegisterUser = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationKey,
    mutationFn: (input: IUserRegisterApi) => registerUser({ ...input }),
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
