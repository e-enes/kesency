"use client";

import React from "react";
import Image from "next/image";

import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";

type ProcessType = {
  title: string;
  description: string;
  image: string;
  icon: string;
}[];

interface IProcessService {
  process: ProcessType;
}

const ProcessService = ({ process }: IProcessService) => {
  return (
    <section className="our-process section-padding">
      <Container>
        <h2 className="text-center">Our Process</h2>
        <div className="service-process-tab">
          <Tabs defaultActiveKey="tab0" id="service-tab-nav">
            {process.map(({ title, icon, description, image }, index) => (
              <Tab
                eventKey={`tab${index}`}
                title={
                  <React.Fragment>
                    <i className={icon}></i>
                    <span>{title}</span>
                  </React.Fragment>
                }
                key={index}
              >
                <Row className="no-gutters align-items-center">
                  <Col lg={5} className="text-lg-right">
                    <Image
                      src={image}
                      alt={`process-tab-image-${index}`}
                      width={420}
                      height={320}
                      className="img-fluid"
                      loading={"eager"}
                    />
                  </Col>
                  <Col lg={6} className="offset-lg-1 text-center text-lg-left">
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </Col>
                </Row>
              </Tab>
            ))}
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export { ProcessService };
