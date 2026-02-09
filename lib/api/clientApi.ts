import axios from 'axios';

export interface UpdateMeData {
  username?: string;
}

export const updateMe = async (data: UpdateMeData) => {
  const response = await axios.put('/api/user/update', data);
  return response.data;
};
