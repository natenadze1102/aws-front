import { axiosInstance } from '@/lib/axios-instance';

import { validateSchema } from '../validateSchema';

import { handleApiError } from '@/helpers/handle-api-error';
import { artistRegisterResponseSchema, IArtistRegisterApi } from './artist.schema';

export const registerArtist = async (data: IArtistRegisterApi) => {
  try {
    const res = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/artists/`, data);

    return validateSchema({
      dto: res.data,
      schema: artistRegisterResponseSchema,
      schemaName: 'artistRegisterResponseSchema',
    });
  } catch (error) {
    handleApiError(error);
  }
};
