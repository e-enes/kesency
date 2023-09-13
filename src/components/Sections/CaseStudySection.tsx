"use client";

import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BackgroundShape } from "@components/BackgroundShape";
import { Col, Container, Row } from "react-bootstrap";
import { CDN } from "@utils/constant";

const CaseStudySection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    delay: 2000,
  };

  const sliders = [
    {
      title: "Make Your Business Flourish Online",
      description:
        "In today's digital era, businesses must establish a robust online presence for effective customer engagement. The ubiquitous use of digital devices and online platforms makes it imperative. By taking proactive steps to embrace the digital realm, companies can significantly enhance visibility, broaden their reach, and access diverse markets. Leveraging various digital marketing channels, they proactively promote products and services, establish a distinctive brand identity, and cultivate enduring relationships with valued customers.",
    },
    {
      title: "Empower Your Business Growth",
      description:
        'Consider this as more than just a slogan; it\'s a dynamic directive for business owners to actively and passionately engage with their ventures. It encourages viewing the enterprise as a living entity, capable of growth and evolution. Embracing new technologies and online platforms, businesses extend their reach to diverse audiences. This enables them to connect with customers in innovative ways, fostering dynamic and meaningful relationships. Ultimately, "Empower Your Business Growth" is a rallying call for entrepreneurs to harness their passion, transforming it into a thriving, dynamic enterprise that enriches lives and contributes to the community.',
    },
    {
      title: "Unlock Your Investment's Potential",
      description:
        "Return On Investment, often known as ROI, is a pivotal financial metric for businesses. It measures the profitability of an investment relative to its initial cost. In the business arena, ROI is indispensable for evaluating investment, project, or overall performance. It provides valuable insights, aiding businesses in making informed decisions. By comparing expected returns to initial expenditure, ROI offers a comprehensive perspective on investment worthiness. It stands as a cornerstone for prudent financial management, guiding businesses toward opportunities promising favorable outcomes.",
    },
  ];

  return (
    <section className="case-study small-agency-case-study">
      <BackgroundShape direction={"left"} className={"shape-home-banner"} />
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-2">
            <Slider className="case-study-slider" {...settings}>
              {sliders.map(({ title, description }, index) => {
                return (
                  <div className="item" key={index}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="btn-container">
                      <Link href={"/studies"} className="custom-btn btn-big grad-style-ab">
                        SEE THE CASE STUDY
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </Col>
          <Col lg={6} className="img-container">
            <Image
              src={CDN + "/images/case-study/case-study-slide-1.svg"}
              alt={"case-study"}
              className="img-fluid"
              width="635"
              height="654"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export { CaseStudySection };
