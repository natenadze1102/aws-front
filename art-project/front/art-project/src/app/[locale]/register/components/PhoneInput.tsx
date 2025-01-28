import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

type Props<T extends FieldValues> = {
  form: UseFormReturn<T>;
};

export const PhoneInput = <T extends FieldValues>({ form }: Props<T>) => {
  return (
    <FormField
      control={form.control}
      name={'phoneNumber' as Path<T>}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Phone</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
