import axios, { AxiosError } from 'axios';

interface AxiosErrorResponse {
  message: string; // Define the structure of the error response
}

export const handleApiError = (error: unknown, fallbackMessage: string = 'An error occurred') => {
  if (axios.isAxiosError(error)) {
    // Specify the expected type of response.data
    const axiosError = error as AxiosError<AxiosErrorResponse>;
    const errorMessage = axiosError.response?.data?.message || fallbackMessage;
    // eslint-disable-next-line no-console
    console.error('API Error:', errorMessage);
    throw new Error(errorMessage);
  } else {
    // eslint-disable-next-line no-console
    console.error('Unexpected Error:', error);
    throw new Error(fallbackMessage);
  }
};
