import styled from "styled-components";

export const SlideCont = styled.div`
    margin-bottom: 4rem;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1320px;
    height: 100%;
    margin: auto;


    position: relative;
`
export const ContentInfo = styled.div`
    width: 60%;
    padding: 0 3rem;
    position: relative;

    @media only screen and (max-width:1024px) {
        width: 100%;
    }

    &>*~* {
        margin-top: 3rem;
    }

    .title {
        font-size: 5rem;
        font-weight: 700;
        line-height: 1;

        @media only screen and (max-width:1024px) {
            font-size: 4rem;
        }
    }

    .overview {
        font-weight: 700;
    }

    .btns>*~* {
        margin-left: 1rem;
    }

    .btns,
    .title,
    .overview {
        opacity: 0;
        transform: translateY(-100px);
        transition: transform 0.5s ease, opacity 0.5s ease;
    }
`
export const ContentPoster = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;

    img {
        width: 350px;
        border-radius: ${props => props.theme.variables['border-radius']};
        box-shadow: ${props => props.theme.colors['box-shadow']};
        transform: scale(0);
        transition: transform 0.7s ease;
    }

    @media only screen and (max-width:1024px) {
        display: none;
    }
`

export const ItemCont = styled.div`
    padding: 9rem 0 7rem;
    min-height: 450px;

    @media only screen and (max-width:600px) {
        max-height: 500px;
        padding: 12rem 0 10rem;
    }

    width: 100%;
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background-image: linear-gradient(to top, #0f0f0f,#0000);
    }
    &.active>${Content}>${ContentPoster}{
        img {
            transform: scale(1);
        }
    }

    &.active>${Content}>${ContentInfo} {
    .btns,
    .title,
    .overview {
        opacity: 1;
        transform: translateY(0);
    }

    .title {
        transition-delay: 0.3s, 0.3s;
    }

    .overview {
        transition-delay: 0.6s, 0.6s;
    }

    .btns {
        transition-delay: 0.9s, 0.9s;
    }
}
`


