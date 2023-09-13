"use client";

import React from "react";

import { BackgroundShape } from "@components/BackgroundShape";
import { Container } from "react-bootstrap";

interface IInnerMain {
  style: string;
  children: React.ReactNode;
}

const InnerMain = ({ style, children }: IInnerMain) => {
  return (
    <main className={`${style} inner-page`}>
      <div className="page-wrapper">
        <BackgroundShape direction={"right"} className={"inner-page-shape-banner-right"} />
        <BackgroundShape direction={"left"} className={"inner-page-shape-banner-left"} />
        <div className="inner-page-banner">
          <Container className="text-center">{children}</Container>
        </div>
      </div>
    </main>
  );
};

export { InnerMain };
