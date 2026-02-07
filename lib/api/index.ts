import axios, { AxiosResponse } from 'axios';
import type { User } from '@/types/user';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

// Функция getMe теперь возвращает Promise<AxiosResponse<User>>
const getMe = (): Promise<AxiosResponse<User>> => {
  return axios.get<User>(`${API_BASE}/me`, { withCredentials: true });
};

export default getMe;
