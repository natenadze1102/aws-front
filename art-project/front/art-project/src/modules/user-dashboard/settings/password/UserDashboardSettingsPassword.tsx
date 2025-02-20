'use client';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useLogin } from '@/hooks/service-hooks/useLogin';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PasswordInput } from '@/app/[locale]/register/components/PasswordInput';
import { passwordSchema, userRegisterInputSchema } from '@/services/user';

export const UserDashboardSettingsPassword = () => {
  const mutation = useLogin();

  const formSchema = userRegisterInputSchema._def.schema
    .omit({ email: true })
    .extend({
      currentPassword: passwordSchema,
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      repeatPassword: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    return values;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Change password</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-3"
          >
            <PasswordInput
              form={form}
              label="Current Password"
              name="currentPassword"
            />
            <PasswordInput form={form} label="New Password" />
            <PasswordInput
              form={form}
              label="Confirm New Password"
              name="repeatPassword"
            />

            <Button
              type="submit"
              disabled={
                mutation.isPending ||
                !form.formState.isDirty ||
                !form.formState.isValid
              }
            >
              Change Password
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
