import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

type Props<T extends FieldValues> = {
  form: UseFormReturn<T>;
};

export const RepeatPasswordInput = <T extends FieldValues>({ form }: Props<T>) => {
  return (
    <FormField
      control={form.control}
      name={'repeatPassword' as Path<T>}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Repeat Password</FormLabel>
          <FormControl>
            <Input {...field} type='password' />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
