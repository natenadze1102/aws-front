'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useGetUser } from '@/hooks/service-hooks/useGetUser';
import { LayoutDashboard, LogOut } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const User = () => {
  const { user } = useGetUser();

  if (!user) return;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shasscn.png" alt="@shadcn" />
          <AvatarFallback>ART</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-w-3xs w-full">
        <DropdownMenuLabel>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shasscn.png" alt="@shadcn" />
              <AvatarFallback>ART</AvatarFallback>
            </Avatar>

            <div className="max-w-[95%] truncate">
              <span>{user.email}</span>
              <div>
                <span>ID:</span>
                <span className="">{user.id}</span>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <div>
            <LayoutDashboard />
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <div>
            <LogOut />
            <Link href={`${process.env.NEXT_PUBLIC_URL}/logout`}>Logout</Link>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
