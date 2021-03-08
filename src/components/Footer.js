import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Modal } from "react-bootstrap";

import Button from "./Button";
import SocialItems from "./SocialItems";
import Logo from "../images/logo.inline.svg";
import Spazios from "../images/spazios.inline.svg";
import Close from "../images/close.inline.svg";

const Wrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.green};
  h4 {
    color: #fff;
    opacity: 0.7;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  a {
    color: #fff;
    opacity: 0.7;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.4;
    }
  }
  .divider {
    width: 100%;
    height: 1px;
    display: block;
    background-color: #fff;
    opacity: 0.7;
  }
`;

const Copyright = styled.div`
  color: #fff;
  opacity: 0.7;
  button {
    color: inherit;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
  svg {
    margin-left: 5px;
  }
`;

const CloseIcon = styled(Close)`
  width: 20px;
  path {
    stroke: #000;
  }
`;

const Footer = ({ setOpenedForm }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Wrapper className="pt-5">
        <Container className="pt-5">
          <div className="text-center mb-5">
            <Logo />
          </div>
          <Row className="pb-5 text-center text-md-left">
            <Col className="mb-5 mb-lg-0">
              <h4 className="mb-4">Más información</h4>
              <Button
                onClick={() => {
                  setOpenedForm(true);
                }}
              >
                Descargar brochure
              </Button>
            </Col>
            <Col md={5} className="text-md-center mb-5 mb-lg-0">
              <h4 className="mb-4">Síguenos</h4>
              <SocialItems className="justify-content-center justify-content-md-start" />
            </Col>
            <Col>
              <h4 className="mb-4">Ponte en contacto</h4>
              <a href="tel:+524424541630">T. 442 454 1630</a> <br />
              <a href="mailto:info@antalresidencial.com">
                C. info@antalresidencial.com
              </a>
            </Col>
          </Row>
        </Container>
        <span className="divider"></span>
        <Copyright className="py-5">
          <Container className="text-center">
            <div className="d-md-flex align-items-end justify-content-center mb-5 mb-md-3">
              Un proyecto inmobiliario de <br className="d-md-none" />
              <a href="https://www.szs.com.mx" target="_blank" rel="noreferrer">
                <Spazios />
              </a>
            </div>
            <p>
              <button
                onClick={() => {
                  setOpenModal(true);
                }}
                className="bg-transparent border-0"
              >
                Aviso de privacidad.
              </button>{" "}
              Antal {new Date().getFullYear()}
            </p>
          </Container>
        </Copyright>
      </Wrapper>
      <Modal
        show={openModal}
        size="xl"
        centered
        onHide={() => {
          setOpenModal(false);
        }}
      >
        <Modal.Header>
          <div className="text-right w-100">
            <button
              className="bg-transparent border-0"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <CloseIcon />
            </button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <p>SECCIÓN 1 – ¿QUÉ HACEMOS CON TU INFORMACIÓN? </p>
          <p>
            Cuando navegas en nuestra tienda, también recibimos de manera
            automática la dirección de protocolo de internet de tu computadora
            (IP) con el fin de proporcionarnos información que nos ayuda a
            conocer acerca de su navegador y sistema operativo.
          </p>
          <p>
            Email marketing: Con tu permiso, podremos enviarte correos
            electrónicos acerca de nuestro sitio web, nuevos productos y otras
            actualizaciones
          </p>
          <p>SECTION 2 – CONSENTIMIENTO </p>
          <p>¿Cómo obtienen mi consentimiento?</p>
          <p>
            Cuando nos provees tu información personal implicamos que aceptas la
            recolección y uso de datos de manera confidencial.
          </p>
          <p>
            Si te pedimos tu información personal por una razón secundaria, como
            marketing, te pediremos directame tu expreso consentimiento, o te
            daremos la oportunidad de negarte.
          </p>
          <p>¿Cómo puedo anular mi consentimiento?</p>
          <p>
            Si luego de haber aceptado cambias de opinión, puedes anular tu
            consentimiento para que te contactemos, por la recolección, uso o
            divulgación de tu información, en cualquier momento, contactándonos
            a info@antalresidencial.com
          </p>

          <p>SECCIÓN 3 – SERVICES DE TERCERAS PARTES </p>
          <p>
            En general, los proveedores de terceras partes utilizados por
            nosotros solo recopilarán, usarán y divulgarán tu información en la
            medida que sea necesaria para que les permita desempeñar los
            servicios que nos proveen.
          </p>
          <p>
            Enlaces: Cuando haces clic en enlaces, puede que seas redirigido
            fuera de nuestro sitio. No somos reponsables por las prácticas de
            privacidad de otros sitios y te recomendamos leer sus normas de
            privacidad.
          </p>
          <p>SECCIÓN 4 – SEGURIDAD</p>
          <p>
            Para proteger tu información personal, tomamos precauciones
            razonables y seguimos las mejores prácticas de la industria para
            asegurarnos de que no haya pérdida de manera inapropiada, mal uso,
            acceso, divulgación, alteración o destrucción de la misma.
          </p>
          <p>SECCIÓN 5 – EDAD DE CONSENTIMIENTO</p>
          <p>
            Al utilizar este sitio, declaras que tienes al menos la mayoría de
            edad en tu estado o provincia de residencia, o que tienes la mayoría
            de edad en tu estado o provincia de residencia y que nos has dado tu
            consentimiento para permitir que cualquiera de tus dependientes
            menores use este sitio.
          </p>
          <p>SECCIÓN 6 – CAMBIOS A ESTA POLÍTICA DE PRIVACIDAD</p>
          <p>
            Nos reservamos el derecho de modificar esta política de privacidad
            en cualquier momento, así que por favor revísala frecuentemente.
            Cambios y aclaraciones entrarán en vigencia inmediatamente después
            de su publicación en el sitio web. Si hacemos cambios materiales a
            esta política, notificaremos aquí que ha sido actualizada, por lo
            que cual estás enterado de qué información recopilamos, cómo y bajo
            qué circunstancias, si las hubiere, la utilizamos y/o divulgamos.
          </p>
          <p>PREGUNTAS E INFORMACIÓN DE CONTACTO</p>
          <p>
            Si quieres acceder, corregir, enmendar o borrar cualquier
            información personal que poseamos sobre ti, registrar una queja, o
            simplemente quieres más información contacta a
            info@antalresidencial.com
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Footer;
