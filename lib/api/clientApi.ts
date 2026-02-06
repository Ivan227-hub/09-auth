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

// Реєстрація
export const register = async ({ email, password }: AuthData): Promise<User> => {
  const { data } = await api.post('/auth/register', { email, password });
  return data;
};

// Логін
export const login = async ({ email, password }: AuthData): Promise<User> => {
  const { data } = await api.post('/auth/login', { email, password });
  return data;
};

// Вихід з акаунта
export const logout = async (): Promise<void> => {
  await api.post('/auth/logout');
};

// Отримати дані поточного користувача
export const getMe = async (): Promise<User> => {
  const { data } = await api.get('/users/me');
  return data;
};

// Оновлення даних користувача
export const updateMe = async (updateData: UpdateUserData): Promise<User> => {
  const { data } = await api.patch('/users/me', updateData);
  return data;
};

// Перевірка сесії (якщо користувач залогінений, повертає User, інакше null)
export const checkSession = async (): Promise<User | null> => {
  try {
    const { data } = await api.get('/auth/session'); // endpoint на бекенді, який повертає сесію
    return data;
  } catch {
    return null; // якщо не залогінений
  }
};
