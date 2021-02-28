import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";

import Button from "./Button";

const StyledContainer = styled(Container)`
  margin-top: -50px;
  h2 {
    color: ${(props) => props.theme.colors.gray};
    letter-spacing: 0.1em;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      position: relative;
      padding-left: 15px;
      letter-spacing: 0.1em;
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
`;

const Houses = ({ setOpenedForm }) => {
  const { prismicInicio } = useStaticQuery(graphql`
    {
      prismicInicio {
        data {
          houses {
            title {
              text
            }
            image {
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
            content {
              raw
            }
            show_button
          }
        }
      }
    }
  `);
  return (
    <StyledContainer fluid className="px-0" id="distribucion">
      {prismicInicio.data.houses.map((house) => (
        <Row
          key={house.title.text}
          noGutters
          className="mb-4 align-items-center"
        >
          <Col md={6}>
            <Img fluid={house.image.fluid} />
          </Col>
          <Col md={6} className="overflow-hidden">
            <Row>
              <Col md={8} lg={6} className="mx-auto">
                <h2 className="mb-4">{house.title.text}</h2>
                <RichText render={house.content.raw} />
                {house.show_button && (
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
