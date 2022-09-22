import styled from 'styled-components';
export const Button = styled.button.attrs({
    className: 'btn'
})`
    border: 4px solid transparent;
    background-color: ${props => props.theme.colors['main-color']};
    color: ${props => props.theme.colors['white']};
    border-radius: ${props => props.theme.variables['border-radius']};
    padding: 0.5rem 1.8rem;
    font-size: 1.5rem;
    font-weight: 600;
    box-shadow: 0px 0px 7px 8px #ff00004d;
    transition: box-shadow 0.3s ease;
    position: relative;
    &:hover {
        box-shadow: 0px 0px 7px 15px #ff00004d;
    }
    &.small {
        border-width: 2px;
        padding: 0.25rem 1.5rem;
        font-size: 1rem;
    }

`
export const OutlineButton = styled(Button)`
    border: 3px solid ${props => props.theme.colors['white']};
    background-color: transparent;
    color: ${props => props.theme.colors['white']};
    box-shadow: unset;
    transition: color 0.3s ease, background-color 0.3s ease;
    &:hover {
        box-shadow: unset;
        color: ${props => props.theme.colors['main-color']};
        background-color: ${props => props.theme.colors['white']};
    }
`