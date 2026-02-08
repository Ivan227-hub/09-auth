// /app/@modal/(.)notes/[id]/page.tsx
import NoteDetail from '../../../../components/NoteDetail';

type Props = {
  params: { id: string };
};

export default function NoteModalPage({ params }: Props) {
  const { id } = params;
  return <NoteDetail noteId={id} />;
}
