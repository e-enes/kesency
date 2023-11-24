"use client";

import React from "react";
import Link from "next/link";

import { styles } from "@utils/styles";
import { Container, Row, Col } from "react-bootstrap";

const ServicesSection = () => {
  const services = [
    {
      to: "/service/logo",
      title: "Logo & Branding",
      description:
        "Create a strong and recognizable identity for your business with our expert logo and branding services. Our team of skilled designers will work closely with you to bring your vision to life and leave a lasting impression on your audience.",
      icon: "ml-des-62-Precision-compasses-graphics-design-tool-interface",
      style: styles("cd"),
    },
    {
      to: "/service/website/design",
      title: "Website Development",
      description:
        "Your website is often the first impression customers have of your business. Our expert website design services will ensure that your online presence is modern, functional, and visually appealing. From custom design to user experience, our team will work with you to create a website that showcases your brand and drives conversions.",
      icon: "ml-des-57-upload-download-sync-application-device-mobile-computer",
      style: styles("ab"),
    },
    {
      to: "/service/mobile",
      title: "Mobile app Development",
      description:
        "In today's mobile-first world, having a powerful mobile app can help you engage with your customers and stand out in a crowded market. Our experienced mobile app development team will work with you to turn your vision into a reality, creating a customized app that meets your unique business needs.",
      icon: "ml-tec-45-responsive-mobile-phone-tablet-computer-desktop-monitor-laptop",
      style: styles("ef"),
    },
    {
      to: "/service/seo",
      title: "Search Engine Optimization",
      description:
        "Drive traffic and boost your online visibility with our comprehensive search engine optimization (SEO) services. Our SEO experts will work with you to develop a customized strategy that targets the keywords and phrases your audience is searching for.",
      icon: "ml-tec-8-search-magnifier-computer-desktop-monitor-laptop",
      style: styles("cd"),
    },
    {
      to: "/service/ppc",
      title: "Pay-Per-Click",
      description:
        "Drive targeted traffic to your website and increase conversions with our pay-per-click (PPC) advertising services. Our experienced PPC team will create a customized strategy that targets your ideal customer, utilizing platforms like Google Ads and social media advertising to reach them at the right time and place.",
      icon: "ml-symtwo-34-cursor-click-browser-website-arrow-computer",
      style: styles("ab"),
    },
    {
      to: "/service/smm",
      title: "Social Media Marketing",
      description:
        "Engage with your audience and grow your brand on social media with our expert social media marketing services. Our team will develop a customized strategy that aligns with your brand's voice and values, creating engaging content and managing your social media channels to increase your visibility and attract new followers.",
      icon: "ml-dat-63-database-computer-network-internet-globe-server",
      style: styles("ef"),
    },
  ];

  return (
    <section className="services z-3">
      <Container>
        <Row className="justify-content-center">
          {services.map(({ to, title, description, icon, style }, index) => {
            return (
              <Col md={6} lg={4} key={index} className="mb-5" data-aos="fade-up">
                <Link href={to} className="service-box text-center content-block">
                  <div className={`box-bg ${style.box}`}></div>
                  <span
                    className={`icon-container ${style.light}`}
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className={`${icon} ${style.icon}`}></i>
                  </span>
                  <h5 className="text-center">{title}</h5>
                  <p className="service-description">{description}</p>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export { ServicesSection };
