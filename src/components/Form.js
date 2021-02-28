import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import addToMailchimp from "gatsby-plugin-mailchimp";

import Close from "../images/close.inline.svg";
import Button from "./Button";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 55%;
  background-color: ${(props) =>
    props.submitted ? props.theme.colors.sand : props.theme.colors.green};
  transform: translateX(-100%);
  transition: all 0.3s ease-in-out;
  color: ${(props) => (props.submitted ? "#000" : "rgba(255, 255, 255, 0.7)")};
  z-index: 1500;
  max-height: 100vh;
  overflow-y: scroll;
  &.opened {
    transform: translateX(0);
  }
  input {
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: solid 1px #fff;
    color: rgba(255, 255, 255, 0.7);
    ::placeholder {
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  svg {
    path {
      fill: #000;
    }
  }
`;

const Form = ({ opened, setOpenedForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formMsg, setFormMsg] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const { prismicInicio } = useStaticQuery(graphql`
    {
      prismicInicio {
        data {
          form {
            image {
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
            success_image {
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
          }
        }
      }
    }
  `);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    const { result, msg } = await addToMailchimp(email, {
      FNAME: name,
      PHONE: phone,
    });

    if (result === "success") {
      setSubmitted(true);
    }
    setSubmitting(false);
    setFormMsg(msg);
  };

  return (
    <Wrapper className={opened ? "opened" : ""} submitted={submitted}>
      <Img
        fluid={
          submitted
            ? prismicInicio.data.form[0].success_image.fluid
            : prismicInicio.data.form[0].image.fluid
        }
      />
      <CloseButton
        onClick={() => {
          setOpenedForm(false);
        }}
      >
        <Close />
      </CloseButton>
      <div className="p-5 mx-5">
        {submitted ? (
          <h2 className="mb-4">
            ¡Muchas gracias por tu interés en Antal! <br />
            El hogar que se adapta a tu estilo de vida.
          </h2>
        ) : (
          <h2>¡Descarga nuestro brochure!</h2>
        )}
        <p className="mb-5">
          {submitted
            ? "En breve nos pondremos en contacto contigo para aclarar todas tus dudas."
            : "Déjanos tus datos para obtener mayor información con nuestro brochure digital."}
        </p>
        {!submitted && (
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Nombre"
              className="mb-4"
              name="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <input
              placeholder="Correo"
              className="mb-4"
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              placeholder="Celular"
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              required
            />
            <Button
              type="submit"
              className="mt-5"
              outlined
              disabled={submitting}
            >
              Enviar
            </Button>
          </form>
        )}
        {submitted && (
          <Button href="" external>
            Descargar
          </Button>
        )}
      </div>
    </Wrapper>
  );
};

export default Form;
