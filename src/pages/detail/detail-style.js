import styled from "styled-components";
export const Banner = styled.div`
    height: 50vh;
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
        background-color: rgba(0, 0, 0, 0.5);
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
`
export const MovieContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: -170px;

    @media only screen and (max-width:600px) {
        margin-top: -200px;
    }

    position: relative;
    padding: 0 2rem;
`
export const MoviePoster = styled.div`
    flex: 1;

    @media only screen and (max-width:600px) {
        display: none;
    }

    .poster-img{
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: ${props => props.theme.variables['border-radius']};
        padding-top: 165%;
    }

`
export const MovieInfo = {
    Container: styled.div`
        width: 70%;
        padding-left: 2rem;
        position: relative;

        @media only screen and (max-width:600px) {
            width: 100%;
            padding-left: 0;
        }

        &>* {
            margin-bottom: 2rem;
        }
    `,

    Title: styled.h1`
        font-size: 4rem;
        line-height: 1;
    `,

    Genres: styled.div`
        &>*~* {
            margin-left: 0.5rem;
        }
    `,

    GenresItem: styled.span`
        padding: 0.5rem 1.5rem;
        border: 2px solid ${props => props.theme.colors['white']};
        border-radius: ${props => props.theme.variables['border-radius']};
        font-size: 0.8rem;
        font-weight: 600;
        background-color: ${props => props.theme.colors['body-bg']};
    `
}

export const Casts = {
    Container: styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
        gap: 10px;
    `,
    ItemImg: styled.div`
        padding-top: 160px;
        background-size: cover;
        margin-bottom: 0.5rem;
    `,
    ItemName: styled.div`
        font-size: 1rem;
    `
}

export const VideoSc = {
    Container: styled.div`
        margin-bottom: 3rem;
    `,
    Title: styled.div`
        margin-bottom: 1.5rem;
    `,
    VideoIframe: styled.iframe`
        width: 100%;
        height: 620px;

        @media only screen and (max-width:1024px) {
            height: 500px;
        }

        @media only screen and (max-width:600px) {
            height: 400px;
        }
    `
}
