import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/footer-bg.jpg";
import FooterStyle from "./footer-style";
import Logo from "./../shared/Logo";

const { FooterCont, FooterContent, ContentLogo, FooterMenus, FooterMenu } =
  FooterStyle;
const Footer = () => {
  return (
    <FooterCont style={{ backgroundImage: `url(${background})` }}>
      <FooterContent>
        <ContentLogo>
          <Logo />
        </ContentLogo>
        <FooterMenus>
          <FooterMenu>
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Terms of services</Link>
            <Link to="/">About us</Link>
          </FooterMenu>
          <FooterMenu>
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy policy</Link>
          </FooterMenu>
          <FooterMenu>
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </FooterMenu>
        </FooterMenus>
      </FooterContent>
    </FooterCont>
  );
};

export default Footer;
