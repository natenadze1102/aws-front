import { z } from 'zod';
import { emailValidationStatusSchema, rolesSchema } from '../user';

export const loginUserSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const userLoginResponseSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  emailValidationStatus: emailValidationStatusSchema,
  fullName: z.string().nullable(),
  role: rolesSchema,
});

export type IUserLogin = z.infer<typeof loginUserSchema>;
