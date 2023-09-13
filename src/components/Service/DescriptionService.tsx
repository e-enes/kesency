"use client";

import React from "react";
import Image from "next/image";

import { Col, Container, Row } from "react-bootstrap";

interface IDescriptionService {
  children: React.ReactNode;
  image: string;
}

const DescriptionService = ({ children, image }: IDescriptionService) => {
  return (
    <section className="image-with-description">
      <Container>
        <Row className="align-items-center justify-content-around text-center image-with-description-block">
          <Col lg={6}>{children}</Col>
          <Col lg={6} className="text-lg-right">
            <Image
              src={image}
              alt="description image"
              className="img-fluid"
              width={525}
              height={400}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export { DescriptionService };
