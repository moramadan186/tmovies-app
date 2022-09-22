import styled from "styled-components";
export const MovieCardCont = styled.div`
    position: relative;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 160%;
    border-radius: ${props => props.theme.variables['border-radius']};
    margin-bottom: 1rem;

    .btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: ${props => props.theme.variables['border-radius']};
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    @media(hover:hover) {
        &:hover {
            .btn {
                transform: translate(-50%, -50%) scale(1);
            }

            &::before {
                opacity: 1;
            }
        }
    }
`
