import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import scrollTo from "gatsby-plugin-smoothscroll";
import Headroom from "react-headroom";

import Logo from "../images/logo.inline.svg";
import Close from "../images/close.inline.svg";
import SocialItems from "./SocialItems";

const StyledHeader = styled.header`
  color: #e5e5e5;
  button {
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
  }
  button,
  a {
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: inherit;
    margin: 0 10px;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.4;
    }
  }
`;

const Hamburger = styled.button`
  width: 25px;
  height: 18px;
  position: relative;
  span {
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #e5e5e5;
    left: 0;
    &:nth-of-type(1) {
      top: 0;
    }
    &:nth-of-type(2) {
      top: 0;
      bottom: 0;
      margin: auto;
    }
    &:last-of-type {
      bottom: 0;
    }
  }
`;

const MenuWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.green};
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1999;
  transform: translateX(-100%);
  transition: all 0.3s ease-in-out;
  overflow-y: scroll;
  &.opened {
    transform: translateX(0);
  }
  .close {
    svg {
      width: 20px;
      height: auto;
    }
  }
  ul {
    li {
      &:not(:last-of-type) {
        margin-bottom: 30px;
      }
    }
    button {
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 0.1em;
      transition: all 0.3s ease-in-out;
      @media (min-width: 768px) {
        font-size: 1.5rem;
      }
      &:hover {
        opacity: 0.4;
      }
    }
  }
`;

const Header = ({ setOpenedForm }) => {
  const [opened, setOpened] = useState(false);

  const menuItems = [
    {
      name: "Concepto",
      section: "concepto",
    },
    {
      name: "Recorrido virtual",
      section: "recorrido-virtual",
    },
    {
      name: "Masterplan",
      section: "masterplan",
    },
    {
      name: "Amenidades",
      section: "amenidades",
    },
    {
      name: "Distribución",
      section: "distribucion",
    },
    {
      name: "Ubicación",
      section: "ubicacion",
    },
    // {
    //   name: "Avance de obra",
    //   section: "avance-obra",
    // },
  ];

  return (
    <>
      <Headroom>
        <StyledHeader className="py-4">
          <Container>
            <Row className="align-items-center">
              <Col xs={6} lg={2}>
                <Logo />
              </Col>
              <Col lg={8} className="d-none d-lg-block">
                <div className="d-flex justify-content-around px-4">
                  <button
                    onClick={() => {
                      setOpenedForm(true);
                    }}
                  >
                    Brochure
                  </button>
                  <a href="tel:+524424541630">TEL 442 454 1630</a>
                </div>
              </Col>
              <Col xs={6} lg={2} className="text-right">
                <Hamburger
                  className="m-0"
                  onClick={() => {
                    setOpened(true);
                  }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </Hamburger>
              </Col>
            </Row>
          </Container>
        </StyledHeader>
      </Headroom>
      <MenuWrapper className={`${opened ? "opened " : ""}d-flex`}>
        <Container className="d-flex flex-column">
          <div className="d-flex align-items-center pt-5">
            <Logo />
            <button
              className="ml-auto bg-transparent border-0 close"
              onClick={() => {
                setOpened(false);
              }}
            >
              <Close />
            </button>
          </div>
          <ul className="list-unstyled m-0 p-0 text-center my-auto py-5 py-md-0">
            {menuItems.map((item) => (
              <li key={item.section}>
                <button
                  className="bg-transparent border-0 text-white"
                  onClick={() => {
                    scrollTo(`#${item.section}`);
                    setOpened(false);
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <SocialItems className="pb-5 justify-content-center" />
        </Container>
      </MenuWrapper>
    </>
  );
};

export default Header;
