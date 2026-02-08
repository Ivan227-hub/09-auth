import React from 'react';

type NoteDetailProps = {
  noteId: string;
};

const NoteDetail: React.FC<NoteDetailProps> = ({ noteId }) => {
  return (
    <div>
      <h1>Note Detail</h1>
      <p>Note ID: {noteId}</p>
      {}
    </div>
  );
};

export default NoteDetail;
