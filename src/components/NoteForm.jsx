import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Box,
} from '@mui/material';
import styled from '@emotion/styled';
import ButtonPrimary from './ButtonPrimary';
import TextFieldPrimary from './TextFieldPrimary';

const NoteBox = styled(Box)`
background: #FFFFFF;
margin: 50px auto;
width: 500px;
height: auto;
padding: 20px;
border-radius: 5px;
border: 5px solid #ed1557;
&:hover {
  transition-duration: 500ms;
  box-shadow: 1px 5px 20px #ed1557;
}
@media (max-width: 420px) {
  width: 70%;
}
`;

const Title = styled(Typography)`
  text-align: center;
  font-size: 40px;
  color: #ed1557;
`;

function NoteForm({
  title, description, parentHandleSaveNote, parentOnChange,
}) {
  return (
    <NoteBox>
      <Grid
        md={12}
        sm={12}
        item
      >
        <Title
          component="div"
          gutterBottom
          variant="h1"
        >
          Notas Rápidas
        </Title>
        <TextFieldPrimary
          defaultValue={title}
          fullWidth
          placeholder="Título"
          parentOnChange={(event) => parentOnChange(event, 'title')}
        />
        <TextFieldPrimary
          defaultValue={description}
          fullWidth
          multiline
          placeholder="Descrição"
          parentOnChange={(event) => parentOnChange(event, 'description')}
          rows={10}
        />
        <ButtonPrimary
          fullWidth
          parentOnClick={parentHandleSaveNote}
          text="Salvar Nota"
        />
      </Grid>
    </NoteBox>
  );
}

NoteForm.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  parentHandleSaveNote: PropTypes.func.isRequired,
  parentOnChange: PropTypes.func.isRequired,
};

export default NoteForm;
