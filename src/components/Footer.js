import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import Button from "./Button";
import SocialItems from "./SocialItems";
import Logo from "../images/logo.inline.svg";
import Spazios from "../images/spazios.inline.svg";

const Wrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.green};
  h4 {
    color: #fff;
    opacity: 0.7;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  a {
    color: #fff;
    opacity: 0.7;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.4;
    }
  }
  .divider {
    width: 100%;
    height: 1px;
    display: block;
    background-color: #fff;
    opacity: 0.7;
  }
`;

const Copyright = styled.div`
  color: #fff;
  opacity: 0.7;
  svg {
    margin-left: 5px;
  }
`;

const Footer = ({ setOpenedForm }) => {
  return (
    <Wrapper className="pt-5">
      <Container className="pt-5">
        <div className="text-md-center mb-5">
          <Logo />
        </div>
        <Row className="pb-5">
          <Col className="mb-5 mb-lg-0">
            <h4 className="mb-4">Más información</h4>
            <Button
              onClick={() => {
                setOpenedForm(true);
              }}
            >
              Descargar brochure
            </Button>
          </Col>
          <Col md={5} className="text-md-center mb-5 mb-lg-0">
            <h4 className="mb-4">Síguenos</h4>
            <SocialItems />
          </Col>
          <Col>
            <h4 className="mb-4">Ponte en contacto</h4>
            <a href="tel:+524424541630">T. 442 454 1630</a> <br />
            <a href="mailto:info@antalresidencial.com">
              C. info@antalresidencial.com
            </a>
          </Col>
        </Row>
      </Container>
      <span className="divider"></span>
      <Copyright className="py-5">
        <Container className="text-center">
          <div className="d-md-flex align-items-end justify-content-center mb-5 mb-md-3">
            Un proyecto inmobiliario de <br className="d-md-none" />
            <Spazios />
          </div>
          <p>Aviso de privacidad. Antal {new Date().getFullYear()}</p>
        </Container>
      </Copyright>
    </Wrapper>
  );
};

export default Footer;
