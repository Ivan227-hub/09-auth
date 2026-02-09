// Assuming `clientApi.ts`
import axios from 'axios';

export interface UpdateMeData {
  username?: string;
  // other fields (email, avatar, etc.) if needed
}

export const updateMe = async (data: UpdateMeData) => {
  try {
    const response = await axios.put('/api/user/update', data);
    return response.data; // Ensure this returns a `User` object
  } catch (error) {
    console.error(error);
    throw error;
  }
};
