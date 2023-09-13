import React from "react";

import { InnerMain } from "@components/InnerMain";
import { PRIVACY_POLICY_UPDATE } from "@utils/constant";

const PrivacyPolicyPage = () => {
  return (
    <React.Fragment key={"privacy-policy"}>
      <InnerMain style={"body-style-3"}>
        <h1>Privacy Policy</h1>
        <p>{PRIVACY_POLICY_UPDATE.toLocaleDateString()}</p>
      </InnerMain>
      <section className="container">
        <div className="row legal">{/* Your Privacy Policy */}</div>
      </section>
    </React.Fragment>
  );
};

export default PrivacyPolicyPage;
