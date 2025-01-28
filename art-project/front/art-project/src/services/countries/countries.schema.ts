import { z } from 'zod';

export const countriesSchema = z.object({
  id: z.number(),
  name: z.string(),
  code: z.string(),
});

export const countriesResponseSchema = z.array(countriesSchema);

export type ICountries = z.infer<typeof countriesSchema>;
