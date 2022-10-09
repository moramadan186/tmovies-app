import styled from "styled-components";
const FooterStyle = {
    FooterCont: styled.div`
        position: relative;
        padding: 6rem 2rem;
        @media only screen and (max-width:600px) {
            padding: 6rem 1rem 10rem;
        }
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
    `,
    FooterContent: styled.div`
        max-width: 1000px;
        margin: auto;
        height: 100%;
    `,
    ContentLogo: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3rem;
    `,
    FooterMenus: styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        @media only screen and (max-width:600px) {
            grid-template-columns: repeat(2, 1fr);
        }
    `,
    FooterMenu: styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        margin-top: 1rem;
        font-size: 1.5rem;
        font-weight: 600;

        &>*~* {
            margin-top: 1rem;
        }
    `
}
export default FooterStyle;
