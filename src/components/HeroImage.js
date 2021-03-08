import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TextLoop from "react-text-loop";

import Button from "./Button";

const Wrapper = styled.div`
  position: relative;
  .container {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
  & > div {
    z-index: 2;
    p,
    div {
      font-size: 1.5rem;
      letter-spacing: 0.1em;
      line-height: 1;
      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }
  }
`;

const HeroImage = ({ setOpenedForm }) => {
  const { prismicInicio } = useStaticQuery(graphql`
    {
      prismicInicio {
        data {
          hero_image {
            image {
              alt
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
            mobile_image {
              alt
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Img
        fluid={prismicInicio.data.hero_image[0].image.fluid}
        alt={prismicInicio.data.hero_image[0].image.alt || ""}
        className="d-none d-md-block"
      />
      <Img
        fluid={prismicInicio.data.hero_image[0].mobile_image.fluid}
        alt={prismicInicio.data.hero_image[0].mobile_image.alt || ""}
        className="d-md-none"
      />
      <Container className="text-white text-center position-absolute d-flex align-items-center justify-content-center flex-column">
        <p className="text-center">Una experiencia de</p>
        <div className="text-center">
          vida{" "}
          <TextLoop>
            <span>consciente</span>
            <span>responsable</span>
            <span>en comunidad</span>
          </TextLoop>
          .
        </div>
        <Button
          className="mt-4"
          onClick={() => {
            setOpenedForm(true);
          }}
        >
          Descargar brochure
        </Button>
      </Container>
    </Wrapper>
  );
};

export default HeroImage;
