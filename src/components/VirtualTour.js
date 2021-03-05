import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Title = styled.h2`
  color: ${(props) => props.theme.colors.gray};
  letter-spacing: 0.1em;
`;

const VirtualTour = () => {
  return (
    <Container fluid className="py-5">
      <Title className="text-center mb-4">Recorrido Virtual</Title>
      <Row>
        <Col lg={10} className="mx-auto">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              src="/recorrido/index.html"
              className="embed-responsive-item"
              title="virtual tour"
              allowFullScreen
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VirtualTour;
