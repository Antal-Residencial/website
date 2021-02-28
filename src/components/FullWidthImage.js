import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const StyledImg = styled(Img)`
  z-index: 2;
`;

const FullWidthImage = () => {
  const { prismicInicio } = useStaticQuery(graphql`
    {
      prismicInicio {
        data {
          full_width_image {
            fluid {
              ...GatsbyPrismicImageFluid
            }
          }
        }
      }
    }
  `);

  return (
    <StyledImg
      fluid={prismicInicio.data.full_width_image.fluid}
      className="d-none d-md-block"
    />
  );
};

export default FullWidthImage;
