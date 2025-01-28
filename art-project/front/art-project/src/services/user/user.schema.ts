import { z } from 'zod';

export const rolesSchema = z.enum(['USER', 'ARTIST']);
export const emailValidationStatusSchema = z.enum(['PENDING', 'SUCCESS', 'FAILED']);

export const userRegisterInputSchema = z
  .object({
    email: z.string().min(1, 'Email is required').email('Invalid email address'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters'),
    repeatPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ['repeatPassword'],
  });

export const userRegisterResponseSchema = z.object({
  id: z.number(), // User ID must be a number
  email: z.string().email(), // Email must be a valid email string
  emailValidationStatus: emailValidationStatusSchema, // Enum for allowed validation statuses
  emailValidatedAt: z.string().nullable(), // Nullable string for email validation timestamp
  fullName: z.string(),
  role: rolesSchema, // Enum for allowed roles
  createdAt: z.string().datetime(), // String representing ISO datetime format
  updatedAt: z.string().datetime(), // String representing ISO datetime format
  deleted: z.boolean(), // Boolean for deleted status
  deletedAt: z.string().nullable(), // Nullable string for deletion timestamp
});

export const userLoginResponseSchema = z.object({
  accessToken: z.string(),
});

export const userRegisterApiInputSchema = userRegisterInputSchema._def.schema.omit({
  repeatPassword: true,
});

export type IUserRegister = z.infer<typeof userRegisterInputSchema>;
export type IUserRegisterApi = z.infer<typeof userRegisterApiInputSchema>;
