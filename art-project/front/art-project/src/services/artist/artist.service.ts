import { axiosInstance } from '@/lib/axios-instance';

import { validateSchema } from '../validateSchema';

import { handleApiError } from '@/helpers/handle-api-error';
import {
  IArtistRegisterApi,
  artistRegisterResponseSchema,
  getCurrentArtistResponseSchema,
} from './artist.schema';

export const registerArtist = async (data: IArtistRegisterApi) => {
  try {
    const res = await axiosInstance.post(
      `${process.env.NEXT_PUBLIC_API_URL}/artists/`,
      data
    );

    return validateSchema({
      dto: res.data,
      schema: artistRegisterResponseSchema,
      schemaName: 'artistRegisterResponseSchema',
    });
  } catch (error) {
    handleApiError(error);
  }
};

export const getCurrentArtist = async () => {
  try {
    const res = await axiosInstance.get(
      `${process.env.NEXT_PUBLIC_API_URL}/artists/me`
    );

    return validateSchema({
      dto: res.data,
      schema: getCurrentArtistResponseSchema,
      schemaName: 'getCurrentArtistResponseSchema',
    });
  } catch (error) {
    handleApiError(error);
  }
};
