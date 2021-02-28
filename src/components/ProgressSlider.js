import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Arrow from "../images/arrow.inline.svg";

const Wrapper = styled.div`
  background-color: #f6f6f6;
  h2 {
    color: ${(props) => props.theme.colors.gray};
  }
  .slick-list {
    margin: 0 -30px;
  }
  .slick-slide {
    & > div {
      margin: 0 30px;
    }
  }
`;

const SlideImg = styled.div`
  position: relative;
  background-color: lightgray;
  &:after {
    content: "";
    display: block;
    padding-top: 65%;
  }
`;

const StyledArrow = styled.button`
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 100%;
  width: 50px;
  height: 50px;
  border: none;
  position: absolute;
  right: 15px;
  top: 0;
  bottom: 0;
  margin: auto;
  svg {
    width: 70%;
    height: auto;
  }
`;

const PrevArrow = () => null;

const CustomArrow = (props) => {
  return (
    <StyledArrow {...props}>
      <Arrow />
    </StyledArrow>
  );
};

const ProgressSlider = () => {
  const { prismicInicio } = useStaticQuery(graphql`
    {
      prismicInicio {
        data {
          progress_slider {
            title {
              text
            }
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
    slidesToShow: 2,
    prevArrow: <PrevArrow />,
    nextArrow: <CustomArrow />,
    infinite: prismicInicio.data.progress_slider.length > 2 ? true : false,
  };

  return (
    <Wrapper className="pt-5 mt-4 pb-3" id="avance-obra">
      <Container>
        <h2 className="text-center mb-5">Avance de obra</h2>
        <Slider {...settings}>
          {prismicInicio.data.progress_slider.map((slide) => (
            <div key={slide.image.url}>
              <SlideImg className="mb-3">
                <Img
                  fluid={slide.image.fluid}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                  }}
                />
              </SlideImg>
              <p>{slide.title.text}</p>
            </div>
          ))}
        </Slider>
      </Container>
    </Wrapper>
  );
};

export default ProgressSlider;
