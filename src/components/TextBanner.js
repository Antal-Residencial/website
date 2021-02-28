import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";

const RightCol = styled(Col)`
  background-color: ${(props) => props.theme.colors.green};
  p {
    color: #fff;
    opacity: 0.7;
    font-size: 1.5rem;
  }
`;

const TextBanner = () => {
  const { prismicInicio } = useStaticQuery(graphql`
    {
      prismicInicio {
        data {
          text_banner {
            image {
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
            content {
              raw
            }
          }
        }
      }
    }
  `);

  return (
    <Container fluid className="px-0">
      <Row noGutters>
        <Col md={6}>
          <Img fluid={prismicInicio.data.text_banner[0].image.fluid} />
        </Col>
        <RightCol
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <div>
            <div className="d-inline">
              <RichText
                render={prismicInicio.data.text_banner[0].content.raw}
              />
            </div>
          </div>
        </RightCol>
      </Row>
    </Container>
  );
};

export default TextBanner;
