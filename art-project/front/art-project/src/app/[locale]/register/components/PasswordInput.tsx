import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

type Props<T extends FieldValues> = {
  label?: string;
  name?: Path<T>;
  form: UseFormReturn<T>;
};

export const PasswordInput = <T extends FieldValues>({
  form,
  label = 'Password',
  name = 'password' as Path<T>,
}: Props<T>) => {
  const [isView, setIsView] = useState(false);
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div>
              <FormLabel htmlFor={label}>{label}</FormLabel>
              <div className='relative'>
                <Input id={label} {...field} type={isView ? 'text' : 'password'} />
                {isView ? (
                  <Eye
                    className='absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer w-5 h-5 text-gray-500'
                    onClick={() => setIsView(!isView)}
                  />
                ) : (
                  <EyeOff
                    className='absolute right-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer w-5 h-5 text-gray-500'
                    onClick={() => setIsView(!isView)}
                  />
                )}
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
