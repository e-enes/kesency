import React from "react";
import Link from "next/link";

import { InnerMain } from "@components/InnerMain";
import { TERMS_CONDITIONS_UPDATE } from "@utils/constant";

const TermsPage = () => {
  return (
    <React.Fragment key={"privacy-policy"}>
      <InnerMain style={"body-style-3"}>
        <h1>Terms & Conditions</h1>
        <p>{TERMS_CONDITIONS_UPDATE.toLocaleDateString()}</p>
      </InnerMain>
      <section className="container">
        <div className="row legal">{/* Your Terms & Conditions */}</div>
      </section>
    </React.Fragment>
  );
};

export default TermsPage;
