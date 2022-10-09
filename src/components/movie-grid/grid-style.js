import styled from "styled-components";
export const MovieGridCont = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 3rem;

  @media only screen and (max-width:1024px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

`
export const MGloadmore = styled.div`
  text-align: center;
`
export const MovieSearchCont = styled.div`
position: relative;
    width: 100%;
    max-width: 500px;

    input {
      width: 100%;
      height: 100%;
      padding-right: 8rem;
    }

    button {
      height: 100%;
      position: absolute;
      right: 0;
    }
`

