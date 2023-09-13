import React from "react";

import { InnerMain } from "@components/InnerMain";
import { AboutSection } from "@components/Sections/AboutSection";

const AboutPage = () => {
  return (
    <React.Fragment key={"about"}>
      <InnerMain style={"body-bg-style-3"}>
        <h1>About Us</h1>
        <p>What makes a company great? That’s simple. It’s the people who work here.</p>
      </InnerMain>
      <AboutSection isInner={true} />
    </React.Fragment>
  );
};

export default AboutPage;
