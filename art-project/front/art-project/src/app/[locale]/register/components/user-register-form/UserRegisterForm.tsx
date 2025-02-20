import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import React from 'react';
import { useForm } from 'react-hook-form';

import { EmailInput } from '../EmailInput';
import { PasswordInput } from '../PasswordInput';

import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';

import { IRegisterFormValues } from '../RegisterForm';
import { IUserRegisterApi, userRegisterInputSchema } from '@/services/user';
import { useRegisterUser } from '@/hooks/service-hooks/useRegisterUser';

export const UserRegisterForm = () => {
  const form = useForm<IRegisterFormValues>({
    resolver: zodResolver(userRegisterInputSchema),
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  const mutation = useRegisterUser();

  const onSubmit = (values: IUserRegisterApi) => {
    const apiValues = {
      email: values.email,
      password: values.password,
    };

    mutation.mutate(apiValues);
  };

  const { formState } = form;

  return (
    <>
      <CardHeader>
        <CardTitle>User Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="space-y-6 w-full"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <EmailInput form={form} />
            <PasswordInput form={form} />
            <PasswordInput
              form={form}
              label="Repeat Password"
              name="repeatPassword"
            />

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
