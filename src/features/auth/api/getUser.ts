import { axios } from '@/lib/axios';

import { AuthUser } from '../types';

export const getUser = (): Promise<AuthUser> => {
  return axios.get('http://localhost:8080/auth/user');
};
