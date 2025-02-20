'use client';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useLogin } from '@/hooks/service-hooks/useLogin';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { passwordSchema } from '@/services/user';
import {
  AddressLineInput,
  BioInput,
  CountryInput,
  FullNameInput,
  PhoneInput,
  ZipCodeInput,
} from '@/app/[locale]/register/components';
import { CityInput } from '@/app/[locale]/register/components/CityInput';

import { artistRegisterUnputSchema, IArtist } from '@/services/artist';
import { FC } from 'react';
import { ICountries } from '@/services/countries';

type Props = {
  artist: IArtist;
  countries: ICountries[];
};
export const UserDashboardSettingsProfile: FC<Props> = ({
  artist,
  countries,
}) => {
  const mutation = useLogin();

  const user = artist?.user;
  const address = user?.Address[0];

  const formSchema = artistRegisterUnputSchema
    .omit({ email: true, password: true, repeatPassword: true })
    .extend({
      currentPassword: passwordSchema,
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: artist?.user.fullName ?? '',
      bio: artist?.bio ?? '',
      city: address?.city ?? '',
      countryId: address?.countryId ?? 1,
      phoneNumber: address?.phoneNumber ?? '',
      zip: address?.zip ?? '',
      streetAddress: address?.streetAddress ?? '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    return values;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-3"
          >
            <FullNameInput form={form} />
            <AddressLineInput form={form} />
            <BioInput form={form} />
            <CityInput form={form} />
            <CountryInput form={form} countries={countries} />
            <PhoneInput form={form} />
            <ZipCodeInput form={form} />

            <Button
              type="submit"
              disabled={
                mutation.isPending ||
                !form.formState.isDirty ||
                !form.formState.isValid
              }
            >
              Save changes
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
