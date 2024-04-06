import React from "react";

import { InnerMain } from "@components/InnerMain";
import { DescriptionService } from "@components/Service/DescriptionService";
import { ProcessService } from "@components/Service/ProcessService";
import { CDN } from "@utils/constant";

const DesignPage = () => {
  const process = [
    {
      title: "Consultation",
      description:
        "The consultation stage is the first and most crucial stage of web design. This is where you meet with the client to discuss their vision, goals, and expectations for their website. During this stage, you should ask the client questions about their business and what they want their website to achieve. You should also discuss the target audience, preferred color schemes, and branding guidelines. Additionally, you should identify any technical requirements, such as e-commerce functionality or responsive design, that may impact the design process.",
      image: CDN + "/images/services/process-tab/web-process/web-process-img-1.svg",
      icon: "ml-edu-86-People",
    },
    {
      title: "Wire-frame",
      description:
        "Once you have gathered all the necessary information and specifications, you can move on to the wire-framing stage. During this stage, you will create a basic framework of the website, which is essentially a blueprint or schematic of the layout. You should begin by identifying the essential elements of the website, such as the navigation menu, header, and footer. From there, you can start to fill in the rest of the layout with content and images. It's important to note that wire-framing is not a design stage; it's simply a way to visualize the layout of the website and ensure that all the necessary elements are in place.",
      image: CDN + "/images/services/process-tab/web-process/web-process-img-2.svg",
      icon: "ml-des-19-Transform-shape-graphics-design-tool-interface",
    },
    {
      title: "Final Design",
      description:
        "After the wire-framing stage is complete and approved by the client, you can move on to the final design stage. This is where you will create a polished design that brings the wire-frame to life. You should start by selecting a color scheme and typography that aligns with the client's brand and aesthetic preferences. From there, you can start to create the visual elements of the website, such as buttons, icons, and images. You should also ensure that the design is mobile-friendly and responsive, so that it looks great on any device. Once the final design is complete, you can present it to the client for approval, make any necessary revisions, and then move on to the development stage.",
      image: CDN + "/images/services/process-tab/web-process/web-process-img-3.svg",
      icon: "ml-tec-9-check-mark-yes-computer-desktop-monitor-laptop",
    },
  ];

  return (
    <React.Fragment key={"website-design"}>
      <InnerMain style={"body-style-1"}>
        <h1>Website Design</h1>
        <p>What makes a company great? That’s simple. It’s the people who work here.</p>
      </InnerMain>
      <DescriptionService image={CDN + "/images/services/web-design.svg"}>
        <h2>Responsive Web Design</h2>
        <p>
          A website and online presence strategy help you to market your business online. A website is important because it helps build
          credibility as a business. Another important thing is that you have the capacity to represent your customers, why should they rely
          on you.
        </p>
      </DescriptionService>
      <ProcessService process={process} />
    </React.Fragment>
  );
};

export default DesignPage;
