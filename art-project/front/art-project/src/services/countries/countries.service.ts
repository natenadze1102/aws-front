import { axiosInstance } from '@/lib/axios-instance';
import { validateSchema } from '../validateSchema';
import { countriesResponseSchema } from './countries.schema';
import { handleApiError } from '@/helpers/handle-api-error';

export const getCountries = async () => {
  try {
    const res = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/countries/`, {});

    return validateSchema({
      dto: res.data,
      schema: countriesResponseSchema,
      schemaName: 'countriesResponseSchema',
    });
  } catch (error) {
    handleApiError(error);
  }
};
