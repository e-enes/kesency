import React from "react";
import Image from "next/image";

import { InnerMain } from "@components/InnerMain";
import { CDN, LEGAL_NOTICE_UPDATE } from "@utils/constant";

const LegalPage = () => {
  return (
    <React.Fragment key={"legal"}>
      <InnerMain style={"body-style-3"}>
        <h1>Legal Notice</h1>
        <p>{LEGAL_NOTICE_UPDATE.toLocaleDateString()}</p>
      </InnerMain>
      <section className="container">
        <div className="row legal align-items-center justify-content-around">
          <div className="col-md-9 col-lg-6 col-xl-5 order-1">
            <Image
              src={CDN + "/images/office/office-1.svg"}
              alt={"office-image"}
              className="img-fluid rounded shadow"
              width={3150}
              height={2100}
            />
          </div>
          <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 order-lg-2">
            <br />
            <ul>
              <li>
                Company name: <span className="legal-info">{/* Your Company Name */}</span>
              </li>
              <li>
                Social capital: <span className="legal-info">{/* Your Social Capital */}</span>
              </li>
              <li>
                Identification number: <span className="legal-info">{/* Your Company ID*/}</span>
              </li>
              <li>
                Email address: <span className="legal-info">{/* Your Company Email */}</span>
              </li>
              <li>
                Publication manager: <span className="legal-info">{/* Your Name */}</span>
              </li>
              <li>
                Contact the manager: <span className="legal-info">{/* Your Pro Email */}</span>
              </li>
            </ul>
            <hr />
            <ul>
              <li>
                Webmaster: <span className="legal-info">{/* Your Name */}</span>
              </li>
              <li>
                Contact the Webmaster: <span className="legal-info">{/* Your Pro Name */}</span>
              </li>
              <li>
                The host of the site: <span className="legal-info">{/* Your Host Provider */}</span>
              </li>
              <li>
                Head office: <span className="legal-info">{/* Your Head Office */}</span>
              </li>
            </ul>
            <hr />
            <p className="disclaimer-info">{/* Your Disclaimer (if any) */}</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default LegalPage;
