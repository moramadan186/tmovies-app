import styled from "styled-components";
export const HeaderStyle = {
    Header: styled.div`
      height: ${(props) => props.theme.variables["header-height"]};
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 99;
      transition: height 0.3s ease, background-color 0.3s ease;
  
      &.shrink {
        height: ${(props) => props.theme.variables["header-shrink-height"]};
        background-color: ${(props) => props.theme.colors["body-bg"]};
      }
    `,
    Nav: styled.ul`
      display: flex;
      align-items: center;
      justify-content: unset;
  
      & > * ~ * {
        margin-left: 2rem;
      }
  
      li {
        padding: 5px 0;
        font-weight: 700;
        position: relative;
        font-size: 1.5rem;
  
        &::after {
          content: "";
          width: 0;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          transition: width 0.5s ease;
          height: 2px;
          background-color: ${(props) => props.theme.colors["main-color"]};
        }
  
        &.active::after,
        &:hover::after {
          width: 100%;
        }
      }
  
      @media only screen and (max-width: 600px) {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 5rem;
        width: 100%;
        background-color: ${(props) => props.theme.colors["body-bg"]};
        padding: 0 2rem;
        box-shadow: ${(props) => props.theme.variables["box-shadow"]};
  
        display: flex;
        align-items: center;
        justify-content: space-between;
  
        & > * ~ * {
          margin-left: 0;
        }
      }
    `,
    Wraper: styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      padding: 0 2rem;
  
      @media only screen and (max-width: 600px) {
        justify-content: center;
      }
    `,
};
