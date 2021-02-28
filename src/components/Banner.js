import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Button from "./Button";

const LeftCol = styled(Col)`
  background-color: ${(props) => props.theme.colors.green};
  p {
    color: #fff;
    opacity: 0.7;
    font-size: 1.8rem;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  &:after {
    content: "";
    display: block;
    padding-top: 72%;
  }
`;

const Banner = ({ setOpenedForm }) => {
  const { prismicInicio } = useStaticQuery(graphql`
    {
      prismicInicio {
        data {
          banner {
            content {
              text
            }
            button_text {
              text
            }
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
    <Container fluid className="px-0">
      <Row noGutters>
        <LeftCol
          md={6}
          className="text-center py-5 d-flex align-items-center justify-content-center"
        >
          <Row>
            <Col md={8} lg={7} className="mx-auto">
              <p className="mb-5">
                {prismicInicio.data.banner[0].content.text}
              </p>
              <Button
                onClick={() => {
                  setOpenedForm(true);
                }}
              >
                {prismicInicio.data.banner[0].button_text.text}
              </Button>
            </Col>
          </Row>
        </LeftCol>
        <Col md={6}>
          <ImgWrapper>
            <Img
              fluid={prismicInicio.data.banner[0].image.fluid}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                objectFit: "cover",
              }}
            />
          </ImgWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
