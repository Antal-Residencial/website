import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/700.css";

import WhatsappIcon from "../images/whatsapp.inline.svg";

const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: 'Work Sans', sans-serif;
  }
  a, button {
    cursor: pointer;
  }
  a {
    &:hover {
      text-decoration: none;
    }
  }
  .headroom-wrapper {
    height: auto !important;
  }
  .headroom {
    top: 0;
    left: 0;
    right: 0;
    z-index: 1200 !important;
    position: fixed !important;
    background: transparent;
  } 
  .headroom--unfixed {
    //position: relative;
    transform: translateY(0);
  }
  .headroom--scrolled {
    transition: transform 200ms ease-in-out;
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0%);
    background: #fff;
    header {
      color: #000;
      button {
        span {
          background: #000;
        }
      }
      svg {
        path {
          fill: #000;
        }
      }
    }
  }
`;

const theme = {
  colors: {
    blue: "#335B6C",
    gray: "#808C80",
    green: "#808C80",
    sand: "#DFD5C8",
    blueAlt: "#568a9f",
  },
};

const Whatsapp = styled.a`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1999;
  svg {
    width: 50px;
    height: auto;
    @media (min-width: 768px) {
      width: 60px;
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {children}
        <Whatsapp
          href={`https://api.whatsapp.com/send?phone=+524424541630&text=${encodeURI(
            "Quiero conocer más de Antal"
          )}`}
          target="_blank"
        >
          <WhatsappIcon />
        </Whatsapp>
      </ThemeProvider>
    </>
  );
};

export default Layout;
