import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const StyledContainer = styled(Container)`
  h2 {
    color: ${(props) => props.theme.colors.gray};
    letter-spacing: 0.1em;
  }
`;

const Amenities = () => {
  const { prismicInicio } = useStaticQuery(graphql`
    {
      prismicInicio {
        data {
          amenidades {
            title {
              text
            }
            amenidades1 {
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
    <>
      <StyledContainer id="amenidades">
        <Row>
          <Col md={10} className="mx-auto">
            <h2 className="mb-5 text-center text-md-0">
              {prismicInicio.data.amenidades[0].title.text}
            </h2>
            <Row>
              {prismicInicio.data.amenidades[0].amenidades1.text
                .split(",")
                .map((amenitie) => {
                  return (
                    <Col
                      md={4}
                      key={amenitie}
                      className="mb-md-4 text-center text-md-left"
                    >
                      {amenitie.trim()}
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </StyledContainer>
      <Container fluid>
        <div className="px-md-5 mt-4 mt-md-0">
          <Img fluid={prismicInicio.data.amenidades[0].image.fluid} />
        </div>
      </Container>
    </>
  );
};

export default Amenities;
