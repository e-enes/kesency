import React from "react";

import { InnerMain } from "@components/InnerMain";
import { NavButton } from "@components/Buttons/NavButton";
import { FeaturesSection } from "@components/Sections/FeaturesSection";

const StudiesPage = () => {
  return (
    <React.Fragment key={"studies"}>
      <InnerMain style={"body-bg-style-3"}>
        <h1>Oops! Under maintenance.</h1>
        <p>This part of the site is under maintenance for technical reasons. Try again later!</p>
        <NavButton to={"/"} label={"Back to Home"} />
      </InnerMain>
      <FeaturesSection title="Featured Projects" slice={3} item={true} />
    </React.Fragment>
  );
};

export default StudiesPage;
