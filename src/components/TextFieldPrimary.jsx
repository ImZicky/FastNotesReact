import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import styled from '@emotion/styled';

function TextFieldPrimary({
  defaultValue, parentOnChange, placeholder, fullWidth, multiline, rows,
}) {
  const TextFieldStyled = styled(TextField)({
    margin: '15px 0px',
    '& label.Mui-focused': {
      boxShadow: '1px 2px 5px #66152e',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ed1557',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ed1557',
      },
      '&:hover fieldset': {
        borderColor: '#ed1557',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ed1557',
      },
    },
  });

  return (
    <TextFieldStyled
      onChange={parentOnChange}
      defaultValue={defaultValue}
      placeholder={placeholder}
      fullWidth={fullWidth}
      multiline={multiline}
      rows={rows}
    />
  );
}

TextFieldPrimary.propTypes = {
  defaultValue: PropTypes.string,
  parentOnChange: PropTypes.func,
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

export default TextFieldPrimary;
