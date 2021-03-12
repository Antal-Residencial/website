import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Arrow from "../images/arrow.inline.svg";

const StyledArrow = styled.button`
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 100%;
  width: 50px;
  height: 50px;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 2;
  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
  svg {
    width: 70%;
    height: auto;
  }
`;

const CustomArrow = (props) => {
  return (
    <StyledArrow {...props}>
      <Arrow />
    </StyledArrow>
  );
};

const PrevArrow = (props) => {
  return (
    <StyledArrow {...props} style={{ right: "auto", left: 0 }}>
      <Arrow style={{ transform: "rotate(180deg)" }} />
    </StyledArrow>
  );
};

const StyledContainer = styled(Container)`
  .slick-list {
    margin: 0 -10px;
    //margin-right: 15%;
    overflow: visible;
  }
  .slick-slide {
    & > div {
      margin: 0 10px;
    }
  }
`;

const Slide = styled.div`
  background-color: lightgray;
  position: relative;
  &:after {
    content: "";
    display: block;
    padding-top: 105%;
  }
`;

const Gallery = () => {
  const { prismicInicio } = useStaticQuery(graphql`
    {
      prismicInicio {
        data {
          gallery {
            image {
              fluid {
                ...GatsbyPrismicImageFluid
              }
              url
            }
          }
        }
      }
    }
  `);

  const settings = {
    slidesToShow: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <CustomArrow />,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    prismicInicio.data.gallery.length > 0 && (
      <StyledContainer fluid className="pt-5 mt-5 overflow-hidden">
        <Slider {...settings}>
          {prismicInicio.data.gallery.map((image) => (
            <Slide key={image.image.url}>
              <Img
                fluid={image.image.fluid}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  objectFit: "cover",
                }}
              />
            </Slide>
          ))}
        </Slider>
      </StyledContainer>
    )
  );
};

export default Gallery;
