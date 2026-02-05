// lib/api/clientApi.ts
import { api } from './api';
import { User } from '@/types/user';

interface AuthData {
  email: string;
  password: string;
}

interface UpdateUserData {
  username?: string;
}

export const register = async ({ email, password }: AuthData): Promise<User> => {
  const { data } = await api.post('/auth/register', { email, password });
  return data;
};

export const login = async ({ email, password }: AuthData): Promise<User> => {
  const { data } = await api.post('/auth/login', { email, password });
  return data;
};

export const logout = async (): Promise<void> => {
  await api.post('/auth/logout');
};

export const getMe = async (): Promise<User> => {
  const { data } = await api.get('/users/me');
  return data;
};

export const updateMe = async (updateData: UpdateUserData): Promise<User> => {
  const { data } = await api.patch('/users/me', updateData);
  return data;
};
