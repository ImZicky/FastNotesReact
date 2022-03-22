import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

function ButtonPrimary({
  text, parentOnClick, parentOnHover, fullWidth,
}) {
  const ButtonStyled = styled(Button)`
    color: #FFFFFF;
    background: #66152e;
    padding: 10px 5px;
    font-size: 20px;
    &:hover {
      transidion-duration: 250ms;
      background: #ed1557;
    }
  `;

  return (
    <ButtonStyled
      fullWidth={fullWidth}
      onClick={parentOnClick}
      onMouseUp={parentOnHover}
      variant="contained"
    >
      {text}
    </ButtonStyled>
  );
}

ButtonPrimary.propTypes = {
  fullWidth: PropTypes.bool,
  text: PropTypes.string.isRequired,
  parentOnClick: PropTypes.func.isRequired,
  parentOnHover: PropTypes.func,
};

export default ButtonPrimary;
