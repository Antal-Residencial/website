import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TextLoop from "react-text-loop";

import Button from "./Button";

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  & > div {
    z-index: 2;
    p {
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
    <Wrapper className="d-flex align-items-center">
      <Img
        fluid={prismicInicio.data.hero_image[0].image.fluid}
        alt=""
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          objectFit: "cover",
        }}
      />
      <Container className="text-white text-center">
        <p className="text-center">Una experiencia de</p>
        <p className="text-center">
          vida{" "}
          <TextLoop>
            <span>consciente</span>
            <span>responsable</span>
            <span>en comunidad</span>
          </TextLoop>
          .
        </p>
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
