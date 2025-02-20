import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { EmailInput } from '../EmailInput';
import { PasswordInput } from '../PasswordInput';

import { Button } from '@/components/ui/button';
import { FullNameInput } from '../FullNameInput';
import { BioInput } from '../BioInput';
import { CountryInput } from '../CountryInput';
import { CityInput } from '../CityInput';
import { PhoneInput } from '../PhoneInput';
import { AddressLineInput } from '../AddressLineInput';
import { ZipCodeInput } from '../ZipCodeInput.';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCountries } from '@/hooks/service-hooks/useCountries';
import { IArtistRegister, artistRegisterUnputSchema } from '@/services/artist';
import { useRegisterArtist } from '@/hooks/service-hooks/useRegisterArtist';

export const ArtistRegisterForm = () => {
  const { countries } = useCountries();

  const form = useForm<IArtistRegister>({
    resolver: zodResolver(artistRegisterUnputSchema),

    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
      fullName: '',
      countryId: 0,
      phoneNumber: '',
      city: '',
      streetAddress: '',
      bio: '',
      zip: '',
    },
  });

  const mutation = useRegisterArtist();

  const onSubmit: SubmitHandler<IArtistRegister> = (data: IArtistRegister) => {
    if ('fullName' in data) {
      // Artist registration
      const apiValues = {
        email: data.email,
        password: data.password,
        fullName: data.fullName,
        countryId: +data.countryId,
        phoneNumber: data.phoneNumber,
        city: data.city,
        streetAddress: data.streetAddress,
        bio: data.bio,
        zip: data.zip,
      };
      mutation.mutate(apiValues);
    } else {
      // User registration
    }
  };

  const formState = form.formState;

  return (
    <>
      <CardHeader>
        <CardTitle>Artist Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="space-y-6 w-full text-xs"
            onSubmit={form.handleSubmit(onSubmit, (errors) =>
              // eslint-disable-next-line no-console
              console.log('Validation Errors:', errors)
            )}
          >
            <EmailInput form={form} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PasswordInput form={form} />
              <PasswordInput
                form={form}
                name="repeatPassword"
                label="Repeat Password"
              />
            </div>

            <FullNameInput form={form} />
            <BioInput form={form} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CountryInput form={form} countries={countries} />
              <CityInput form={form} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <PhoneInput form={form} />
              <AddressLineInput form={form} />
              <ZipCodeInput form={form} />
            </div>

            <Button
              type="submit"
              disabled={
                !formState.isDirty || !formState.isValid || mutation.isPending
              }
            >
              Register
            </Button>
          </form>
        </Form>
      </CardContent>
    </>
  );
};
