// lib/api/serverApi.ts
import { api } from './api';
import { Note } from '@/types/note';
import { User } from '@/types/user';

export const fetchNotesServer = async (cookies: string, search?: string, page?: number, tag?: string): Promise<Note[]> => {
  const { data } = await api.get('/notes', { params: { search, page, perPage: 12, tag }, headers: { cookie: cookies } });
  return data;
};

export const fetchNoteByIdServer = async (cookies: string, id: string): Promise<Note> => {
  const { data } = await api.get(`/notes/${id}`, { headers: { cookie: cookies } });
  return data;
};

export const getMeServer = async (cookies: string): Promise<User> => {
  const { data } = await api.get('/users/me', { headers: { cookie: cookies } });
  return data;
};

export const checkSessionServer = async (cookies: string): Promise<User | null> => {
  try {
    const { data } = await api.get('/auth/session', { headers: { cookie: cookies } });
    return data || null;
  } catch {
    return null;
  }
};
