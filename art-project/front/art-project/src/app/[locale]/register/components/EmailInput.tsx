import React from 'react';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type Props<T extends FieldValues> = {
  form: UseFormReturn<T>;
};

export const EmailInput = <T extends FieldValues>({ form }: Props<T>) => {
  return (
    <FormField
      control={form.control}
      name={'email' as Path<T>} // Assumes "email" exists in the form type.
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input {...field} type='email' />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
