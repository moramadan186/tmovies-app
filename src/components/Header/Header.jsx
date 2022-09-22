import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "./../shared/Container";
import Logo from "../shared/Logo";
import { HeaderStyle } from "./header-style";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];
const { Header: HeaderCont, Wraper, Nav } = HeaderStyle;

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);
  const shrinkHeader = () => {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      headerRef.current.classList.add("shrink");
    } else {
      headerRef.current.classList.remove("shrink");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <HeaderCont ref={headerRef}>
      <Container>
        <Wraper>
          <Logo />
          <Nav>
            {headerNav.map((item, index) => (
              <li key={index} className={`${index === active ? "active" : ""}`}>
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}
          </Nav>
        </Wraper>
      </Container>
    </HeaderCont>
  );
};
export default Header;
