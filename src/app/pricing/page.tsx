import React from "react";

import { InnerMain } from "@components/InnerMain";
import { PricingSection } from "@components/Sections/PricingSection";

const PricingPage = () => {
  return (
    <React.Fragment key={"pricing"}>
      <InnerMain style={"body-style-3"}>
        <div className="container text-center">
          <h1>Pricing Plans</h1>
          <p>
            Based on market demand, we have created 3 packages that will
            <br />
            cover all your business needs.
          </p>
        </div>
      </InnerMain>
      <PricingSection />
    </React.Fragment>
  );
};

export default PricingPage;
