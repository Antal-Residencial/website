import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 15px 25px;
  background-color: ${(props) =>
    props.outlined ? "transparent" : props.theme.colors.blue};
  border: ${(props) => (props.outlined ? "solid 1px #fff" : "none")};
  font-size: 0.8rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) =>
      props.outlined ? "#fff" : props.theme.colors.blueAlt};
    span {
      color: ${(props) => (props.outlined ? "#000" : "#fff")};
    }
  }
  span {
    color: #fff;
    opacity: 0.7;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledExternal = styled.a`
  padding: 15px 25px;
  background-color: ${(props) =>
    props.outlined ? "transparent" : props.theme.colors.blue};
  border: ${(props) => (props.outlined ? "solid 1px #fff" : "none")};
  font-size: 0.8rem;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  &:hover {
    background-color: ${(props) =>
      props.outlined ? "#fff" : props.theme.colors.blueAlt};
    span {
      color: ${(props) => (props.outlined ? "#000" : "#fff")};
    }
  }
  span {
    color: #fff;
    opacity: 0.7;
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }
`;

const Button = ({
  children,
  className,
  outlined = false,
  external = false,
  ...props
}) => {
  if (external) {
    return (
      <StyledExternal
        className={`${className} rounded-pill`}
        outlined={outlined}
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        <span>{children}</span>
      </StyledExternal>
    );
  }

  return (
    <StyledButton
      className={`${className} rounded-pill`}
      outlined={outlined}
      {...props}
    >
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
