import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  h2 {
    color: ${(props) => props.theme.colors.gray};
    letter-spacing: 0.1em;
  }
`;

const Concept = () => {
  const { prismicInicio } = useStaticQuery(graphql`
    {
      prismicInicio {
        data {
          concepto {
            title {
              text
            }
            content {
              raw
            }
          }
        }
      }
    }
  `);
  const concept = {
    title: prismicInicio.data.concepto[0].title.text,
    content: prismicInicio.data.concepto[0].content.raw,
  };

  return (
    <StyledContainer className="pt-5 mt-4 text-center mb-5" id="concepto">
      <Row>
        <Col md={8} className="mx-auto">
          <h2 className="mb-4">{concept.title}</h2>
          <RichText render={concept.content} />
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Concept;
