import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

import { Textarea } from '@/components/ui/textarea';

type Props<T extends FieldValues> = {
  form: UseFormReturn<T>;
};

export const BioInput = <T extends FieldValues>({ form }: Props<T>) => {
  return (
    <FormField
      control={form.control}
      name={'bio' as Path<T>}
      render={({ field }) => (
        <FormItem>
          <FormLabel>About</FormLabel>
          <FormControl>
            <Textarea {...field} placeholder='Write about yourself' />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
