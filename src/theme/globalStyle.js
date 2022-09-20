import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 90%;

        @media only screen and (max-width:1024px) {
            font-size: 80%;
        }
        @media only screen and (max-width:600px) {
            font-size: 60%;
        }
    }

    body {
        font-family:${(props) => props.theme.variables["font-family"]};
        font-weight: 400;
        line-height: 1.5;
        background-color: ${(props) => props.theme.colors["body-bg"]};
        color: ${(props) => props.theme.colors["txt-color"]};

        @media only screen and (max-width:600px) {
            margin-bottom: 3rem;
        }
    }

    a {
        text-decoration: none;
        color: unset;
    }

    @media (hover:hover) {
        a:hover {
            color:${(props) => props.theme.colors["main-color"]};
        }
    }

    button,
    input {
        outline: 0;
    }

    ul {
        list-style-type: none;
    }

    img {
        max-width: 100%;
    }

    iframe {
        border: 0;
    }

    button {
        cursor: pointer;
        font-family: ${(props) => props.theme.variables["font-family"]};
    }
    .mb-3 {
        margin-bottom: 3rem;
    }

    .mb-2 {
        margin-bottom: 2rem;
    }
    .container {
        max-width: 1320px;
        margin: auto;
        height: 100%;
    }
`;
