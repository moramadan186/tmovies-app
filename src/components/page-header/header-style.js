import styled from "styled-components";
export const PageHeaderCont = styled.div`
    padding: ${props => props.theme.variables['header-height']} 0 2rem;
    text-align: center;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    h2 {
        position: relative;
        font-size: 1.7rem;
        font-weight: 700;
    }

    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background-image: linear-gradient(to top, #0f0f0f,#0000);
    }
`