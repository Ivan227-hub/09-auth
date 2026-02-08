// /app/@modal/(.)notes/page.tsx
import React from 'react';
import NoteDetail from '../../../components/NoteDetail'; // путь к компоненту корректируем

type Props = {
  params: { id: string };
};

export default function NotesModalPage({ params }: Props) {
  const { id } = params || { id: 'default' }; // на случай, если params нет
  return <NoteDetail noteId={id} />;
}
