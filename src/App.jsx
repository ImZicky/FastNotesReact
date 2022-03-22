import React, { useState } from 'react';
import { Grid } from '@mui/material';
import NoteForm from './components/NoteForm';
import ShapeDivider from './components/ShapeDivider';
import NoteList from './components/NoteList';

function App() {
  const note = {
    id: 0,
    title: '',
    description: '',
  };

  const [notes, setNotes] = useState([]);

  const handleSaveNote = () => {
    const temp = [...notes];
    note.id = temp.length;
    temp.push(note);
    setNotes(temp);
  };

  const updateField = (event, field) => {
    note[field] = event.target.value;
  };

  const handlerDeleteNote = (index) => {
    const temp = [...notes];
    temp.splice(index, 1);
    setNotes(temp);
  };

  return (
    <Grid
      container
    >
      <Grid
        item
        style={{ background: '#1e080f' }}
        md={12}
        sm={12}
      >
        <NoteForm
          title={note.title}
          description={note.description}
          parentHandleSaveNote={() => handleSaveNote()}
          parentOnChange={(event, field) => updateField(event, field)}
        />
      </Grid>
      <Grid
        item
        md={12}
        sm={12}
      >
        <ShapeDivider />
      </Grid>
      <Grid
        item
        md={12}
        sm={12}
      >
        <NoteList
          notes={notes}
          parentDelete={(index) => handlerDeleteNote(index)}
        />

      </Grid>
    </Grid>
  );
}

export default App;
