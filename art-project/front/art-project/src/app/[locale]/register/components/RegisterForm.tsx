'use client';

import { ArtistRegisterForm } from './artist-register-form/ArtistRegisterForm';
import { UserRegisterForm } from './user-register-form/UserRegisterForm';
import { useRouter, useSearchParams } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

import { z } from 'zod';
import { userRegisterInputSchema } from '@/services/user';
import { artistRegisterUnputSchema } from '@/services/artist';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export const formSchema = z.union([userRegisterInputSchema, artistRegisterUnputSchema]);
export type IRegisterFormValues = z.infer<typeof formSchema>;

export const RegisterForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isArtistRegistration = searchParams.get('artist') === 'true';

  // Handle tab changes and update the query parameter
  const handleTabChange = (value: string) => {
    const newArtistValue = value === 'artist' ? 'true' : 'false';
    router.push(`/register?artist=${newArtistValue}`);
  };

  return (
    <Tabs
      defaultValue={isArtistRegistration ? 'artist' : 'user'}
      onValueChange={handleTabChange} // Update URL when the tab changes
      className='w-full mb-2'
    >
      <TabsList className='grid w-full grid-cols-2 mb-2'>
        <TabsTrigger className='cursor-pointer' value='user'>
          User Registration
        </TabsTrigger>
        <TabsTrigger className='cursor-pointer' value='artist'>
          Artist Registration
        </TabsTrigger>
      </TabsList>
      {/* User Registration Tab */}
      <Card>
        <TabsContent value='user'>
          <UserRegisterForm />
        </TabsContent>
        {/* Artist Registration Tab */}
        <TabsContent value='artist'>
          <ArtistRegisterForm />
        </TabsContent>

        <div className='w-full flex justify-center mb-2'>
          <Link href='/login'>Already have an account? Sign In</Link>
        </div>
      </Card>
    </Tabs>
  );
};
