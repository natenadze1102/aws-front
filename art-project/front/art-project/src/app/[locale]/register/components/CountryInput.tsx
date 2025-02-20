import { FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ICountries } from '@/services/countries';

type Props<T extends FieldValues> = {
  form: UseFormReturn<T>;
  countries: ICountries[];
};

export const CountryInput = <T extends FieldValues>({ form, countries }: Props<T>) => {
  return (
    <FormField
      control={form.control}
      name={'countryId' as Path<T>}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Country</FormLabel>
          <Select
            onValueChange={(value) => field.onChange(Number(value))}
            defaultValue={field.value?.toString()}
          >
            <SelectTrigger>
              <SelectValue placeholder='Select a country' />
            </SelectTrigger>
            <SelectContent>
              {countries &&
                countries.map((country) => {
                  return (
                    <SelectItem key={country.code} value={country.id.toString()}>
                      {country.name}
                    </SelectItem>
                  );
                })}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
