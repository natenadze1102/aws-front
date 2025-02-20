import React from 'react';
import { Skeleton } from '@/components/ui/skeleton'; // Adjust the import path as needed

export const SkeletonForm = () => {
  return (
    <div className="space-y-6 p-4">
      {/* Form Title Skeleton */}
      <Skeleton className="h-6 w-1/4" />

      <div className="space-y-4">
        {/* First Field */}
        <div>
          {/* Label Skeleton */}
          <Skeleton className="h-4 w-1/3 mb-2" />
          {/* Input Skeleton */}
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        {/* Second Field */}
        <div>
          <Skeleton className="h-4 w-1/3 mb-2" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        {/* Third Field */}
        <div>
          <Skeleton className="h-4 w-1/3 mb-2" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      </div>

      {/* Submit Button Skeleton */}
      <Skeleton className="h-10 w-1/3 rounded-md" />
    </div>
  );
};
