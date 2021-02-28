import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { RichText } from "prismic-reactjs";

import Amenities from "./Amenities";

const Wrapper = styled.div`
  background-color: #f6f6f6;
`;

const StyledContainer = styled(Container)`
  h2 {
    color: ${(props) => props.theme.colors.gray};
    letter-spacing: 0.1em;
  }
  ul {
    padding: 0;
    list-style: none;
    li {
      padding-left: 15px;
      position: relative;
      letter-spacing: 0.1em;
      &:before {
        content: "";
        display: block;
        width: 8px;
        height: 1px;
        background-color: #000;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    }
  }
`;

const MasterPlan = () => {
  const { prismicInicio } = useStaticQuery(graphql`
    {
      prismicInicio {
        data {
          master_plan {
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
          }
        }
      }
    }
  `);

  return (
    <Wrapper className="pb-4">
      <StyledContainer className="pt-5 mb-5 pb-4" id="masterplan">
        <Row className="align-items-center">
          <Col md={7}>
            <Img fluid={prismicInicio.data.master_plan[0].image.fluid} />
          </Col>
          <Col md={5}>
            <h2 className="mb-5">
              {prismicInicio.data.master_plan[0].title.text}
            </h2>
            <RichText render={prismicInicio.data.master_plan[0].content.raw} />
          </Col>
        </Row>
      </StyledContainer>
      <Amenities />
    </Wrapper>
  );
};

export default MasterPlan;
