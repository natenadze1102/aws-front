import { z } from 'zod';
import { userRegisterInputSchema } from '../user';

export const artistRegisterUnputSchema = userRegisterInputSchema
  .innerType()
  .extend({
    fullName: z.string().min(1, 'Full name is required'),
    countryId: z.number().min(1, 'Country is required'),
    streetAddress: z.string().min(5, 'Address must be at least 5 characters'),
    city: z.string().min(1, 'City is required'),
    zip: z.string().min(1, 'ZIP code is required'),
    phoneNumber: z.string().min(1, 'Phone number is required'),
    bio: z.string().min(3, 'Bio must be at least 3 characters').optional(),
  });

export const getCurrentArtistResponseSchema = z.object({
  id: z.number(),
  userId: z.number(),
  bio: z.string(),
  imageUrl: z.string().nullable(),
  user: z.object({
    email: z.string().email(),
    fullName: z.string(),

    Address: z.array(
      z.object({
        id: z.number(),
        phoneNumber: z.string(),
        streetAddress: z.string(),
        city: z.string(),
        zip: z.string(),
        countryId: z.number(),
      })
    ),
  }),
});

export const artistRegisterResponseSchema = z.object({
  id: z.number(),
  userId: z.number(),
});

export const artistRegisterApiInputSchema = artistRegisterUnputSchema.omit({
  repeatPassword: true,
});

export type IArtistRegister = z.infer<typeof artistRegisterUnputSchema>;
export type IArtistRegisterApi = z.infer<typeof artistRegisterApiInputSchema>;
export type IArtist = z.infer<typeof getCurrentArtistResponseSchema>;
