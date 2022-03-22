import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, Box } from '@mui/material';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import TextFieldPrimary from './TextFieldPrimary';

const NoNotesTitle = styled(Typography)`
  margin-top: 50px;
  text-align: center;
  font-size: 30px;
  color: #ed1557;
`;

const NoteBox = styled(Box)`
  background: #FFFFFF;
  margin: 20px;
  width: auto;
  height: auto;
  padding: 20px;
  border-radius: 5px;
  border: 5px solid #ed1557;
  float: left;
  &:hover {
    transition-duration: 500ms;
    box-shadow: 1px 5px 20px #ed1557;
  }
  @media (max-width: 420px) {
    width: 75%;
  }
`;

const ListNoteDiv = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const CloseBox = styled.div`
    position: absolute;
    padding: 7px;
    margin-left: 433px;
    margin-top: -38px;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    background: #ed1557;
    z-index: 1000;
    color: #FFF;
    cursor: pointer;
    &:hover{
      background: #66152e;
      transition-duration: 500ms;
      box-shadow: 1px 5px 20px #66152e;
    }
`;

const CloseIconStyled = styled(CloseIcon)`
  position: absolute;
  margin-left: -2px;
  margin-top: -2px;
  font-wheght: 900;
`;

function NoteList({ notes, parentDelete }) {
  return (
    <ListNoteDiv>
      {
        notes.length > 0
          ? notes.map((note, index) => (
            <NoteBox key={`note-${index}`}>
              <Grid
                md={12}
                sm={12}
                item
              >
                <CloseBox
                  onClick={() => parentDelete(index)}
                >
                  <CloseIconStyled />
                </CloseBox>

                <TextFieldPrimary
                  defaultValue={note.title}
                  fullWidth
                />
                <TextFieldPrimary
                  defaultValue={note.description}
                  fullWidth
                  multiline
                  rows={10}
                />
              </Grid>
            </NoteBox>
          ))
          : (
            <NoNotesTitle
              component="div"
              gutterBottom
              variant="h2"
            >
              Sem Notas Salvas ;_;
            </NoNotesTitle>
          )
      }
    </ListNoteDiv>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf({ id: 0, title: '', description: '' }),
  parentDelete: PropTypes.func,
};

export default NoteList;
