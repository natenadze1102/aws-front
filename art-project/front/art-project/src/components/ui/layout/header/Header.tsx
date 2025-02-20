import { isAuth } from '@/helpers/is-auth';

import { getUser } from '@/services/user';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import Link from 'next/link';

import { User } from './components/User';

export default async function Header() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['user-info'],
    queryFn: getUser,
  });

  const { isAuthorized } = await isAuth();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='container'>
        <div className='flex justify-end w-full'>
          {!isAuthorized && (
            <div className='flex gap-4'>
              <Link href={`${process.env.NEXT_PUBLIC_URL}/login`}>Login</Link>
            </div>
          )}
          {isAuthorized && (
            <>
              <User />
            </>
          )}
        </div>
      </div>
    </HydrationBoundary>
  );
}
