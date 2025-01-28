'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useLogin } from '@/hooks/useLogin';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

export const Loginform = () => {
  const mutation = useLogin();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }

  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>User Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-3'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='johndoe@gmail.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pasword</FormLabel>
                  <FormControl title='Password must be at least 8 characters'>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='flex items-center justify-between'>
              <Link href='#' className='text-sm text-blue-500 hover:underline'>
                Forgot your password?
              </Link>
              <Link href='/register' className='text-sm text-blue-500 hover:underline'>
                Sign up
              </Link>
            </div>

            <Button
              type='submit'
              disabled={mutation.isPending || !form.formState.isDirty || !form.formState.isValid}
            >
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
