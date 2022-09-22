import styled from "styled-components";

export const Content = styled.div`
    padding: 2rem;
    background-color: ${props => props.theme.colors['body-bg']};
    width: 50%;
    opacity: 0;
    transform: translateY(-250px);
    transition: transform 0.5s ease, opacity 0.5s ease;
    position: relative;

    @media only screen and (max-width:1024px) {
        width: 80%;
    }
`;

export const CloseIcon = styled.div`
    position: absolute;
    right: 10px;
    top: 5px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.colors['main-color']};
    }
`;


export const ModalCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    overflow: auto;
    background-color: rgba($color:${props => props.theme.colors['black']}, $alpha:0.5);
    opacity: 0;
    visibility: hidden;

    &.active {
        opacity: 1;
        visibility: visible;
    }

    &.active ${Content} {
        opacity: 1;
        transform: translateY(0);
    }
`;