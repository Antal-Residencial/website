import React from "react";
import styled from "styled-components";

import Facebook from "../images/facebook.inline.svg";
import Instagram from "../images/instagram.inline.svg";
import Youtube from "../images/youtube.inline.svg";
import Tiktok from "../images/tiktok.inline.svg";
import Linkedin from "../images/linkedin.inline.svg";

const Social = styled.div`
  a {
    margin: 0 5px;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.4;
    }
  }
  svg {
    height: 24px;
    width: auto;
  }
`;

const SocialItems = ({ className, ...props }) => {
  return (
    <Social
      className={`d-flex align-items-center justify-content-md-center social ${className}`}
      {...props}
    >
      <a
        href="https://www.facebook.com/Antal-Residencial-102217768582628"
        target="_blank"
        rel="noreferrer"
      >
        <Facebook />
      </a>
      <a
        href="https://www.instagram.com/antalpachuca/"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram />
      </a>
      <a
        href="https://www.youtube.com/channel/UCdTwFhtZPYKrrCwXu43qumA"
        target="_blank"
        rel="noreferrer"
      >
        <Youtube />
      </a>
      <a
        href="https://vm.tiktok.com/ZMe6GcQoR/"
        target="_blank"
        rel="noreferrer"
      >
        <Tiktok />
      </a>
      <a
        href="https://www.linkedin.com/company/antal-residencial/about/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin />
      </a>
    </Social>
  );
};

export default SocialItems;
