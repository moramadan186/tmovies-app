import styled from "styled-components";
export const MovieListCont = styled.div`
    .swiper-slide {
        width: 17%;

        @media only screen and (max-width:1024px) {
            width: 30%;
        }

        @media only screen and (max-width:600px) {
            width: 40%;
        }
    }
`