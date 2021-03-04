import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";
import Slider from "react-slick";

import Button from "./Button";

const StyledContainer = styled(Container)`
  @media (min-width: 992px) {
    margin-top: -50px;
  }
  h2 {
    color: ${(props) => props.theme.colors.gray};
    letter-spacing: 0.1em;
    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 1.2rem;
    }
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    @media (min-width: 768px) {
      text-align: left;
    }
    li {
      position: relative;
      letter-spacing: 0.1em;
      @media (min-width: 768px) {
        padding-left: 15px;
        &:before {
          content: "";
          display: block;
          width: 8px;
          height: 1px;
          background-color: #000;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          position: absolute;
        }
      }
    }
  }
`;

const Houses = ({ setOpenedForm }) => {
  const { prismicInicio } = useStaticQuery(graphql`
    {
      prismicInicio {
        data {
          body {
            ... on PrismicInicioBodyHouses {
              id
              items {
                image {
                  alt
                  url
                  fluid {
                    ...GatsbyPrismicImageFluid
                  }
                }
              }
              primary {
                title {
                  text
                }
                show_button
                content {
                  raw
                }
              }
            }
          }
        }
      }
    }
  `);

  const settings = {
    arrows: false,
    fade: true,
    autoplay: true,
    adaptiveHeight: true,
  };

  return (
    <StyledContainer
      fluid
      className="px-0 pt-5 pt-md-0 py-md-5 py-lg-0"
      id="distribucion"
    >
      {prismicInicio.data.body.map((slice) => (
        <Row
          key={slice.id}
          noGutters
          className="mb-5 mb-md-4 align-items-center"
        >
          <Col md={6} className="mb-4 mb-md-0">
            <Slider {...settings}>
              {slice.items.map((item) => (
                <Img
                  key={item.image.url}
                  fluid={item.image.fluid}
                  alt={item.image.alt || ""}
                />
              ))}
            </Slider>
          </Col>
          <Col md={6} className="overflow-hidden">
            <Row>
              <Col
                md={8}
                lg={6}
                className="px-5 px-md-0 mx-auto text-center text-md-left"
              >
                <h2 className="mb-4 text-center text-md-left">
                  {slice.primary.title.text}
                </h2>
                <RichText render={slice.primary.content.raw} />
                {slice.primary.show_button && (
                  <Button
                    onClick={() => {
                      setOpenedForm(true);
                    }}
                    className="mt-5"
                  >
                    Conoce más detalles
                  </Button>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </StyledContainer>
  );
};

export default Houses;
