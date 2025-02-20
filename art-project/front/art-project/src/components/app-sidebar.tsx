'use client';

import * as React from 'react';
import { LockKeyhole, Settings, User } from 'lucide-react';

import { NavMain } from '@/components/nav-main';

import { NavUser } from '@/components/nav-user';

import { Sidebar, SidebarContent, SidebarFooter, SidebarRail } from '@/components/ui/sidebar';

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  // teams: [
  //   {
  //     name: 'Acme Inc',
  //     logo: GalleryVerticalEnd,
  //     plan: 'Enterprise',
  //   },
  //   {
  //     name: 'Acme Corp.',
  //     logo: AudioWaveform,
  //     plan: 'Startup',
  //   },
  //   {
  //     name: 'Evil Corp.',
  //     logo: Command,
  //     plan: 'Free',
  //   },
  // ],
  navMain: [
    {
      title: 'Settings',
      url: 'settings',
      icon: Settings,

      isActive: false,
      items: [
        {
          title: 'Profile',
          url: '/dashboard/settings-profile',
          icon: User,
        },
        {
          title: 'Password',
          url: '/dashboard/settings-password',
          icon: LockKeyhole,
        },
      ],
    },

    //   ],
    // },
    // {
    //   title: 'Documentation',
    //   url: '#',
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: 'Introduction',
    //       url: '#',
    //     },
    //     {
    //       title: 'Get Started',
    //       url: '#',
    //     },
    //     {
    //       title: 'Tutorials',
    //       url: '#',
    //     },
    //     {
    //       title: 'Changelog',
    //       url: '#',
    //     },
    //   ],
    // },
  ],
  // projects: [
  //   {
  //     name: 'Design Engineering',
  //     url: '#',
  //     icon: Frame,
  //   },
  //   {
  //     name: 'Sales & Marketing',
  //     url: '#',
  //     icon: PieChart,
  //   },
  //   {
  //     name: 'Travel',
  //     url: '#',
  //     icon: Map,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      {/* <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader> */}
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
