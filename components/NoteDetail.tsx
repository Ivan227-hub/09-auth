// /components/NoteDetail.tsx
type NoteDetailProps = {
  noteId: string;
};

export default function NoteDetail({ noteId }: NoteDetailProps) {
  return <div>Note detail for ID: {noteId}</div>;
}
