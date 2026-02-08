// /app/(private routes)/notes/[id]/page.tsx
import NoteDetail from '../../../../components/NoteDetail';


type Props = {
  params: { id: string };
};

export default async function NotePage({ params }: Props) {
  const { id } = params;
  // можно здесь получать данные через API
  return <NoteDetail noteId={id} />;
}
