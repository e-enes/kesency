import React from "react";

import { InnerMain } from "@components/InnerMain";
import { DescriptionService } from "@components/Service/DescriptionService";
import { ProcessService } from "@components/Service/ProcessService";
import { CDN } from "@utils/constant";

const MobilePage = () => {
  const process = [
    {
      title: "Consultation",
      description:
        "The consultation stage is where we discuss with our client their vision, goals, and requirements for the mobile app design. We gather information on their target audience, the features they want to include, and the desired user experience. We also provide our expert opinion on the latest design trends, best practices, and feasibility of the project. This stage sets the foundation for the wireframing stage.",
      image: CDN + "/images/services/process-tab/web-process/web-process-img-1.svg",
      icon: "ml-edu-86-People",
    },
    {
      title: "Wire-frame",
      description:
        "The wireframe stage is where we create a visual representation of the app's layout and functionality. We create a basic outline of the app's features, navigation, and user interface. This stage focuses on the functionality of the app and the user experience. We work with the client to refine the wireframes and ensure that they align with their requirements and vision.",
      image: CDN + "/images/services/process-tab/web-process/web-process-img-2.svg",
      icon: "ml-des-19-Transform-shape-graphics-design-tool-interface",
    },
    {
      title: "Final Design",
      description:
        "The final design stage is where we create the visual design of the app based on the approved wireframes. We create a high-fidelity design that includes colors, typography, and graphics that align with the client's branding and messaging. We also ensure that the design is optimized for different mobile devices and platforms. This stage involves creating a polished design that reflects the app's functionality and enhances the user experience.",
      image: CDN + "/images/services/process-tab/web-process/web-process-img-3.svg",
      icon: "ml-tec-9-check-mark-yes-computer-desktop-monitor-laptop",
    },
  ];

  return (
    <React.Fragment key={"mobile"}>
      <InnerMain style={"body-style-1"}>
        <h1>App Development</h1>
        <p>We’ll create mobile applications specifically for your company.</p>
      </InnerMain>
      <DescriptionService image={CDN + "/images/services/app-development.svg"}>
        <h2>Mobile First Concept</h2>
        <p>
          A mobile app is an online presence strategy that helps you market your business online. A mobile app is important because it helps
          build credibility as a business, however we recommend this only to medium/large companies. Another important thing is that you
          have the ability to represent your clients, why should they rely on you.
        </p>
      </DescriptionService>
      <ProcessService process={process} />
    </React.Fragment>
  );
};

export default MobilePage;
