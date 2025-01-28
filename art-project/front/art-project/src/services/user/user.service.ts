import { getCookiesSSR } from '@/helpers/ssr-cookies';
import { axiosInstance } from '@/lib/axios-instance';
import { IUserRegisterApi, userRegisterResponseSchema } from './user.schema';
import { validateSchema } from '../validateSchema';

import { handleApiError } from '@/helpers/handle-api-error';
import { userLoginResponseSchema } from '../auth';

export const getUser = async () => {
  const res = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
    headers: {
      Cookie: await getCookiesSSR(),
    },
  });

  console.log(res.data);

  return validateSchema({
    dto: res.data,
    schema: userLoginResponseSchema,
    schemaName: 'userLoginResponseSchema',
  });
};

export const registerUser = async (data: IUserRegisterApi) => {
  try {
    const res = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/users/`, data);

    return validateSchema({
      dto: res.data,
      schema: userRegisterResponseSchema,
      schemaName: 'userRegisterResponseSchema',
    });
  } catch (error) {
    handleApiError(error);
  }
};
