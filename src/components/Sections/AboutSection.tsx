"use client";

import React from "react";

import { BackgroundShape } from "@components/BackgroundShape";
import { Container, Row, Col } from "react-bootstrap";

interface IAboutSection {
  isInner: boolean;
}

const AboutSection = ({ isInner }: IAboutSection) => {
  const about = {
    topDescription:
      "At our company, we believe in leading by example and setting the standard for excellence in everything we do. Our team of experienced professionals is dedicated to providing innovative solutions and exceptional service, always staying ahead of the curve and striving for continuous improvement.",
    lowDescription:
      "We're committed to being industry leaders and pushing the boundaries of what's possible, both for our clients and ourselves. We lead from the front to ensure the success of our clients and the growth of our business.",
    counter: [
      {
        title: {
          t: "Happy ",
          b: "Clients",
        },
        amount: 150,
        style: "txt-grad-ef",
      },
      {
        title: {
          t: "Projects ",
          b: "Completed",
        },
        amount: 300,
        style: "txt-grad-ab",
      },
      {
        title: {
          t: "Running",
          b: "Projects",
        },
        amount: 800,
        style: "txt-grad-cd",
      },
    ],
  };

  return (
    <section className={`about-us ${isInner ? "section-padding inner-page-about-us" : ""}`}>
      <BackgroundShape direction={"right"} className={"shape-home-banner"} />
      <div className="about-bg grad-style-cd"></div>
      <Container>
        <Row>
          <Col md={6} className="ml-auto">
            <h2>We Lead from the Front</h2>
            <p>{about.topDescription}</p>
            <p>{about.lowDescription}</p>
            <div className="counter-wrapper d-flex justify-content-between">
              {about.counter.map(({ title, amount, style }, index) => {
                return (
                  <div className="inner-block" key={index}>
                    <div className={`counter-block d-block ${style}`}>
                      <span className="counter">{amount}</span>+
                    </div>
                    {title.t.toUpperCase()} <br /> {title.b.toUpperCase()}
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export { AboutSection };
