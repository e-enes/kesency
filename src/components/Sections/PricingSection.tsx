"use client";

import React from "react";

import { styles } from "@utils/styles";
import { GetQuoteButton } from "@components/Buttons/GetQuoteButton";
import { Container, Row, Col } from "react-bootstrap";

const PricingSection = () => {
  const pricing = [
    {
      title: "SMALL BUSINESS",
      price: "$590*",
      facilities: [
        "3 Pages Responsive Website",
        "1 PPC Campaigns",
        "10 SEO Keywords",
        "Free Domain Name",
        "Free Hosting (VPS)",
        "Optional CDN (Content Delivery Network)",
      ],
      style: styles("cd"),
    },
    {
      title: "MEDIUM BUSINESS",
      price: "$1999$",
      facilities: [
        "10 Pages Responsive Website",
        "3 PPC Campaigns",
        "25 SEO Keywords",
        "Free Domain Name",
        "Free Hosting (VDS)",
        "Free CDN (Content Delivery Network) - Standard",
      ],
      style: styles("ef"),
    },
    {
      title: "CORPORATE BUSINESS",
      price: "let's Talk",
      facilities: [
        "Unlimited Pages Responsive Website",
        "10 PPC Campaigns",
        "50 SEO Keywords",
        "5 Free Domain Name",
        "Free Hosting (Dedicated)",
        "Free CDN (Content Delivery Network) - Premium",
      ],
      style: styles("ab"),
    },
  ];

  return (
    <section className="pricing inner-page-pricing">
      <Container>
        <Row className="pricing-wrapper">
          {pricing.map(({ title, price, facilities, style }, index1) => {
            return (
              <Col md={6} lg={4} key={index1}>
                <div className="pricing-block text-center content-block">
                  <span className={`icon-container ${style.light}`}>
                    <i className={style.icon}>{index1}</i>
                  </span>
                  <h6>{title}</h6>
                  <div className={`price ${style.icon}`}>{price}</div>
                  <div className="facilities">
                    {facilities.map((facility, index2) => {
                      return <div key={index1 + index2}>{facility}</div>;
                    })}
                  </div>
                  <GetQuoteButton to={"#quote"} style={undefined} />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export { PricingSection };
