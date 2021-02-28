import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import Arrow from "../images/arrow-2.inline.svg";

const Content = styled.div`
  font-size: 1.2rem;
  p {
    &:first-of-type {
      margin-bottom: 80px;
    }
  }
  a {
    color: inherit;
    margin-bottom: 80px;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.4;
    }
    svg {
      width: 25px;
      height: auto;
      margin-left: 8px;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding-left: 18px;
      position: relative;
      &:before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto;
      }
      &:first-of-type:before {
        background: #345b6d;
      }
      &:nth-of-type(2):before {
        background: #808d81;
      }
      &:last-of-type:before {
        background: #c48055;
      }
    }
  }
`;

const MapSection = () => {
  const { prismicInicio } = useStaticQuery(graphql`
    {
      prismicInicio {
        data {
          map {
            fluid {
              ...GatsbyPrismicImageFluid
            }
          }
        }
      }
    }
  `);

  return (
    <Container className="pt-5" id="ubicacion">
      <Row className="align-items-center">
        <Col md={5} className="mb-5 mb-md-0">
          <Content className="pr-4">
            <p>
              Entretenimiento, comercio, escuelas y centros de salud a menos de
              5 minutos.
            </p>
            <p>
              Av. Magisterio #301 <br />
              Colonia Palmar II
              <br />
              Pachuca, Hgo.
            </p>
            <a
              href="https://www.google.com/maps/place/Privada+Residencial+Antal/@20.1200534,-98.7804298,17z/data=!3m1!4b1!4m5!3m4!1s0x85d10a7102d59253:0xda4b03c5b758279e!8m2!3d20.1200534!4d-98.7782411"
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center"
            >
              Ver en google maps
              <Arrow />
            </a>
            <ul>
              <li>Hospitales</li>
              <li>Escuelas</li>
              <li>Comercios y Entretenimiento</li>
            </ul>
          </Content>
        </Col>
        <Col md={7}>
          <Img fluid={prismicInicio.data.map.fluid} />
        </Col>
      </Row>
    </Container>
  );
};

export default MapSection;
