import React from "react";
import Image from "next/image";

import { BackgroundShape } from "@components/BackgroundShape";
import { NavButton } from "@components/Buttons/NavButton";
import { ServicesSection } from "@components/Sections/ServicesSection";
import { AboutSection } from "@components/Sections/AboutSection";
import { FeaturesSection } from "@components/Sections/FeaturesSection";
import { CaseStudySection } from "@components/Sections/CaseStudySection";

const HomePage = () => {
  return (
    <React.Fragment key={"home"}>
      <main className="banner small-agency-home-header-bg">
        <div className="container">
          <BackgroundShape direction={"left"} className={"shape-home-banner"} />
          <div className="banner-content">
            <h1>
              Make your
              <br /> Business a Reality
            </h1>
            <p className="section-subheading">
              Empowering entrepreneurs to turn their dreams
              <br /> into profitable businesses. Start your journey today.
            </p>
            <NavButton to="/portfolio" label={"OUR PORTFOLIO"} />
          </div>
        </div>
      </main>
      <ServicesSection />
      <AboutSection isInner={false} />
      <FeaturesSection title="Our Impressive Portfolio" slice={3} item={false} />
      <CaseStudySection />
      <section className="clients">
        <div className="container">
          <div className="row justify-content-center clients-wrapper">
            <div className="client">
              <Image src={"/img_1.png"} alt="client1" width="131" height="37" />
            </div>
            <div className="client">
              <Image src={"/img_2.png"} alt="client3" width="131" height="37" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
