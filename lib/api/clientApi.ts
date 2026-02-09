import axios from 'axios';
import type { User } from '@/types/user';

export interface UpdateMeData {
  username?: string;
}

export const updateMe = async (data: UpdateMeData): Promise<User> => {
  const response = await axios.put('/api/user/update', data);
  return response.data;
};
