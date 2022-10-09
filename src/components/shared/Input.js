import React from "react";
import styled from 'styled-components';
const InputSC = styled.input`
    border: 0;
    background-color: ${props => props.theme.colors['black']};
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border-radius: ${props => props.theme.variables['border-radius']};
    color: ${props => props.theme.colors['txt-color']};
    font-family: ${props => props.theme.variables['font-family']};
`
const Input = ({ type, placholder, value, onChange }) => {
    return (
        <InputSC
            type={type}
            placeholder={placholder}
            value={value}
            onChange={onChange ? (e) => onChange(e) : null}
        />
    );
};

export default Input;