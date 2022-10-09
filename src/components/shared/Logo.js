import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/tmovie.png";

const LogoStyle = styled.div`
    font-size: 2.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: unset;

    img {
        margin-right: 10px;
        width: 50px;
        @media only screen and (max-width: 600px) {
            width: 30px;
            margin-right: 3px;
        }
    }
`

const Logo = () => {
    return (
        <LogoStyle>
            <img src={logo} alt="logo" />
            <Link to="/">tMovies</Link>
        </LogoStyle>
    )
}
export default Logo;