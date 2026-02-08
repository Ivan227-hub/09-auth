// /lib/api/clientApi.ts
import { api } from './api';

// Типы данных для аутентификации
export interface AuthData {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

// Типы данных пользователя
export interface User {
  id: string;
  name: string;
  email: string;
  // добавь другие поля пользователя, если есть
}

// Для обновления пользователя
export interface UpdateMeData {
  name?: string;
  email?: string;
  password?: string;
  // добавь любые другие поля, которые разрешено обновлять
}

// --- Auth API ---
export const register = (data: AuthData) =>
  api.post<AuthResponse>('/auth/register', data);

export const login = (data: AuthData) =>
  api.post<AuthResponse>('/auth/login', data);

export const logout = () => api.post('/auth/logout');

export const checkSession = () => api.get<AuthResponse>('/auth/session');

// --- User API ---
export const getMe = () => api.get<User>('/users/me');

export const updateMe = (data: UpdateMeData) =>
  api.put<User>('/users/me', data);
