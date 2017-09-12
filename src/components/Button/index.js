import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const CustomButton = styled.Button`
  background: blue;
`;

const Button = ({ title, onPress, disabled=false }) => (
  <CustomButton title={title} onPress={onPress} disabled={disabled} />
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

export default Button;
