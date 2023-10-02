import axios, { AxiosError } from 'axios';

import { apiUrls } from '@constants';
import { GenericAbortSignal } from '@interfaces';

export function peopleService() {
  return {
    queryKey: ['PEOPLE'],
    queryFn: async ({ signal }: GenericAbortSignal) => {
      try {
        const response = await axios.get(apiUrls.people, {
          signal,
        });

        if (response.status <= 300 && response.status >= 400) {
          throw new Error('Failed fetching people!');
        }

        return response.data;
      } catch (error) {
        const axiosError = error as AxiosError;

        if (axiosError.response?.status) {
          throw new Error(
            `Failed fetching people! Status: ${axiosError.response.status}`
          );
        } else if (axiosError.code === 'ECONNABORTED') {
          throw new Error('Request timed out');
        } else {
          throw new Error('Failed fetching people!');
        }
      }
    },
  };
}
