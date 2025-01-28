import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

type Props<T extends FieldValues> = {
  form: UseFormReturn<T>;
};

export const PasswordInput = <T extends FieldValues>({ form }: Props<T>) => {
  return (
    <FormField
      control={form.control}
      name={'password' as Path<T>}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input {...field} type='password' />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
