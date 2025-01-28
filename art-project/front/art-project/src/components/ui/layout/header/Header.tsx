import { isAuth } from '@/helpers/is-auth';

import { getUser } from '@/services/user';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Link from 'next/link';

import { User } from './components/User';

export default async function Header() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['user-info'],
    queryFn: getUser,
  });

  const { IsAuthorized } = await isAuth();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='container'>
        <div className='flex justify-end w-full'>
          {!IsAuthorized && (
            <div className='flex gap-4'>
              <Link href={`${process.env.NEXT_PUBLIC_URL}/login`}>Login</Link>
            </div>
          )}
          {IsAuthorized && (
            <>
              <User />
            </>
          )}
        </div>
      </div>
    </HydrationBoundary>
  );
}
