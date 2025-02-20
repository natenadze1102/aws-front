'use client';

import { useCountries } from '@/hooks/service-hooks/useCountries';
import { useGetCurrentArtist } from '@/hooks/service-hooks/useGetCurrentArtist';
import { UserDashboardSettingsPassword } from '@/modules/user-dashboard/settings/password/UserDashboardSettingsPassword';
import { UserDashboardSettingsProfile } from '@/modules/user-dashboard/settings/profile/UserDashboardSettingsProfile';
import { use } from 'react';

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Find the post matching the dynamic slug
  const { countries } = useCountries();
  const { artist, isLoading } = useGetCurrentArtist();

  // if (!post) {
  //   notFound();
  // }

  const resolvedParams = use(params);
  const currentRoute = resolvedParams.slug;

  const isUserDashboardSettingsProfile = currentRoute === 'settings-profile';
  const isUserDashboardSettingsPassword = currentRoute === 'settings-password';

  if (!artist || !countries) {
    return null;
  }

  return (
    <>
      {isUserDashboardSettingsProfile && (
        <UserDashboardSettingsProfile artist={artist} countries={countries} />
      )}
      {isUserDashboardSettingsPassword && <UserDashboardSettingsPassword />}
    </>
  );
}

// Generate static params for build-time optimization
// export async function generateStaticParams() {
//   return blogPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }
