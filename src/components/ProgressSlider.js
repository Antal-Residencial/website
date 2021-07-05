import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import styled from "styled-components";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Arrow from "../images/arrow.inline.svg";
import Play from "../images/play-button.inline.svg";

const Wrapper = styled.div`
  background-color: #f6f6f6;
  h2 {
    color: ${(props) => props.theme.colors.gray};
  }
  .slick-slider {
    overflow: hidden;
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

const SlideVideo = styled.div`
  position: relative;
  &:before {
    display: block;
    padding-top: 65%;
    content: "";
  }
  img {
    object-fit: cover;
  }
  iframe,
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  svg {
    position: absolute;
    width: 50px;
    height: 50px;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    path {
      fill: #fff;
    }
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

const LightboxBtn = styled.button`
  text-align: left;
  border: 0;
  padding: 0;
  margin: 0;
  background: transparent;
  cursor: pointer;
`;

const LightboxVideo = styled.div`
  position: relative;
  &:before {
    display: block;
    padding-top: calc(9 / 16 * 100%);
    content: "";
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
  const [showLightbox, setShowLightbox] = useState(false);
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
            video {
              html
              thumbnail_url
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
    <>
      {prismicInicio.data.progress_slider.length > 0 && (
        <Wrapper className="pt-5 mt-4 pb-3" id="avance-obra">
          <Container>
            <h2 className="text-center mb-5">Avance de obra</h2>
            <Slider {...settings}>
              {prismicInicio.data.progress_slider.map((slide) => (
                <LightboxBtn
                  key={slide.image.url || slide.video.thumbnail_url}
                  onClick={() => setShowLightbox(true)}
                >
                  {slide.video.html ? (
                    <SlideVideo
                      className="mb-3"
                      //dangerouslySetInnerHTML={{ __html: slide.video.html }}
                    >
                      <img
                        src={slide.video.thumbnail_url}
                        alt={slide.title.text}
                      />
                      <Play />
                    </SlideVideo>
                  ) : (
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
                  )}
                  <p>{slide.title.text}</p>
                </LightboxBtn>
              ))}
            </Slider>
          </Container>
        </Wrapper>
      )}
      <Modal
        centered
        size="xl"
        show={showLightbox}
        onHide={() => setShowLightbox(false)}
      >
        <Modal.Body>
          <Slider {...settings} slidesToShow={1} infinite adaptiveHeight>
            {prismicInicio.data.progress_slider.map((slide) => (
              <div key={slide.image.url || slide.video.thumbnail_url}>
                {slide.video.html ? (
                  <LightboxVideo
                    dangerouslySetInnerHTML={{ __html: slide.video.html }}
                  />
                ) : (
                  <Img fluid={slide.image.fluid} />
                )}
              </div>
            ))}
          </Slider>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProgressSlider;
